import styles from "./Sidebar.module.scss";
import logo from "../../Assets/imagens/loop-removebg-preview.png";
import img from "../../Assets/imagens/image-attribution.jpg";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa6";

const SideBar = () => {
  return (
    <>
      <header className={styles.SideBar}>
        <nav>
          <img src={logo} alt="Logo" />
          <div className={styles.wrapper}>
            <FaSun
              style={{
                color: "#858BB2",
                fontSize: "1.38rem",
                cursor: "pointer",
              }}
            />
            <div className={styles.separator}></div>

            <img src={img} alt="imagem avatar" />
          </div>
        </nav>
      </header>
    </>
  );
};

export default SideBar;
