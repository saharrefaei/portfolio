import "./Navbar.scss";
import linkedin from "../../images/linkedin.png";
import Github from "../../images/github.png";
import { motion } from "framer-motion";
import SideBar from "../SideBar/Sidebar";
export default function Navbar() {
  return (
    <div className="Navbar">
      <SideBar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
        Animations are not supported by Safari on iOS less than 13
        </motion.span>
        <div className="social">
          <motion.a
           initial={{ opacity: 0, scale: 0.5 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.5 }}
         ><a href="https://www.linkedin.com/in/sahar-refaei-585830214">
            <img src={linkedin} alt="Linkedin" className="img" /></a>
          </motion.a>
          <motion.a
           initial={{ opacity: 0, scale: 0.5 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.5 }}
         >
          <a href="https://github.com/saharrefaei">
            <img src={Github} alt="GitHub" className="img" /></a>
          </motion.a>
        </div>
      </div>
    </div>
  );
}
