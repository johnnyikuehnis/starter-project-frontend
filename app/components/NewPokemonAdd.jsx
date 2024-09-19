'use client';
import { useState } from "react";
import classes from "./new-pokemon-styles.module.css";

function NewPokemonAdd({ reloadPokemon }) {
    async function onSubmit() {
        const newPokemon = {
            name,
            typeOne,
            typeTwo,
            generation,
        };

        console.log("Submitting:", newPokemon);

        const res = await fetch("http://localhost:8080/pokemon", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPokemon),
        });

        if (res.ok) {
            console.log("Successfully added Pokémon");
            reloadPokemon(); // Refresh the table data
        } else {
            console.error("Failed to add Pokémon");
        }
    }

    const [name, setMonName] = useState("");
    const [typeOne, setTypeOne] = useState("");
    const [typeTwo, setTypeTwo] = useState("");
    const [generation, setGeneration] = useState("");

    return (
        <div className = {classes.formContainer}>
            <h3 className = {classes.formHeading}>Add New Pokémon</h3>
            <button className = {classes.submitButton} onClick={onSubmit}>Submit</button>
            <h4>Main Info</h4>
            <div className={classes.mainForm}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input
                        name="name"
                        value={name}
                        onChange={(event) => setMonName(event.target.value)}
                    />
                </div>
                <div>
                    <label>Type One: </label>
                    <input
                        value={typeOne}
                        onChange={(event) => setTypeOne(event.target.value)}
                    />
                </div>
                <div>
                    <label>Type Two: </label>
                    <input
                        value={typeTwo}
                        onChange={(event) => setTypeTwo(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="generation">Generation: </label>
                    <input
                        value={generation}
                        onChange={(event) => setGeneration(event.target.value)}
                    />
                </div>
            </div>
        </div>
    );
}

export default NewPokemonAdd;
