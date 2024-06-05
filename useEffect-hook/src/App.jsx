import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("effect run");

    return () => {
      // cleanup function goes here...
      console.log("CLEANUP")
    }
  }, [count]);

  console.log("Component re-rendered");
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Click me</button>
    </div>
  );
}

export default App;
