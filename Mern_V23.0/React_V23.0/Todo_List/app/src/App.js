import { useState } from "react";
import { v4 as uuid } from "uuid";

import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import Spacer from "./components/Spacer";

const initialState = [
    { id: uuid(), name: "Grocery Shopping", isComplete: false },
    { id: uuid(), name: "Workout", isComplete: false },
    { id: uuid(), name: "Homework", isComplete: false }
];

function App() {
    const [todos, setTodos] = useState(initialState);

    function addHandler(name) {
        const updatedTodos = [...todos, { id: uuid(), name, isComplete: false }];
        setTodos(updatedTodos);
    }

    function setCompleteHandler(id) {
        const updatedTodos = todos.map((todo) => {
            return todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo;
        });
        setTodos(updatedTodos);
    }

    function removeHandler(id) {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
    }

    return (
        <div className=" w-1/3 mx-auto">
            <h1>Todo List</h1>
            <Spacer />
            <AddTodo className="mb-5" onAdd={addHandler} />
            <Spacer />
            <TodoList todos={todos} onSetComplete={setCompleteHandler} onRemove={removeHandler} />
        </div>
    );
}

export default App;
