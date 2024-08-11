import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import style from "./About.module.css";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className={style.box}>
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className={style.content}>
        <p>
          I'm a passionate UI/UX and graphic designer dedicated to crafting
          visually stunning, user-friendly digital experiences. With a sharp eye
          for detail and a knack for blending creativity with functionality, I
          transform ideas into engaging, seamless designs. Let's create
          something extraordinary together!
        </p>
      </div>
      <div className={style.lines} ref={ref}>
        <svg
          viewBox="0 0 1440 544"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={style.svgResponsive}
        >
          <motion.path
            d="M85 540.539C85 540.539 224.024 439.624 327.486 410.84C447.354 377.493 523.335 426.326 646.043 405.759C750.686 388.221 812.335 376.733 906.083 327.043C1007.71 273.176 1131.85 137.904 1131.85 137.904"
            stroke="#2EC7F7"
            variants={draw}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          />
          <motion.path
            d="M0.999996 544.131C0.999996 544.131 147.035 435.605 254.898 405.126C379.863 369.814 457.84 423.394 585.527 401.979C694.416 383.716 758.587 371.702 856.739 318.453C963.139 260.728 1094.34 114.791 1094.34 114.791"
            stroke="#2EC7F7"
            variants={draw}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          />
          <motion.path
            d="M135 543.539C135 543.539 274.024 442.624 377.486 413.84C497.354 380.493 573.335 429.326 696.043 408.759C800.686 391.221 862.335 379.733 956.083 330.043C1057.71 276.176 1181.85 140.904 1181.85 140.904"
            stroke="#2EC7F7"
            variants={draw}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          />
          <motion.path
            d="M21 546.256C21 546.256 166.558 439.321 274.876 408.7C400.369 373.225 479.904 424.702 608.369 402.731C717.921 383.995 782.463 371.736 880.613 319.034C987.013 261.902 1117 118.677 1117 118.677"
            stroke="#2EC7F7"
            variants={draw}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          />
        </svg>
      </div>
    </div>
  );
}
