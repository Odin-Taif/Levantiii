import { useState, useEffect } from "react";
import Image from "next/image";
import style from "./categoryCard.module.scss";

const CategoryCard = ({ name, urlParamName, cardIcon }) => {
  return (
    <>
      <div className={style.serivcesIcon}>
        <Image
          width="20px"
          height="20px"
          className={style.serivcesIcon}
          src={cardIcon}
          draggable={false}
          alt={name}
        />
      </div>
      <h1 className={style.servicesH1}> {urlParamName}</h1>
      <p className={style.servicesP}>{name}</p>
    </>
  );
};

export default CategoryCard;
