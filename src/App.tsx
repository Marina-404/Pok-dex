import { useState } from "react";
import { useEffect } from "react";
import NavBar  from "./components/Navbar.tsx";
import PokemonCard from "./components/PokemonCard.tsx";

import "./App.css";



const pokemonList = [
  {
    name: "Bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "Charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "Squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "Pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "Mew",
  },
];

function App() {
  useEffect(() => {   
        alert("hello pokemon trainer :)")
      },[]
  );

  const [pokemonName, setPokemonName] = useState("Bulbasaur");

  const pokemon = pokemonList.find((pokemon) => pokemon.name === pokemonName);

  if (pokemon == null) {
    throw new Error("Invalid pokemon name");
  }

  return (
    <div>
      <nav>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"/>

          <ul>
            <li>About</li>
            <li>Contact</li>          
          </ul>

      </nav>
      <NavBar setPokemonName={setPokemonName} pokemonList={pokemonList} />
     
        
       <PokemonCard pokemon={pokemon} />
    </div>
  );
}

export default App; 