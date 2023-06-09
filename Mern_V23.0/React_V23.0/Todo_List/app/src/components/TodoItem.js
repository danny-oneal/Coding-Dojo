function TodoItem({ todo, onSetComplete, onRemove }) {
    const { id, name, isComplete } = todo;
    return (
        <li className="grid grid-cols-2 mb-4">
            <span className={isComplete ? "line-through" : ""}>{name}</span>
            <div>
                <span className="mr-4">Completed</span>
                <input type="checkbox" checked={isComplete} onChange={() => onSetComplete(id)} />
                <button className="ml-4 btn-delete" onClick={() => onRemove(id)}>
                    Delete
                </button>
            </div>
        </li>
    );
}

export default TodoItem;
