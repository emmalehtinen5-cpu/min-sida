function TodoItem({ uppgift, taBortUppgift }) {
  return (
    <li>
      <label className="todo-uppgift">
        <input type="checkbox" />
        <span>{uppgift.text}</span>
      </label>

      <button
        type="button"
        className="todo-ta-bort"
        onClick={() => taBortUppgift(uppgift.id)}
        aria-label={`Ta bort ${uppgift.text}`}
      >
        ×
      </button>
    </li>
  );
}

export default TodoItem;