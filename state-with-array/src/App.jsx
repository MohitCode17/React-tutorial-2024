import { useState } from "react";
import "./App.css";

function App() {
  const [itemsArray, setItemsArray] = useState(["Item 1", "Item 2"]);

  const item = itemsArray.map((item) => <p key={item}>{item}</p>);

  const handleAddItems = () => {
    setItemsArray((prev) => [...prev, `Item ${itemsArray.length + 1}`]);
  };
  return (
    <div>
      <button onClick={handleAddItems}>Add Item</button>
      {/* Insert the items here*/}
      {item}
    </div>
  );
}

export default App;
