import React, { useState } from "react";
import "./MainPage.scss";
import Github from "../../images/letter-s.png";
import { motion } from "framer-motion";
export default function MainPage({darkMode}) {

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
        repeat: Infinity,
        repeatType: "mirror",
        duration: 16,
      },
    },
  };
  return (
    <div className="MainPage" style={{
      background: darkMode ? 'linear-gradient(180deg, #e6c1ff, #ac40ef)' : 'linear-gradient(180deg, #0c0c1d, #111132)',
      color: darkMode ? 'black' : 'lightgray'
    }}>
      <div className="wrapper">
        <motion.div
          className="textCountainer"
          variants={textvariants}
          initial="initial"
          animate="animate"
        >
          <h2>Sahar Refaei Ghalibafan</h2>
          <h3>Data Science , ML Engineer and Software Developer</h3>

          <a className="scroll" href="#Services">
            Scroll down for more information
          </a>
          <img src="" />
        </motion.div>
      </div>
      <motion.div
        variants={slidervarient}
        initial="initial"
        animate="animate"
        className="slidingtext"
      >
        programmer
      </motion.div>
      <motion.div
        className="imageCounainer"
        variants={textvariants}
        initial="initial"
        animate="animate"
      >
        <img src={Github} alt="me" />
      </motion.div>
    </div>
  );
}
