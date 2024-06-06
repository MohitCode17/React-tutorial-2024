import { useRef } from "react";

const Input = () => {
  const inputRef = useRef(null);

  const handleInputChange = () => {
    console.log(`Input value: ${inputRef.current.value}`);
  };

  console.log("Component rendered");
  return (
    <div>
      <input type="text" ref={inputRef} onChange={handleInputChange} />
      <button onClick={() => alert(inputRef.current.value)}>Show Value</button>
    </div>
  );
};

export default Input;
