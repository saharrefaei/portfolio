import "./contactMe.scss";
import { motion } from "framer-motion";
import Message from "../../images/chat-conversation-svgrepo-com.png";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
export default function contactMe() {
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [succes, setSucces] = useState(false);

  const variants = {
    initial: {
      y: 500,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_62gx5vj",
        "template_7ooqcbj",
        formRef.current,
        "43RdWZHIhhRlvtkJ6"
      )
      .then(
        (result) => {
          setSucces(true);
          console.log(result.text);
        },
        (error) => {
          setError(true);
          console.log(error.text);
        }
      );
  };
  return (
    <motion.div
      className="contactMe"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>
          I can make your desiyer project
        </motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>
            Email :<span> saharrefaei1999@gmail.com</span>
          </h2>
        </motion.div>
        <div className="formContainer">
          <motion.div
            className="MessageMe"
            initial={{ opacity: 1 }}
            whileInView={{ opacity: 0 }}
            transition={{ delay: 0.9, duration: 1 }}
          >
            <img src={Message} />
          </motion.div>

          <motion.form
            action=""
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            ref={formRef}
            onSubmit={sendEmail}
          >
            <input type="text" required placeholder="Name" name="name" />
            <input type="email" required placeholder="Email" name="email" />
            <textarea id="" rows={4} placeholder="Message" name="message" />
            <button>Send it to me </button>
            {error && "oops ! it seems something happened"}
            {succes && "i got your email"}
          </motion.form>
        </div>
      </motion.div>
    </motion.div>
  );
}
