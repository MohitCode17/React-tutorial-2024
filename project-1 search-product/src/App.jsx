import { useState } from "react";
import Products from "./components/Products";
import { products } from "./data/data";

const App = () => {
  const [input, setInput] = useState("");
  const [filterData, setFilterData] = useState(products);

  const handleFilterData = () => {
    let data = products.filter((item) =>
      item.title.toLowerCase().includes(input.toLowerCase())
    );
    setFilterData(data);
  };

  return (
    <div className="bg-slate-950 text-white min-h-screen px-5">
      <div className="max-w-screen-xl w-full mx-auto">
        <h1 className="py-10 text-center text-3xl font-semibold">
          All Products
        </h1>
        <div className="max-w-xl mx-auto flex">
          <input
            type="text"
            placeholder="Search a product"
            className="flex-1 px-2 py-4 text-black outline-none"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={handleFilterData} className="bg-yellow-500 cursor-pointer px-2 py-[14.3px] text-lg w-[100px]">
            Search
          </button>
        </div>

        {/* DISPLAY ALL PRODUCTS */}
        <Products products={filterData} />
      </div>
    </div>
  );
};

export default App;
