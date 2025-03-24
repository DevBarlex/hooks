import { useState, useEffect } from "react"

const useCustomHook = (url) => {
  const [data, setData] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error("Información no encontrada")
        }
        const result = await response.json()
        setData(result)
      } catch (error) {
        console.log('Ha ocurrido un error', error)
      }
    }
    fetchData()
  }, [url])

  return {data}
}

export default useCustomHook
