import styles from "../Main/Main.module.scss";
import InvoicesWrapper from "../../Components/Invoices/InvoicesWrapper";
import IvoiceItem from "../../Components/IvoiceItem/IvoiceItem";
import FormularioGlobal from "../../Components/Forms/FormularioGlobal";

const Main = () => {
  return (
    <>
      <main className={styles.main}>
        <InvoicesWrapper />
        <IvoiceItem />
        <FormularioGlobal />
      </main>
    </>
  );
};

export default Main;
