import { useState } from "react";
import copyIcon from "../../assets/copy-icon.svg";
import checkIcon from "../../assets/check-icon.svg";
import blip from "../../assets/blip.mp3";
import chirp from "../../assets/chirp.mp3";
import styles from "./index.module.css";

const emailAddress = "mail@jan-hein.com";

const playAudio = (file) => {
  const audio = new Audio(file);
  audio.play();
};

const Email = (props) => {
  const [visible, setVisibile] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    playAudio(chirp);
  };

  const handleMouseEnter = () => {
    playAudio(blip);
    setVisibile(true);
  };

  const renderNotification = () => {
    if (copied)
      return (
        <div>
          <img src={checkIcon} alt="" /> address copied
        </div>
      );

    return <div>copy address</div>;
  };

  const handleMouseLeave = () => {
    setVisibile(false);
    setCopied(false);
  };

  return (
    <>
      <div className={styles.container}>
        <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
        <span
          onMouseEnter={handleMouseEnter}
          onClick={copyEmail}
          onMouseLeave={handleMouseLeave}
          className={styles.iconContainer}
        >
          <img src={copyIcon} alt="copy email" />
        </span>
      </div>
      <div
        className={[
          props.position,
          styles.feedback,
          visible && styles.active,
        ].join(" ")}
      >
        {renderNotification()}
      </div>
    </>
  );
};

export default Email;
