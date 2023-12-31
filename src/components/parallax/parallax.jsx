import { motion, useScroll, useTransform } from "framer-motion";
import "./parallax.scss";
import { useRef } from "react";
import planets from "../../images/planets.png";
import sun from "../../images/sun.png";
export default function parallax({ type , darkMode}) {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref.current,
    offset: ["start start", "end start"],
  });

  const ytext = useTransform(scrollYProgress, [0, 1], ["0%", "1500%"]);
  const yplannet = useTransform(scrollYProgress, [0, 1], ["0%", "190%"]);
  const ystarts = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background: darkMode ? 'linear-gradient(180deg, #e6c1ff, #ac40ef)' : 'linear-gradient(180deg, #0c0c1d, #111132)',
        color: darkMode ? 'black' : 'lightgray'
      }}>
      <motion.h1 style={{ y: ytext }}>What I have done?</motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div
        className="palnets"
        style={{
          y: yplannet,
          backgroundImage: `url(${
            type === "services" ? `${planets}` : `${sun}`
          })`,
        }}
      ></motion.div>
      <motion.div className="starts" style={{ x: ystarts }}></motion.div>
    </div>
  );
}
