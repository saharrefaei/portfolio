import "./portfolio.scss";
import { motion, useScroll,useSpring} from "framer-motion";
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
  },
];
const ref = useRef();

const { scrollYProgress } = useScroll({
    target: ref.current,
    offset: ["end end", "start  start"],
  });

const EachItem = ({ item }) => {
  return <section>{item.title}</section>;
};

const Portfolio = () => {
  return (
    <div className="portfolio">
        <div className="progress">
            <h1>my least project</h1>
            <div className="progressbar">

            </div>
        </div>
      {items.map((item) => (
        <EachItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio; 
