import styles from "../IvoiceId/IvoiceId.module.scss";
import { transformData } from "../../Components/StatusInvoice/StatusInvoice";

const IvoiceIdThree = ({ item }) => {
  return (
    <>
      <div className={styles.containerTwo}>
        <div className={styles.infotwo}>
          <div>
            <p>Invoice Date</p>
            <p>{transformData(item.createdAt)}</p>
          </div>
          <div>
            <p>Payment Due</p>
            <p>{transformData(item.paymentDue)}</p>
          </div>
        </div>
        <div className={styles.infothree}>
          <p>Bill To</p>
          <p>{item.clientName}</p>
          {Object.values(item.clientAddress).map((item) => (
            <p key={item} className={styles.infop}>
              {item}
            </p>
          ))}
        </div>
        <div className={styles.infofour}>
          <p>Sent to</p>
          <p>{item.clientEmail}</p>
        </div>
      </div>
    </>
  );
};

export default IvoiceIdThree;
