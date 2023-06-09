import TodoItem from "./TodoItem";

function TodoList({ todos, onSetComplete, onRemove }) {
    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} onSetComplete={onSetComplete} onRemove={onRemove} />
            ))}
        </ul>
    );
}

export default TodoList;
