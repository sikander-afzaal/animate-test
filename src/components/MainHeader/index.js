import Email from "../Email";
// import logo from "../../assets/logo.svg";
import styles from "./index.module.css";
import { motion } from "framer-motion";

const MainHeader = () => {
  const variants = {
    hidden: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1.5,
        delay: 2.3,
        ease: "easeInOut",
      },
    },
  };
  return (
    <header className={styles.mainHeader}>
      <a href="/">
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_126_69"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="64"
            height="64"
          >
            <motion.path
              variants={variants}
              initial={"hidden"}
              animate={"animate"}
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M64 34V2.72889e-06H24.0424H3.20411e-05L1.52357e-06 0L0 34H3.20411e-05V64H24.0424V34L64 34Z"
              fill="#684D4D"
            />
          </mask>
          <g mask="url(#mask0_126_69)">
            <motion.path
              variants={variants}
              initial={"hidden"}
              animate={"animate"}
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M59 5H5V59H59V5ZM0 0V64H64V0H0Z"
              fill="white"
            />
          </g>
          <motion.path
            variants={variants}
            initial={"hidden"}
            animate={"animate"}
            d="M28.9968 64V59H30.7468C31.7368 59 32.5265 59.0421 33.0969 58.555C33.7468 58 33.9968 57.5 33.9968 56.3027V39H38.9968V43.3914V47.7827V56C38.9968 57.584 38.795 59.05 38.113 60.238C37.431 61.426 36.452 62.35 35.176 63.01C33.922 63.67 32.437 64 30.721 64H28.9968Z"
            fill="white"
          />
          <motion.path
            variants={variants}
            initial={"hidden"}
            animate={"animate"}
            d="M44 64V51.75V39H49V48.996H59V44.75V39H64V64H59V59.25V56.8611V53.996H49V64H44Z"
            fill="white"
          />
        </svg>
      </a>
      <motion.div
        variants={variants}
        initial={"hidden"}
        animate={"animate"}
        className={styles.emailCon}
      >
        <Email position={styles.emailConPosition} />
      </motion.div>
    </header>
  );
};

export default MainHeader;
