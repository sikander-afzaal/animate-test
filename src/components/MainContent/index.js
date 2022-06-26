import styles from "./index.module.css";
import Row from "../Row";
import { useRef, useEffect } from "react";

const state = [
  {
    text: [
      { word: "你好" },
      { word: "hola" },
      { word: "hello" },
      { word: "नमस्ते", font: "poppins" },
      { word: "হ্যালো" },
      { word: "olá" },
      { word: "ਸਤ ਸ੍ਰੀ ਅਕਾਲਤ", font: "tirogurmukhi" },
    ],
  },
  {
    text: [
      { word: "привет" },
      { word: "హలో" },
      { word: "こんにちは" },
      { word: "مرحبًا" },
      { word: "হ্যালো" },
      { word: "ਸਤ ਸ੍ਰੀ ਅਕਾਲਤ", font: "tirogurmukhi" },
      { word: "xin chào" },
    ],
  },
  {
    text: [
      { word: "नमस्कार", font: "poppins" },
      { word: "హలో" },
      { word: "merhaba" },
      { word: "안녕하십니까" },
      { word: "bonjour" },
      { word: "xin chào" },
      { word: "ਸਤ ਸ੍ਰੀ ਅਕਾਲਤ", font: "tirogurmukhi" },
    ],
  },
  {
    text: [
      { word: "ciao" },
      { word: "வணக்கம்" },
      { word: "హలో" },
      { word: "مرحبًا" },
      { word: "vitam" },
      { word: "안녕하십니까" },
      { word: "สวัสดี" },
      { word: "ਸਤ ਸ੍ਰੀ ਅਕਾਲਤ", font: "tirogurmukhi" },
    ],
  },
  {
    text: [
      { word: "helo" },
      { word: "dobrý den" },
      { word: "xαίρετε" },
      { word: "你好" },
      { word: "안녕하십니까" },
      { word: "hola" },
      { word: "హలో" },
    ],
  },
  {
    text: [
      { word: "hallo" },
      { word: "नमस्ते" },
      { word: "مرحبًا" },
      { word: "হ্যালো" },
      { word: "olá" },
      { word: "你好" },
      { word: "ciao" },
      { word: "హలో" },
    ],
  },
];

const SPEED = 10; //
const DURATION = 1; // smaller is bigger

const config = { SPEED, DURATION };

let dirs = [];
let originalDirs = [];
let leftLimit = [];
let rightLimit = [];

let animationID;
let scrollBy;
let refs = [];

const animate = () => {
  refs.forEach((ref, i) => {
    const div = ref.current;
    if (!div) return;
    if (div) {
      if (scrollBy <= -config.DURATION || scrollBy >= config.DURATION) {
        // setting the limit
        if (!leftLimit[i] && !rightLimit[i]) {
          leftLimit[i] = div.scrollWidth * 0.25;
          rightLimit[i] = div.scrollWidth - div.clientWidth;
        }

        const inc = scrollBy > 0 ? -1 : 1;
        scrollBy += inc * config.DURATION;
        const child = div.querySelector("p");
        const childWidth = child.offsetWidth;

        if (div.scrollLeft <= leftLimit[i]) {
          swap("p:last-child", "afterbegin", dirs[i] * childWidth, div);
        } else if (div.scrollLeft >= rightLimit[i]) {
          swap("p:first-child", "beforeend", dirs[i] * childWidth, div);
        }

        div.scrollBy(dirs[i] * config.SPEED, 0);
      }
    }
  });
  animationID = requestAnimationFrame(animate);
};

function swap(selector, position, moveBy, div) {
  // remove child from right
  const rightMostChild = div.querySelector(selector);
  const markup = `<p>${rightMostChild.innerHTML}</p>`;
  div.insertAdjacentHTML(position, markup);
  div.scrollBy(moveBy * -1, 0);
  rightMostChild.remove();
}

const MainContent = () => {
  refs.push(useRef(null));
  refs.push(useRef(null));
  refs.push(useRef(null));
  refs.push(useRef(null));
  refs.push(useRef(null));
  refs.push(useRef(null));

  const handleScroll = (value) => {
    scrollBy = value;

    dirs.forEach((_, i) => {
      if (scrollBy > 0) {
        dirs[i] = originalDirs[i];
      } else {
        dirs[i] = -1 * originalDirs[i];
      }
    });
    if (!animationID) animationID = requestAnimationFrame(animate);
  };

  useEffect(() => {
    refs.forEach((ref, i) => {
      if (!ref.current) return;

      dirs[i] = ref.current.dataset.dir;
      originalDirs[i] = ref.current.dataset.dir;
    });

    let touchStart = 0;

    window.addEventListener("touchstart", (e) => {
      touchStart = e.changedTouches[0].screenY;
    });

    window.addEventListener("touchmove", (e) => {
      const touchNow = e.changedTouches[0].screenY;
      const value = touchNow - touchStart;
      handleScroll(value);
    });

    window.addEventListener("wheel", (e) => {
      handleScroll(e.deltaY);
    });
  }, []);

  return (
    <section className={styles.container}>
      {state.map((item, i) => (
        <Row
          key={i}
          items={item.text}
          index={i}
          dir={i % 2 === 0 ? 1 : -1}
          ref={refs[i]}
        ></Row>
      ))}
    </section>
  );
};

export default MainContent;
