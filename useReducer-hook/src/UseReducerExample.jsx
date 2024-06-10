import { useReducer, useState } from "react";

const reducerFn = (state, action) => {
  switch (action.type) {
    case "MOVE_FORWARD":
      return { steps: state.steps + 1 };
    case "MOVE_BACKWARD":
      return { steps: state.steps - 1 };
    case "CUSTOM_STEPS":
      return { steps: state.steps + action.payload };
    default:
      return { ...state };
  }
};

const initialState = {
  steps: 0,
};

const UseReducerExample = () => {
  const [customStep, setCustomStep] = useState("");
  const [state, dispatch] = useReducer(reducerFn, initialState);

  const handleCustomSteps = (steps) => {
    const action = { type: "CUSTOM_STEPS", payload: Number(steps) };
    dispatch(action);
  };

  return (
    <div>
      <p>Player has moved {state.steps} steps.</p>
      <div style={{ display: "flex", justifyContent: "center", gap: 10 }}>
        <button onClick={() => dispatch({ type: "MOVE_FORWARD" })}>
          Move Forward
        </button>
        <button onClick={() => dispatch({ type: "MOVE_BACKWARD" })}>
          Move Backward
        </button>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 10,
          marginTop: 20,
        }}
      >
        <input
          type="text"
          value={customStep}
          onChange={(e) => setCustomStep(e.target.value)}
        />
        <button onClick={() => handleCustomSteps(Number(customStep))}>
          Run Steps
        </button>
      </div>
    </div>
  );
};

export default UseReducerExample;
