import "./MainPage.scss";
import Github from "../../images/github.png";
import { motion } from "framer-motion";
export default function MainPage() {
  const textvariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };
  const slidervarient = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-220%",
      transition: {
        repeat:Infinity,   
        repeatType:"mirror",
        duration: 16,
      },
    },
  };
  return (
    <div className="MainPage">
      <div className="wrapper">
        <motion.div
          className="textCountainer"
          variants={textvariants}
          initial="initial"
          animate="animate"
        >
          <h2>Sahar Refaei Ghalibafan</h2>
          <h1>Web developer</h1>
          <div className="buttons">
            <button>contact me </button>
          </div>
          <a class="scroll" href="#">
            Read more
          </a>
          <img src="" />
        </motion.div>
      </div>
      <motion.div variants={slidervarient}  initial="initial"
          animate="animate" className="slidingtext">web programmer</motion.div>
      <div className="imageCounainer">
        <img src={Github} alt="me" />
      </div>
    </div>
  );
}
