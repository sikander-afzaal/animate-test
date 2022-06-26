import { useEffect } from "react";
import { motion } from "framer-motion";

import MainContent from "./components/MainContent";
import MainFooter from "./components/MainFooter";
import MainHeader from "./components/MainHeader";
import Noise from "./components/Noise";

import "./App.css";

function App() {
  const documentHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty("--doc-height", `${window.innerHeight}px`);
  };
  useEffect(() => {
    document.title = "JH Coming Soon";
    (function (h, o, t, j, a, r) {
      h.hj =
        h.hj ||
        function () {
          (h.hj.q = h.hj.q || []).push(arguments);
        };
      h._hjSettings = { hjid: 3030700, hjsv: 6 };
      a = o.getElementsByTagName("head")[0];
      r = o.createElement("script");
      r.async = 1;
      r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
      a.appendChild(r);
    })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=");

    documentHeight();
    window.addEventListener("resive", documentHeight);
  }, []);

  return (
    <div className="App">
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 1.5, delay: 0.7 }}
        className="top-half"
      ></motion.div>
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 1.5, delay: 0.7 }}
        className="bottom-half"
      ></motion.div>

      <Noise />
      <MainHeader />
      <MainContent />
      <MainFooter />
    </div>
  );
}

export default App;
