import styles from "../IvoiceId/IvoiceId.module.scss";
import FormatePrice from "../../Components/FormatePrice/FormatePrice";

const IvoiceIdPrice = ({ item }) => {
  return (
    <>
      <div className={styles.containerPrice}>
        <p>Amount Due</p>
        <span>{FormatePrice(item.total)}</span>
      </div>
    </>
  );
};

export default IvoiceIdPrice;
