function TodoList(props) {
  return (
    <ul>
      {props.todos.map((todo) => (
        <li key={todo.id}>
          <input type='checkbox' checked={todo.complete} onChange={() => props.onToggle(todo.id)} />
          <span style={{ textDecoration: todo.complete ? 'line-through' : 'none' }}>{todo.text}</span>
        </li>
      ))}
    </ul>
  );
}
