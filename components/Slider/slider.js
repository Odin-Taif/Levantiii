import { useRef } from "react";
import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import style from "./slider.module.scss";
import SliderCard from "./sliderCard/sliderCard";
import { useStateValue } from "../../context/stateProvider";
import { Carousel } from "../componentsHub";

const Slider = () => {
  const [{ foodItems }, dispatch] = useStateValue();
  const rowContainerRef = useRef();
  const scrollLeft = (scrollOffset) => {
    rowContainerRef.current.scrollLeft += scrollOffset;
  };
  const scrollRight = (scrollOffset) => {
    rowContainerRef.current.scrollLeft -= scrollOffset;
  };

  return (
    <div className={style.container}>
      <div>
        <p className={style.sliderTitle}> Our frech items</p>
      </div>

      <div ref={rowContainerRef} className={style.rowContainer}>
        {foodItems &&
          foodItems.map((item) => <SliderCard key={item.id} {...item} />)}
      </div>
      <div className={style.buttonsContainer}>
        <motion.div whileTap={{ scale: 0.75 }}>
          <MdChevronLeft
            style={{ fontSize: "3rem", color: "white", cursor: "pointer" }}
            onClick={() => scrollRight(100)}
          />
        </motion.div>
        <motion.div whileTap={{ scale: 0.75 }}>
          <MdChevronRight
            style={{ fontSize: "3rem", color: "white", cursor: "pointer" }}
            onClick={() => scrollLeft(100)}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Slider;
