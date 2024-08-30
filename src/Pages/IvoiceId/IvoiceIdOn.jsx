import styles from "../IvoiceId/IvoiceId.module.scss";
import { FaHashtag } from "react-icons/fa";

const IvoiceIdOn = ({ item }) => {
  return (
    <>
      <div className={styles.containerOn}>
        <div>
          <h2>
            <FaHashtag style={{ color: "#7E88C3", fontSize: "0.81rem" }} />
            {item?.id}
          </h2>
          <p>{item.description}</p>
        </div>
        <div>
          {Object.values(item.senderAddress).map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
    </>
  );
};

export default IvoiceIdOn;
