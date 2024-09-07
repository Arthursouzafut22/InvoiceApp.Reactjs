import Input from "./Input";
import styles from "./Formulario.module.scss";

const AddressFields = ({
  prefix,
  legend,
  values,
  handleChange,
  onBluerValidate,
  erro,
}) => (
  <fieldset>
    <legend>{legend}</legend>
    <label htmlFor={`${prefix}StreetAddress`}>Endereço da Rua</label>
    <Input
      type="text"
      name={`${prefix}StreetAddress`}
      id={`${prefix}StreetAddress`}
      value={values[`${prefix}StreetAddress`]}
      onChange={handleChange}
      onBlur={onBluerValidate}
    />
    {erro[`${prefix}StreetAddress`] && (
      <p style={{ color: "red", fontSize: "12px", marginBottom: "5px" }}>
        {erro[`${prefix}StreetAddress`]}
      </p>
    )}
    <div className={styles.wrapper}>
      <div>
        <label htmlFor={`${prefix}City`}>Cidade</label>
        <Input
          type="text"
          name={`${prefix}City`}
          id={`${prefix}City`}
          value={values[`${prefix}City`]}
          onChange={handleChange}
          onBlur={onBluerValidate}
        />
        {erro[`${prefix}City`] && (
          <p style={{ color: "red", fontSize: "12px", marginBottom: "5px" }}>
            {erro[`${prefix}City`]}
          </p>
        )}
      </div>
      <div>
        <label htmlFor={`${prefix}Postcode`}>Código Postal</label>
        <Input
          type="text"
          name={`${prefix}Postcode`}
          id={`${prefix}Postcode`}
          value={values[`${prefix}Postcode`]}
          onChange={handleChange}
          onBlur={onBluerValidate}
        />
        {erro[`${prefix}Postcode`] && (
          <p style={{ color: "red", fontSize: "12px", marginBottom: "5px" }}>
            {erro[`${prefix}Postcode`]}
          </p>
        )}
      </div>
      <div>
        <label htmlFor={`${prefix}Country`}>País</label>
        <Input
          type="text"
          name={`${prefix}Country`}
          id={`${prefix}Country`}
          value={values[`${prefix}Country`]}
          onChange={handleChange}
          onBlur={onBluerValidate}
        />
        {erro[`${prefix}Country`] && (
          <p style={{ color: "red", fontSize: "12px", marginBottom: "5px" }}>
            {erro[`${prefix}Country`]}
          </p>
        )}
      </div>
    </div>
  </fieldset>
);

export default AddressFields;
