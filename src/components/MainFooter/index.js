import globeIcon from "../../assets/globe-icon.svg";
import Email from "../Email";
import styles from "./index.module.css";

const MainFooter = () => {
  return (
    <footer className={styles.mainFooter}>
      <p>
        <img src={globeIcon} alt="🌐" /> main website coming soon
        <span className={styles.blinkingCursor}> _ </span>
      </p>
      <p>️&copy; Jan-Hein van Asseldonk</p>
      <div className={styles.emailCon}>
        <Email position={styles.emailConPosition} isFooter={true} />
      </div>
    </footer>
  );
};
export default MainFooter;
