import styles from "../DropDown/DropDown.module.scss";
import { IoIosArrowDown } from "react-icons/io";
import { useState, useEffect } from "react";

const inputs = [
  { id: 1, label: "Pago", type: "checkbox", name: "Pago" },
  { id: 2, label: "Pendente", type: "checkbox", name: "Pendente" },
  { id: 3, label: "Rascunho", type: "checkbox", name: "Rascunho" },
];

const DropDown = () => {
  const [active, setActive] = useState(false);

  const activeMenu = (e) => {
    e.stopPropagation();
    setActive(() => !active);
  };

  useEffect(() => {
    const clickOutside = () => {
      setActive(false);
    };
    window.addEventListener("click", clickOutside);

    return () => {
      window.removeEventListener("click", clickOutside);
    };
  }, []);

  return (
    <>
      <div className={styles.wrapperr}>
        <button onClick={activeMenu}>
          Filtrar <span>por status</span>
          <IoIosArrowDown
            className={`${active ? styles.rotate : styles.Notate}`}
            style={{
              color: "#7C5DFA",
              fontSize: "1.125rem",
              fontWeight: "600",
            }}
          />
        </button>

        {active && (
          <div className={styles.menu} onClick={(e) => e.stopPropagation()}>
            {inputs.length > 0 &&
              inputs.map(({ id, label, type, name }) => (
                <label htmlFor={label} key={id}>
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
