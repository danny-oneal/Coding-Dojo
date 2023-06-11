import { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function Starship() {
    const { id } = useParams();
    const [starship, setStarship] = useState(null);
    const navigate = useNavigate();
    const fetchData = useCallback(async () => {
        try {
            const response = await axios.get(`https://swapi.dev/api/starships/${id}`);
            console.log(response);
            const { data } = response;
            setStarship(data);
        } catch (error) {
            navigate("/error");
        }
    }, [id, navigate]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    console.log(starship);

    return (
        <div>
            {starship ? (
                <>
                    <p>Name: {starship.name}</p>
                    <p>Model: {starship.model}</p>
                    <p>Cost: {starship.cost_in_credits}</p>
                    <p>Crew: {starship.crew}</p>
                </>
            ) : null}
        </div>
    );
}

export default Starship;
