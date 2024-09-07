const Button = ({ children, onclick, ...rest }) => {
  return (
    <button onClick={onclick} {...rest}>
      {children}
    </button>
  );
};

export default Button;
