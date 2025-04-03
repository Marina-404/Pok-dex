
type Pokemon = {
    name: string;
    imgSrc?: string;
}


function PokemonCard({ pokemon }: {pokemon: Pokemon}) {

    return (
        <div className="card-pokemon">
            {pokemon.imgSrc ? (
            <img className="color-img"src= {pokemon.imgSrc} alt={`image de ${pokemon.name}`} 
            /> 
            ) : (
                <p>no image</p>
            )}   
            <h2>{pokemon.name}</h2>
        </div>
    );
  }
  
  export default PokemonCard;