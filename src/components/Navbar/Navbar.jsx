import "./Navbar.scss";
import linkedin from "../../images/linkedin.png";
import Github from "../../images/github.png";
import { motion } from "framer-motion";
export default function Navbar() {
  return (
    <div className="Navbar">
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          sahar refaei ghaliabafan
        </motion.span>
        <div className="social">
          <motion.a
           initial={{ opacity: 0, scale: 0.5 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.5 }}
         >
            <img src={linkedin} alt="Linkedin" className="img" />
          </motion.a>
          <motion.a
           initial={{ opacity: 0, scale: 0.5 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.5 }}
         >
            <img src={Github} alt="GitHub" className="img" />
          </motion.a>
        </div>
      </div>
    </div>
  );
}
