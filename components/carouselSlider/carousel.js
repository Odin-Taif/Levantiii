import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import style from "./carousel.module.scss";
import CarouselCard from "./carouselCard/carouselCard";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

function Carousel({ cards }) {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  const scrollLeft = (scrollOffset) => {
    carousel.current.scrollLeft += scrollOffset;
  };
  const scrollRight = (scrollOffset) => {
    carousel.current.scrollLeft -= scrollOffset;
  };

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className={style.container}>
      <div className={style.titleContainer}>
        <p className={style.sliderTitle}>| Our frech items selection</p>
      </div>

      <motion.div
        ref={carousel}
        className={style.carouselContainer}
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className={style.carouselWrapper}
        >
          {(cards || []).map((card) => {
            return (
              <motion.div className={style.imageContainer} key={card.id}>
                <CarouselCard {...card} />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>

      {/* ||-=-=-=-=-=-=-=-=-=- arrows buttons -=-=-=-=-=-=-=--=-=-=-=-=- */}
      {/* <div className={style.buttonsContainer}>
        <motion.div whileTap={{ scale: 0.75 }}>
          <MdChevronLeft
            style={{ fontSize: "3rem", color: "white", cursor: "pointer" }}
            onClick={() => scrollRight(150)}
          />
        </motion.div>
        <motion.div whileTap={{ scale: 0.75 }}>
          <MdChevronRight
            style={{ fontSize: "3rem", color: "white", cursor: "pointer" }}
            onClick={() => scrollLeft(150)}
          />
        </motion.div>
      </div> */}
    </div>
  );
}

export default Carousel;
