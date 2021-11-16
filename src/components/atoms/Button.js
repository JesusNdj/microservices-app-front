const Button = ({ type, name, children }) => {
  return (
    <button type={type} name={name}>
      {children}
    </button>
  );
};

export default Button;
