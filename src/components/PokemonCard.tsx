
type Pokemon = {
    name: string;
    imgSrc?: string;
}


function PokemonCard({ pokemon }: {pokemon: Pokemon}) {

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