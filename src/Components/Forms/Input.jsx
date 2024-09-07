import styles from "./Input.module.scss";

const Input = ({
  type,
  name,
  id,
  label,
  placeholder,
  onChange,
  value,
  onBlur,
}) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        className={styles.input}
        type={type}
        name={name}
        value={value}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
      />
    </>
  );
};

export default Input;
