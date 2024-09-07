import { useState } from "react";

const numberValidate = {
  number: {
    regex: /^(?!\d+$).+/,
  },
};

const UseForm = () => {
  const [formData, setFormData] = useState({
    fromStreetAddress: "",
    fromCity: "",
    fromPostcode: "",
    fromCountry: "",
    toStreetAddress: "",
    toCity: "",
    toPostcode: "",
    toCountry: "",
    InvoiceDate: "",
    Paymentterms: "",
    description: "",
    ItemName: "",
    Qty: "",
    Price: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onBluerValidate = ({ target }) => {
    const { name, value } = target;
    let newErrors = { ...errors };

    if (value.trim() === "") {
      newErrors[name] = "Campo obrigatório"; // Define erro
    } else {
      delete newErrors[name]; // Remove erro se válido
    }

    setErrors(newErrors);
  };

  const validateForm = () => {};

  return {
    formData,
    onBluerValidate,
    handleChange,
    validateForm,
    errors,
  };
};

export default UseForm;
