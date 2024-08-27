import styles from "../Main/Main.module.scss";
import InvoicesWrapper from "../Invoices/InvoicesWrapper";
const Main = () => {
    return <>
    <main className={styles.main}>
        <InvoicesWrapper/>
    </main>
    </>
}

export default Main;