const TextBox = ({ use_ref }) => {
  return <input ref={use_ref} type="text" placeholder="write..."></input>;
};

export default TextBox;
