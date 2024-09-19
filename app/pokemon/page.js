'use client'
import {useState, useEffect } from "react";
import NewPokemonAdd from "../components/NewPokemonAdd";
import PokemonTable from "../components/PokemonTable";

export default function Home() {
  const [pokemon, setPokemon] = useState([]);

  // Fetch function to get all Pokémon
  async function getAllPokemon() {
    const res = await fetch("http://localhost:8080/pokemon", { method: "GET" }, 
      
    );
    const resJSON = await res.json();
    setPokemon(resJSON);
  }

  useEffect(() => {
    getAllPokemon();
  }, []);
  
  return (
    <div>
        <PokemonTable />
        <hr />
        <NewPokemonAdd reloadPokemon={() => {/* Logic to reload data */}} />
    </div>
);
}

