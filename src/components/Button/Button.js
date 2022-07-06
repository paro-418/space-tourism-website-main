const Button = (props) => {
  return (
    <button className={props.className} value={props.value} onClick={props.callFunction}>
      {props.children}
    </button>
  );
};

export default Button;
