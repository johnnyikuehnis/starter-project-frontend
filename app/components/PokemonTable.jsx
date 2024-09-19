'use client';
import { useEffect, useState } from "react";
import classes from "./pokemon-table-styles.module.css";

function PokemonTable() {
    const [pokemon, setPokemon] = useState([]);

    // Function to fetch Pokémon data
    async function getAllPokemon() {
        const res = await fetch("http://localhost:8080/pokemon");
        const resJSON = await res.json();
        setPokemon(resJSON);
    }

    useEffect(() => {
        getAllPokemon();
    }, []);

    // Function to reload Pokémon data
    function reloadPokemon() {
        getAllPokemon();
    }

    return (
        <div className = {classes.tableContainer}>
            <h2>Pokemon Table</h2>
            <button className = {classes.reloadButton} onClick={reloadPokemon}>
                Reload
            </button>
            <br />
            <br />
            <table className={classes.table}>
                <thead>
                    <tr className={classes.row}>
                        <th className = {classes.th}>Name</th>
                        <th className = {classes.th}>Type One</th>
                        <th className = {classes.th}>Type Two</th>
                        <th className = {classes.th}>Generation</th>
                    </tr>
                </thead>
                <tbody>
                    {pokemon.map((p) => (
                        <tr key={p.id} className={classes.row}>
                            <td className = {classes.td}>{p.name}</td>
                            <td className = {classes.td}>{p.typeOne}</td>
                            <td className = {classes.td}>{p.typeTwo}</td>
                            <td className = {classes.td}>{p.generation}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default PokemonTable;
