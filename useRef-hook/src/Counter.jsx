import { useRef } from "react";

const Counter = () => {
  const countRef = useRef(0);

  const handleClick = () => {
    countRef.current += 1;
    console.log(`You clicked ${countRef.current} times`);
  };

  console.log("Component rendered");

  return <button onClick={handleClick}>Click me!</button>;
};

export default Counter;
