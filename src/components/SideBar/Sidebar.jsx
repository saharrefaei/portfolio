import "./sidebar.scss";
import Togglebutton from "./Togglebuton/Togglebutton";
import Links from "./Links/Links";
import { useState } from "react";
import { motion } from "framer-motion";
export default function SideBar() {
  const [open, setOpen] = useState(false);

  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };
console.log(open,'open');
  return (
    <motion.div className="SideBar" animate={open ? "open" : "closed"}>
      <motion.div className="background" variants={variants}>
        <Links  />
      </motion.div>
      <Togglebutton  setOpen={setOpen} />
    </motion.div>
  );
}
