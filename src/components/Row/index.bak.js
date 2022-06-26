import { useEffect, useRef } from "react";
import styles from "./index.module.css";

const SPEED = 5;
const DURATION = 10;

const Row = (props) => {
  const rowRef = useRef();
  const originalDirection = props.dir;
  let dir = props.dir;

  let animationID;
  let scrollBy;

  useEffect(() => {
    const div = rowRef.current;
    const halfWidth = div.scrollWidth / 2;
    div.scrollTo(halfWidth, 0);

    window.addEventListener("wheel", (e) => {
      scrollBy = e.deltaY;
      if (scrollBy > 0) {
        dir = originalDirection;
      } else {
        dir = -1 * originalDirection;
      }

      if (!animationID) animationID = requestAnimationFrame(animate);
    });
  }, []);

  const animate = () => {
    if (rowRef.current) {
      if (scrollBy <= -DURATION || scrollBy >= DURATION) {
        const inc = scrollBy > 0 ? -1 : 1;
        scrollBy += inc * DURATION;
        rowRef.current.scrollBy(dir * SPEED, 0);
      }
    }
    animationID = requestAnimationFrame(animate);
  };

  const renderItems = () => {
    const result = [];
    for (let i = 0; i < 100; i++) {
      result.push(<p key={i}>{props.items}</p>);
    }
    return result;
  };

  return (
    <div className={styles.row} ref={rowRef}>
      {renderItems()}
    </div>
  );
};

export default Row;
