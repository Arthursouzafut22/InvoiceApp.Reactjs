import styles from "./Formulario.module.scss";
import { useState } from "react";
import Button from "../../Components/Button/Button";
import InputBox from "./InputBox";
import { FaPlus } from "react-icons/fa";

const ItemList = ({ values, handleChange, onBluerValidate, erro }) => {
  const [caixa, setCaixa] = useState([]);

  function addItem() {
    setCaixa(() => [...caixa, {}]);
  }

  function removeItem(index) {
    setCaixa((anterior) => anterior.filter((_, indes) => index !== indes));
  }

  return (
    <fieldset style={{ marginTop: "20px" }}>
      <legend
        style={{ marginBottom: "16px", fontSize: "20px", color: "#777F98" }}
      >
        Lista de items
      </legend>
      {caixa?.map((_, index) => (
        <div key={index}>
          <InputBox
            key={index}
            index={index}
            removeItem={removeItem}
            values={values}
            handleChange={handleChange}
            onBluerValidate={onBluerValidate}
            erro={erro}
          />
        </div>
      ))}

      {caixa.length === 1 ? (
        <Button disable className={styles.button} style={{ marginTop: "15px" }}>
          sorrir apenas um 😢
        </Button>
      ) : (
        <Button onclick={addItem} className={styles.button}>
          <FaPlus style={{ fontSize: "10px" }} />
          Adicionat novo item
        </Button>
      )}
    </fieldset>
  );
};

export default ItemList;
