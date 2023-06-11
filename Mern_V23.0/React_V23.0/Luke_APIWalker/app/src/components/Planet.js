import { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function Planet() {
    const { id } = useParams();
    const [planet, setPlanet] = useState(null);
    const navigate = useNavigate();
    const fetchData = useCallback(async () => {
        try {
            const response = await axios.get(`https://swapi.dev/api/planets/${id}`);
            console.log(response);
            const { data } = response;
            setPlanet(data);
        } catch (error) {
            navigate("/error");
        }
    }, [id, navigate]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    console.log(planet);

    return (
        <div>
            {planet ? (
                <>
                    <p>Name: {planet.name}</p>
                    <p>Rotation Period: {planet.rotation_period}</p>
                    <p>Diameter: {planet.diameter}</p>
                    <p>Gravity: {planet.gravity}</p>
                </>
            ) : null}
        </div>
    );
}

export default Planet;
