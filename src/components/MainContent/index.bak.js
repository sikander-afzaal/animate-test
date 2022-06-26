import styles from "./index.module.css";
import Row from "../Row";

const state = [
  { text: "你好 hola hello नमस्ते হ্যালো olá", left: 15 },
  { text: "привет こんにちは ਸਤ ਸ੍ਰੀ ਅਕਾਲਤ xin chào", left: 15 },
  { text: "नमस्कार హలో merhaba 안녕하십니까 bonjour", left: 15 },
  { text: "ciao வணக்கம் مرحبًا vitam สวัสดี", left: 15 },
  { text: "helo dobrý den xαίρετε 你好 hola", left: 15 },
  { text: "hallo नमस्ते مرحبًا হ্যালো olá ciao హలో", left: 15 },
];

const MainContent = () => {
  return (
    <section className={styles.container}>
      {state.map((item, i) => (
        <Row key={i} items={item.text} dir={i % 2 == 0 ? 1 : -1}></Row>
      ))}
    </section>
  );
};

export default MainContent;
