import { useState, useRef } from "react";

const ClickMeButton = () => {
  const counter_ref = useRef(0);
  const [showCount, setShowCount] = useState(null);

  function increaseCounter() {
    counter_ref.current += 1;
  }

  function showCounter() {
    setShowCount(counter_ref.current);
  }

  return (
    <>
      <button onClick={increaseCounter}>Click me</button>
      <button onClick={showCounter}>Show Total Clicks</button>
      {showCount !== null && <p>{`Count: ${showCount}`}</p>}
    </>
  );
};

export default ClickMeButton;
