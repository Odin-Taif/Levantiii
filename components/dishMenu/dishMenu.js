import { useRef } from "react";
import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import style from "./dishMenu.module.scss";
import DishCard from "./dishCard/dishCard";

const DishMenu = ({ data }) => {
  const slider = useRef();
  const scrollLeft = (scrollOffset) => {
    slider.current.scrollLeft += scrollOffset;
  };
  const scrollRight = (scrollOffset) => {
    slider.current.scrollLeft -= scrollOffset;
  };
  return (
    <>
      <h1 className={style.title}>Meal of the day. </h1>
      <div className={style.container}>
        <div className={style.wraper} ref={slider}>
          <div className={style.menuContainer}>
            {data && data.map((item) => <DishCard {...item} key={item.id} />)}
          </div>
        </div>

        <div className={style.buttonsContainer}>
          <motion.button
            whileTap={{ scale: 0.75 }}
            style={{
              backgroundColor: "transparent",
              border: "none",
              textAlign: "center",
            }}
          >
            <MdChevronLeft
              style={{ fontSize: "3rem", color: "gold", cursor: "pointer" }}
              onClick={() => scrollRight(150)}
            />
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.75 }}
            style={{
              backgroundColor: "transparent",
              border: "none",
              textAlign: "center",
            }}
          >
            <MdChevronRight
              style={{ fontSize: "3rem", color: "white", cursor: "pointer" }}
              onClick={() => scrollLeft(150)}
            />
          </motion.button>
        </div>
      </div>
    </>
  );
};

export default DishMenu;
