import "./portfolio.scss";
import { motion, useScroll, useSpring,useTransform } from "framer-motion";
import pic1 from "../../images/jackson-sophat-_t-l5FFH8VA-unsplash.jpg";
import img2 from "../../images/michael-dziedzic-qDG7XKJLKbs-unsplash.jpg";
import img3 from "../../images/pankaj-patel-6JVlSdgMacE-unsplash.jpg";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "React Dashboard",
    img: pic1,
    decs: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "React Dashboard",
    img: img2,
    decs: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    title: "React Dashboard",
    img: img3,
    decs: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  }
];


  const EachItem = ({ item }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
      target: ref,
    });

    const y = useTransform(scrollYProgress, [0, 1], [-0,300]);

    return (
      <section >
        <div className="countiner">
          <div className="wrapper">
          <motion.div className="imgCountainer" ref={ref}> 
            <img src={item.img} alt={item.title} />
            </motion.div>
            <motion.div className="textCountainer" style={{y: y }}>
              <h2>{item.title}</h2>
              <p>{item.decs}</p>
              <button>see on Github</button>
            </motion.div>
          </div>
        </div>
      </section>
    );
  };

  const Portfolio = () => {
    const ref = useRef();
  
    const { scrollYProgress } = useScroll({
      target: ref.current,
      offset: ["end end", "start start"],
    });
  
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
    });
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>my last project</h1>
        <motion.div style={{ scaleX }} className="progressbar"></motion.div>
      </div>
      {items.map((item) => (
        <EachItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
