import styles from "../IvoiceId/IvoiceId.module.scss";
import IvoiceIdPrice from "./IvoiceIdPrice";
import FormatePrice from "../../Components/FormatePrice/FormatePrice";

const IvoiceIdPayment = ({ item }) => {
  return (
    <>
      <div className={styles.containerPayment}>
        {item?.items?.map((item, index) => (
          <div key={index} className={styles.wrapperPayment}>
            <div>
              <p>Item Name</p>
              <p>{item?.name}</p>
            </div>
            <div className={styles.quanty}>
              <p>QTY.</p>
              <p>{item?.quantity}</p>
            </div>
            <div className={styles.contPrice}>
              <p>Price</p>
              <p>{FormatePrice(item?.price)}</p>
            </div>
            <div>
              <p>Total</p>
              <p>{FormatePrice(item?.total)}</p>
            </div>
          </div>
        ))}
        <IvoiceIdPrice item={item} />
      </div>
    </>
  );
};

export default IvoiceIdPayment;
