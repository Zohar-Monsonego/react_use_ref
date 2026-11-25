import { useState, useRef } from "react";

const CounterHistory = () => {
  const [current_count, setCurrentCount] = useState(0);
  const previous_ref = useRef(null);

  function increaseCount() {
    previous_ref.current = current_count;
    setCurrentCount(current_count + 1);
  }

  function decreaseCount() {
    previous_ref.current = current_count;
    setCurrentCount(current_count - 1);
  }
  return (
    <>
      <p>{`current: ${current_count} , previous: ${previous_ref.current}`}</p>
      <button onClick={increaseCount}>+1</button>
      <button onClick={decreaseCount}>-1</button>
    </>
  );
};

export default CounterHistory;
