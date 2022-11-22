import React from "react";
import Image from "next/image";
import style from "./dishCard.module.scss";
import { motion } from "framer-motion";

const DishCard = ({ titel, calories, imageURL, price }) => {
  return (
    <motion.div className={style.serivcesCard} whileTap={{ scale: 1.2 }}>
      <div className={style.serivcesIcon}>
        <Image
          width="20px"
          height="20px"
          className={style.serivcesIcon}
          src={imageURL}
          draggable={"false"}
          alt={titel}
        />
      </div>
      <h1 className={style.servicesH1}> {calories}</h1>
      <p className={style.servicesP}>{price}</p>
    </motion.div>
  );
};

export default DishCard;
