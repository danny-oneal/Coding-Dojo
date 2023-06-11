import { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function People() {
    const { id } = useParams();
    const [person, setPerson] = useState(null);
    const navigate = useNavigate();
    const fetchData = useCallback(async () => {
        try {
            const response = await axios.get(`https://swapi.dev/api/people/${id}`);
            const { data } = response;
            setPerson(data);
        } catch (error) {
            navigate("/error");
        }
    }, [id, navigate]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    console.log(person);

    return (
        <div>
            {person ? (
                <>
                    <p>Name: {person.name}</p>
                    <p>Height: {person.height}</p>
                    <p>Mass: {person.mass}</p>
                    <p>Gender: {person.gender}</p>
                </>
            ) : null}
        </div>
    );
}

export default People;
