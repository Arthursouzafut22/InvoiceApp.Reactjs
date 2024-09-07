import Input from "./Input";
import styles from "./Formulario.module.scss";
import { ImBin } from "react-icons/im";
import UseForm from "../../Hooks/UseForm";

const InputBox = ({ removeItem, index, onBluerValidate, erro }) => {
  const { formData, handleChange } = UseForm();
  return (
    <>
      <div className={styles.wrapper}>
        <div>
          <label htmlFor="ItemName">Nome do item</label>
          <Input
            type="text"
            name="ItemName"
            id="ItemName"
            value={formData.ItemName}
            onChange={handleChange}
            onBlur={onBluerValidate}
          />
          {Object.keys(erro).length > 0 && (
            <p style={{ color: "red", fontSize: "12px", marginBottom: "5px" }}>
              Preencha o campo
            </p>
          )}
        </div>
        <div>
          <label htmlFor="Qty">Qty</label>
          <Input
            type="text"
            name="Qty"
            id="Qty"
            value={formData.Qty}
            onChange={handleChange}
          />
          {Object.keys(erro).length > 0 && (
            <p style={{ color: "red", fontSize: "12px", marginBottom: "5px" }}>
              Preencha o campo
            </p>
          )}
        </div>
        <div>
          <label htmlFor="Price">Preço</label>
          <Input
            type="text"
            name="Price"
            id="Price"
            value={formData.Price}
            onChange={handleChange}
          />
          {Object.keys(erro).length > 0 && (
            <p style={{ color: "red", fontSize: "12px", marginBottom: "5px" }}>
              Preencha o campo
            </p>
          )}
        </div>
        <div className={styles.wrapperTotal}>
          <p>Total</p>
          <span>0</span>
        </div>
        <ImBin
          style={{ fontSize: "25px", cursor: "pointer", color: "#dfe3fa" }}
          onClick={() => removeItem(index)}
        />
      </div>
    </>
  );
};

export default InputBox;
