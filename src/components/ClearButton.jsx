import style from "./clearButton.module.css";
import { useState, useRef } from "react";

const ClearButton = (props) => {
  //   const [text, setText] = useState("");

  const use_ref_input = useRef("");

  function clearInputState() {
    setText("");
  }

  function clearInputRef() {
    use_ref_input.current.value = "";
  }

  return (
    <>
      <input
        ref={use_ref_input}
        className={style.input}
        type="text"
        placeholder="write something..."
      ></input>
      <button onClick={clearInputRef}>clear input</button>
    </>
  );
};

export default ClearButton;
