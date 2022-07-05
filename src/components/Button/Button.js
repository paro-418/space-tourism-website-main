const Button = (props) => {
  return (
    <button className={props.className} onClick={props.callFunction}>
      {props.children}
    </button>
  );
};

export default Button;
