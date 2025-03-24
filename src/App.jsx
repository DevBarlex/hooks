import useCustomHook from './hooks/useCustomHook';
import './App.css';
 
 
 function App () {
   const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1';
   const urlRick = 'https://rickandmortyapi.com/api/character/1';
   
   const {data: pokemon} = useCustomHook(urlPokemon)
   const {data: rick} = useCustomHook(urlRick)

  return(
    <>
      <h1>Personajes</h1>

      <h2>Pokemon</h2>
      {pokemon && (
        <>
          <p><strong>Nombre:</strong> {pokemon.name.toUpperCase()}</p>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </>
      )}

      <h2>Personaje Rick and Morty</h2>
      {rick && (
              <>
                <p><strong>Nombre:</strong> {rick.name}</p>
                <img src={rick.image} alt={rick.name} />
              </>
            )}
    </>
  ) 
}

export default App
