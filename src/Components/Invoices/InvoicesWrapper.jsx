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
        <DropDown />
        <button className={styles.button}>
          <FaCirclePlus style={{ fontSize: "1.88rem" }} />
          Nova <span>fatura</span>
        </button>
      </div>
    </div>
  );
};

export default InvoicesWrapper;
