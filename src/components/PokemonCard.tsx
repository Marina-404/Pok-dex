const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];

function PokemonCard() {
    const pokemon = pokemonList[1];
    return (
        <div>
            <h2>{pokemon.name}</h2>
            {pokemon.imgSrc ? (
            <img src= {pokemon.imgSrc} alt={`image de ${pokemon.name}`} 
            /> 
            ) : (
                <p>???</p>
            )} 
        </div>
    );
  }
  
  export default PokemonCard;