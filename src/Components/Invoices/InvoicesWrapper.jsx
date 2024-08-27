import styles from "./InvoicesWrapper.module.scss";
import DropDown from "../Invoices/DropDown/DropDown";
import { FaCirclePlus } from "react-icons/fa6";
const InvoicesWrapper = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <h1>Faturas</h1>
        <p>Há um total de 7 faturas.</p>
      </div>
      <div className={styles.wrapper2}>
        <DropDown className={styles.dropdown} />
        <button className={styles.button}>
          <FaCirclePlus style={{ fontSize: "30px" }} />
          Nova fatura
        </button>
      </div>
    </div>
  );
};

export default InvoicesWrapper;
