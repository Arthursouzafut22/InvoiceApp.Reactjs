import styles from "./IvoiceId.module.scss";
import { memo } from "react";
import IvoiceIdOn from "./IvoiceIdOn";
import IvoiceIdThree from "./IvoiceIdThree";
import IvoiceIdPayment from "./IvoiceIdPayment";

const IvoiceIdTwo = ({ item }) => {
  return (
    <>
      <div className={styles.info}>
        <IvoiceIdOn item={item} />
        <IvoiceIdThree item={item} />
        <IvoiceIdPayment item={item} />
      </div>
    </>
  );
};

export default memo(IvoiceIdTwo);
