import { useRef } from "react";
import { motion } from "framer-motion";

const Test = () => {
  const scrollRef = useRef(null);

  return (
    <div
      ref={scrollRef}
      style={{ overflow: "scroll", width: "100vw", height: " 8000px" }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ root: scrollRef }}
        style={{
          width: ` 100px `,
          height: `100px`,
          backgroundColor: `#000 `,
          marginTop: "4000px",
        }}
      >
        테스트 해보자
      </motion.div>
    </div>
  );
};

export default Test;
