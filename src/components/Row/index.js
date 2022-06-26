import { forwardRef, useEffect } from "react";
import styles from "./index.module.css";

const Row = (props, ref) => {
  useEffect(() => {
    const div = ref.current;
    const child = div.querySelector("p");
    if (div) {
      const offset = child.offsetWidth * 4;
      div.scrollTo(offset, 0);
    }
  });

  const renderWords = (item) => {
    return item.map((word, i) => (
      <span key={i} className={word.font}>
        {word.word}
      </span>
    ));
  };

  const renderItems = () => {
    const result = [];
    for (let i = 0; i < 9; i++) {
      result.push(<p key={i}>{renderWords(props.items)}</p>);
    }
    return result;
  };

  return (
    <div
      className={styles.row}
      data-id={props.index}
      data-dir={props.dir}
      ref={ref}
    >
      {renderItems()}
    </div>
  );
};

export default forwardRef(Row);
