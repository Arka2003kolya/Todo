import { useRef, useState } from "react";
import "./Increment.css";
const CounterChallenge = () => {
  const [count, setCount] = useState();
  const step = useRef(1);

  const handleIncrement = () => {
    console.log(step.current.value);

    setCount(count + Number(step.current.value));
  };
  const handleDecrement = () => {
    setCount(count - Number(step.current.value));
  };
  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="FistDiv">
      <h1>useState Challenge</h1>
      <p>
        Count:<span>{count}</span>
      </p>
      <div>
        <div className="mainDiv">
          <label>
            Step:
            <input type="number" ref={step} />
          </label>
        </div>
        <div className="buttonsDiv">
          <button onClick={handleIncrement}>Increment</button>
          <button onClick={handleDecrement} disabled={count <= 0}>
            Decrement
          </button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default CounterChallenge;
