import Input from "./Input";
import styles from "./Formulario.module.scss";

const InvoiceFields = ({ values, handleChange, onBluerValidate, erro }) => (
  <fieldset>
    <div className={styles.wrapper2}>
      <div>
        <label htmlFor="Date">Data da fatura</label>
        <Input
          type="date"
          name="InvoiceDate"
          id="Date"
          onChange={handleChange}
          onBlur={onBluerValidate}
          value={values.InvoiceDate}
        />
        {Object.keys(erro).length > 0 && (
          <p style={{ color: "red", fontSize: "12px", marginBottom: "5px" }}>
            Preencha o campo de data
          </p>
        )}
      </div>
      <div>
        <label htmlFor="PaymentTerms">Termos de pagamento</label>
        <select
          id="PaymentTerms"
          name="Paymentterms"
          onChange={handleChange}
          value={values.Paymentterms}
        >
          <option value="30 dias">Líquido 30 dias</option>
          <option value="1 dia">Líquido 1 dia</option>
          <option value="7 dias">Rede 7 dias</option>
          <option value="14 dias">Líquido 14 dias</option>
        </select>
      </div>
    </div>
    <label htmlFor="Description">Descrição</label>
    <Input
      type="text"
      name="description"
      onChange={handleChange}
      onBlur={onBluerValidate}
      value={values.description}
      id="Description"
      placeholder="Design Service"
    />
    {Object.keys(erro).length > 0 && (
      <p style={{ color: "red", fontSize: "12px", marginBottom: "5px" }}>
        Preencha o campo
      </p>
    )}
  </fieldset>
);

export default InvoiceFields;
