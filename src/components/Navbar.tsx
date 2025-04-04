type Pokemon = {
    name: string;
    imgSrc?: string;
  }
  
  type NavBarProps = {
    setPokemonName: (name: string) => void;
    pokemonList: Pokemon[];
  }


function NavBar({setPokemonName,pokemonList} : NavBarProps) {
  
  const pikachuClick = (name:string) => {
    setPokemonName(name);
    if (name === "Pikachu"){
      alert("Pika Pika! Pikachu!!!");
      console.log("Pika Pika! Pikachu!!!");
    }
  };


    return (
    <nav>
        {pokemonList.map((p) => (
        <button 
         key={p.name}
         onClick={() => pikachuClick(p.name)}>
        {p.name}
        </button>
  ))}


    </nav>
    );
}
  
  export default NavBar;