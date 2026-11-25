import { useState, useRef } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import ClearButton from "./components/ClearButton";
import TextBox from "./components/TextBox.jsx";
import CounterHistory from "./components/CounterHistory.jsx";
import Timer from "./components/Timer.jsx";
import ClickMeButton from "./components/ClickMeButton.jsx";

function App() {
  const use_ref = useRef(null);
  const [showInput, setShowInput] = useState("");

  function printValue() {
    setShowInput(use_ref.current.value);
  }

  return (
    <>
      {/* //task1 */}
      {/* <ClearButton /> */}

      {/* //task2 */}
      {/* <TextBox use_ref={use_ref} />
      <button onClick={printValue}>Show value</button>
      <p>{showInput}</p> */}

      {/* //task of counter history */}
      {/* <CounterHistory /> */}

      {/* //task of timer with state and with the Ref */}
      {/* <Timer /> */}

      {/* //task of the counter with ref and state*/}
      <ClickMeButton />
    </>
  );
}

export default App;
