function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1); // Don't modify state directly
  }

  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
