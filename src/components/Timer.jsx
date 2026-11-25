import { useState, useRef } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  //   const [intervalId, setIntervalId] = useState(null);
  const [isStart, setIsStart] = useState(false);

  const interval_ref = useRef(null);

  function toggleStart() {
    setIsStart(!isStart);
  }

  function startTimer() {
    const id = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    interval_ref.current = id;
    toggleStart(true);
  }

  function stopTimer() {
    clearInterval(interval_ref.current);
    interval_ref.current = null;
    toggleStart(false);
  }

  return (
    <>
      <lable>{`Seconds: ${seconds}`}</lable>

      <button onClick={isStart ? stopTimer : startTimer}>
        {isStart ? "Pause" : "Start"}
      </button>
      <p>{seconds}</p>
    </>
  );
};

export default Timer;
