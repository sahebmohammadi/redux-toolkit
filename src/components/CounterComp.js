import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { decrement, increment } from "../features/counter/counterSlice";

const CounterComp = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(0);
  return (
    <>
      <h1>Counter State</h1>
      <h2>counter : {counter.value}</h2>
      <input
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />
      <button onClick={() => dispatch(increment(Number(incrementAmount | 0)))}>
        +
      </button>
      <button onClick={() => dispatch(decrement(Number(incrementAmount | 0)))}>
        -
      </button>
    </>
  );
};

export default CounterComp;
