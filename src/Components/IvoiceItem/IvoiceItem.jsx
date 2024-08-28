import styles from "../IvoiceItem/IvoiceItem.module.scss";
import { FaHashtag } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import { useContext } from "react";
import { ContextPayment } from "../../Hooks/UseContextPayment";
import { statusPayment, transformData } from "../StatusInvoice/StatusInvoice";
import FormatePrice from "../FormatePrice/FormatePrice";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const IvoiceItem = () => {
  const { data } = useContext(ContextPayment);

  return (
    <>
      {data &&
        data?.map((item) => (
          <Link
            to={`invoice/${item.id}`}
            className={styles.item}
            key={item?.id}
          >
            <div className={styles.itemON}>
              <p>
                <FaHashtag style={{ color: "#7E88C3", fontSize: "13px" }} />{" "}
                {item?.id}
              </p>
              <p>{transformData(item?.paymentDue)}</p>
              <p>{item?.clientName}</p>
            </div>
            <div className={styles.itemTho}>
              <p>{FormatePrice(item.total)}</p>
              <span style={statusPayment(item)}>
                <FaCircle style={{ fontSize: "8px" }} />
                {item?.status}
              </span>
              <IoIosArrowForward
                style={{
                  color: "#7C5DFA",
                  fontSize: "18px",
                  fontWeight: "600",
                }}
              />
            </div>
          </Link>
        ))}
    </>
  );
};

export default IvoiceItem;
