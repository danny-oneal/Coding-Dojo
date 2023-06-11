import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import People from "./components/People";
import Planet from "./components/Planet";
import Starship from "./components/Starship";
import Error from "./components/Error";

function App() {
    const [resource, setResource] = useState("planets");
    const [id, setId] = useState("");
    const navigate = useNavigate();

    function submitSearch() {
        navigate(`/${resource}/${id}`);
    }
    return (
        <div className="mx-auto w-1/2">
            <div className="my-10">
                <span className="mr-3">Search for:</span>
                <select
                    className="p-3 border-black border-2 rounded bg-slate-500 text-white"
                    name="resource"
                    id="resource"
                    value={resource}
                    onChange={(e) => setResource(e.target.value)}
                >
                    <option value="planets">Planets</option>
                    <option value="people">People</option>
                    <option value="starships">Starships</option>
                </select>
                <span className="ml-5 mr-3">ID:</span>
                <input
                    className="p-3 w-20 border-black border-2 rounded bg-slate-500 text-white"
                    type="text"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
                <button className="ml-5 bg-blue-500 hover:bg-blue-700 text-white p-3 rounded" onClick={submitSearch}>
                    Search
                </button>
            </div>
            <Routes>
                <Route path="/people/:id" element={<People />} />
                <Route path="/planets/:id" element={<Planet />} />
                <Route path="/starships/:id" element={<Starship />} />
                <Route path="/error" element={<Error />} />
            </Routes>
        </div>
    );
}

export default App;
