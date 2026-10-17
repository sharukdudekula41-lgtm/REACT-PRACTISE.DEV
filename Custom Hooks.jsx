import { useState } from "react";

function useCounter() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  return {
    count,
    increase,
  };
}

function App() {
  const { count, increase } = useCounter();

  return (
    <div>
      <h1>Counter App</h1>

      <p>Count: {count}</p>

      <button onClick={increase}>
        Increase
      </button>
    </div>
  );
}

export default App;