import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  /*
   when you call setCount multiple times in quick succession like in your increaseCount or decreaseCount function, React doesn't immediately update the state after each call. Instead, it batches state updates for performance reasons.

   When you call setCount multiple times in a row with the same value of count, React optimizes and batches those state updates into a single update. So, even though you call setCount four times with count + 1, React will only perform one actual state update with the final incremented value.

   To make sure each increment is counted properly, you can use the functional form of setState where the new state is based on the previous state.
  */

  const decreaseCount = () => {
    setCount((prev) => prev - 1);
    setCount((prev) => prev - 1);
    setCount((prev) => prev - 1);
  };

  const increaseCount = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };

  console.log("Component re-rendered");
  return (
    <div>
      <button onClick={decreaseCount}>-</button>
      <div>
        <h1>{count}</h1>
      </div>
      <button onClick={increaseCount}>+</button>
    </div>
  );
}

export default App;
