// import { useState } from "react";
import { useState } from "react";
import "./App.css";

// const initialData = {

//   name: "",
//   email: "",
//   message: "",
//   employment: "",
//   gender: "",
//   isFriendly: true,
// };

function App() {
  const gender = ["Male", "Female", "Other"];

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    employment: "",
    gender: "",
    isSubscribe: true,
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    setInputs((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!inputs.name || !inputs.email) {
      return alert("Please fill the details");
    }

    alert(`Welcome ${inputs.name}!`);
    console.log(inputs);
  };

  return (
    <>
      <h1 className="title">Form Handling in React</h1>
      <div className="container">
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            value={inputs.name}
            onChange={handleInputChange}
          />
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            value={inputs.email}
            onChange={handleInputChange}
          />
          <fieldset>
            <legend>Current employment status</legend>
            <input
              type="radio"
              id="unemployed"
              name="employment"
              value="unemployed"
              checked={inputs.employment === "unemployed"}
              onChange={handleInputChange}
            />
            <label htmlFor="unemployed">Unemployed</label>
            <br />

            <input
              type="radio"
              id="part-time"
              name="employment"
              value="part-time"
              checked={inputs.employment === "part-time"}
              onChange={handleInputChange}
            />
            <label htmlFor="part-time">Part-time</label>
            <br />

            <input
              type="radio"
              id="full-time"
              name="employment"
              value="full-time"
              checked={inputs.employment === "full-time"}
              onChange={handleInputChange}
            />
            <label htmlFor="full-time">Full-time</label>
            <br />
          </fieldset>

          <div>
            <label htmlFor="gender">Gender: </label>
            <select
              name="gender"
              id="gender"
              value={inputs.gender}
              onChange={handleInputChange}
            >
              {gender.map((item) => (
                <option key={item} value={gender[item]}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div style={{ display: "flex", gap: "0.5rem" }}>
            <label htmlFor="isSubscribe">Join our community</label>
            <input
              type="checkbox"
              name="isSubscribe"
              id="isSubscribe"
              checked={inputs.isSubscribe}
              onChange={handleInputChange}
            />
          </div>

          <textarea
            name="message"
            rows="3"
            placeholder="Write your message"
            value={inputs.message}
            onChange={handleInputChange}
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;
