import { useCallback } from "react";
import Button from "../../Components/Button/Button";
import styles from "./Formulario.module.scss";

const ButtonsForm = ({ setActiveForm }) => {
  const handleClickActive = useCallback(() => {
    setActiveForm(false);
  }, [setActiveForm]);

  return (
    <div className={styles.wrapperbutton}>
      <Button className={styles.btnOn} onClick={handleClickActive}>
        Descartar
      </Button>
      <div className={styles.wrapp2}>
        <Button className={styles.btnTwo}>Salvar como rascunho</Button>
        <Button className={styles.btnThree}>Salvar e enviar</Button>
      </div>
    </div>
  );
};

export default ButtonsForm;
