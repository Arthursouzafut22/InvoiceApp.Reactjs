import styles from "../Forms/Formulario.module.scss";
import AddressFields from "./AddressFields ";
import InvoiceFields from "./InvoiceFields";
import ItemList from "./ItemList";
import ButtonsForm from "./ButtonsForm";
import { ContextPayment } from "../../Hooks/UseContextPayment";
import { useContext } from "react";
import { createPortal } from "react-dom";
import UseForm from "../../Hooks/UseForm";

const FormularioGlobal = () => {
  const { activeForm, setActiveForm } = useContext(ContextPayment);
  const { formData, handleChange, errors, validateForm, onBluerValidate } =
    UseForm();

  if (!activeForm) return null;

  const formSubmite = (e) => {
    e.preventDefault();
    validateForm();
  };

  return createPortal(
    <section className={styles.section} onClick={() => setActiveForm(false)}>
      <form
        className={styles.form}
        onSubmit={formSubmite}
        onClick={(e) => e.stopPropagation()}
      >
        <h1>Criar fatura</h1>
        <div className={styles.scroll}>
          <AddressFields
            prefix="from"
            values={formData}
            handleChange={handleChange}
            onBluerValidate={onBluerValidate}
            legend="Bill From"
            erro={errors}
          />
          <AddressFields
            prefix="to"
            values={formData}
            handleChange={handleChange}
            onBluerValidate={onBluerValidate}
            legend="Bill To"
            erro={errors}
          />
          <InvoiceFields
            values={formData}
            handleChange={handleChange}
            onBluerValidate={onBluerValidate}
            erro={errors}
          />
          <ItemList
            values={formData}
            handleChange={handleChange}
            onBluerValidate={onBluerValidate}
            erro={errors}
          />
          <ButtonsForm setActiveForm={setActiveForm} />
        </div>
      </form>
    </section>,
    document.body
  );
};

export default FormularioGlobal;
