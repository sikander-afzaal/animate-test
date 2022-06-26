import Email from "../Email";
import logo from "../../assets/logo.svg";
import styles from "./index.module.css";

const MainHeader = () => {
  return (
    <header className={styles.mainHeader}>
      <a href="/">
        <img src={logo} alt="Logo" />
      </a>
      <div className={styles.emailCon}>
        <Email position={styles.emailConPosition} />
      </div>
    </header>
  );
};

export default MainHeader;
