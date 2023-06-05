import React, { useState } from "react";

function PersonCard({ firstName, lastName, age, hairColor }) {
    const [currentAge, setCurrentAge] = useState(parseInt(age, 10));
    return (
        <>
            <h1>
                {lastName}, {firstName}
            </h1>
            <p>Age: {currentAge}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={() => setCurrentAge(currentAge + 1)}>
                Birthdate Button for {firstName} {lastName}
            </button>
        </>
    );
}

export default PersonCard;
