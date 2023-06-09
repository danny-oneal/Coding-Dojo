import { useState } from "react";

function AddTodo({ onAdd, className }) {
    const [newTodoName, setNewTodoName] = useState("");
    return (
        <>
            <input className="mb-4" type="text" value={newTodoName} onChange={(e) => setNewTodoName(e.target.value)} />
            <button className="btn-primary" onClick={() => onAdd(newTodoName)}>
                Add
            </button>
        </>
    );
}

export default AddTodo;
