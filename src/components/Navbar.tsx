type Pokemon = {
    name: string;
    imgSrc?: string;
  }
  
  type NavBarProps = {
    setPokemonName: (name: string) => void;
    pokemonList: Pokemon[];
  }


function NavBar({setPokemonName,pokemonList} : NavBarProps) {
    return (
    <nav>
        {pokemonList.map((p) => (
        <button key={p.name} onClick={() => setPokemonName(p.name)}>
        {p.name}
        </button>
  ))}
    </nav>
    );
}
  
  export default NavBar;