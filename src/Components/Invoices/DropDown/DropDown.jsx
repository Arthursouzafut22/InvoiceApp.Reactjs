import styles from "../DropDown/DropDown.module.scss";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

const inputs = [
  {
    label: "Pago",
    type: "checkbox",
    name: "Pago",
  },
  {
    label: "Pendente",
    type: "checkbox",
    name: "Pendente",
  },
  {
    label: "Rascunho",
    type: "checkbox",
    name: "Rascunho",
  },
];

const DropDown = () => {
  const [active, setActive] = useState(false);
  return (
    <>
      <div className={styles.wrapperr}>
        <button onClick={() => setActive(!active)}>
          Filtrar por status
          <IoIosArrowDown
            className={`${active ? styles.rotate : styles.Notate}`}
            style={{ color: "#7C5DFA", fontSize: "18px", fontWeight: "600" }}
          />
        </button>

        {active && (
          <div className={styles.menu}>
            {inputs.length > 0 &&
              inputs.map(({ label, type, name }) => (
                <label htmlFor={label} key={label}>
                  <input
                    type={type}
                    name={name}
                    id={name}
                    className={styles.customCheckbox}
                  />
                  {label}
                </label>
              ))}
          </div>
        )}
      </div>
    </>
  );
};

export default DropDown;
