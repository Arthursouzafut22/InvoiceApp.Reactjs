import styles from "../IvoiceId/IvoiceId.module.scss";
import { FaCircle } from "react-icons/fa";
import { ContextPayment } from "../../Hooks/UseContextPayment";
import Button from "../../Components/Button/Button";
import { statusPayment } from "../../Components/StatusInvoice/StatusInvoice";
import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const IvoiceId = () => {
  const { id } = useParams();
  const { data } = useContext(ContextPayment);
  const [itemsSearch, setItemsSearch] = useState(() => {
    const savedItem = localStorage.getItem("itemsSearch");
    return savedItem ? JSON.parse(savedItem) : null;
  });

  useEffect(() => {
    const searchResult = data?.find((item) => item?.id === id);
    if (searchResult) {
      setItemsSearch(searchResult);
      localStorage.setItem("itemsSearch", JSON.stringify(searchResult));
    }
  }, [data, id]);

  return (
    <>
      <section className={styles.section}>
        <div className={styles.waperrOn}>
          <div className={styles.contStatus}>
            <p>Status</p>
            <span style={statusPayment(itemsSearch)}>
              <FaCircle style={{ fontSize: "8px" }} />
              {itemsSearch?.status}
            </span>
          </div>
          <div className={styles.wrapperButton}>
            <Button>Editar</Button>
            <Button>Excluir</Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default IvoiceId;
