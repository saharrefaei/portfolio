import "./portfolio.scss";
import { motion, useScroll, useSpring,useTransform } from "framer-motion";
import pic1 from "../../images/portfolio2.png";
import img2 from "../../images/portfolio3.png";
import img3 from "../../images/portfolio1.png";
import img4 from '../../images/connectWebsite.png'
import img5 from "../../images/accuracy.png"
import img6 from "../../images/matrix.png"
import img7 from "../../images/matrix2.png"
import img8 from "../../images/matrix3.png"

import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "Admission process",
    img: img5,
    docs:"Predicted applicants in different periods and optimized the admission process, increasing accuracy by 15% and reducing admission time by 17%",
    gitHub: "https://github.com/saharrefaei/python_datascience",

  },
  {
    id: 2,
    title: "Breast cancer",
    img: img6,
    docs:"Prediction of cancer data with 99% accuracy. Using lazypredict and evaluating all algorithms.",
    gitHub: "https://github.com/saharrefaei/python_datascience/blob/main/breast",

  },
  {
    id: 3,
    title: "heart attack",
    img: img7,
    docs:"The heart attack prediction project estimates the probability of heart attack based on people's symptoms.",
    gitHub: "https://github.com/saharrefaei/python_datascience",

  },
  {
    id: 4,
    title: "Customer Clustering",
    img: img8,
    docs:"Customer segmentation project based on different product usage criteria.",
    gitHub: "https://github.com/saharrefaei/python_datascience",

  },
  {
    id: 5,
    title: "PhotoShoot studio",
    img: img4,
    adress :"https://terave-ilk1.vercel.app/",
    gitHub:"https://github.com/saharrefaei"
  },
  {
    id: 6,
    title: " controling services Dashboard",
    img: pic1,
    docs:"Service control panel and project control by organization people (CMS)",
    gitHub:"https://github.com/saharrefaei"
  },
  {
    id: 7,
    title: "Admin Dashboard",
    img: img2,
    docs:"Control panel by the admin, the admin has full access to all products and users, as well as the ability to check profit and loss in the desired time frame.",
    gitHub: "https://github.com/saharrefaei/FirebaseDB",

  },
  {
    id: 8,
    title: "e-commerce website",
    img: img3,
    docs:"Website introducing the company's products and services",
    gitHub: "https://github.com/saharrefaei/CMS/tree/main/src/components",
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
              <span>{item.docs}</span>
              <a href={item.adress} >{item.adress}</a>
              <a href={item.gitHub}>
              <button>see on Github</button></a>
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
        <h1>my latest projects</h1>
        <motion.div style={{ scaleX }} className="progressbar"></motion.div>
      </div>
      {items.map((item) => (
        <EachItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
