import { useState } from "react";
import axios from "axios";

function App() {
    const [pokemons, setPokemons] = useState([]);

    async function fetchPokemon() {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000");
        const {
            data: { results }
        } = response;
        setPokemons(results);
    }
    return (
        <div className="max-w-3xl mx-auto my-10 text-center">
            <button className="p-5 mb-5 rounded bg-zinc-800 text-white" onClick={fetchPokemon}>
                Fetch Pokemon
            </button>
            <ul>{pokemons && pokemons.map((pokemon) => <li key={pokemon.name}>{pokemon.name}</li>)}</ul>
        </div>
    );
}

export default App;
