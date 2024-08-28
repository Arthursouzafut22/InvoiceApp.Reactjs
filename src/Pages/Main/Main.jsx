import styles from "../Main/Main.module.scss";
import InvoicesWrapper from "../../Components/Invoices/InvoicesWrapper";
import IvoiceItem from "../../Components/IvoiceItem/IvoiceItem";

const Main = () => {
  return (
    <>
      <main className={styles.main}>
        <InvoicesWrapper />
        <IvoiceItem />
      </main>
    </>
  );
};

export default Main;
