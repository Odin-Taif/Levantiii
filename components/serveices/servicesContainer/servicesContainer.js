import React from "react";
import style from "./servicesContainer.module.scss";
import ServiCard from "../serviceCard/cardService";

const Services = ({ id, title, cards }) => {
  return (
    <>
      <div className={style.servicesContainer} id="services">
        <div className={style.servicesDiv}>
          {(cards || []).map((card) => {
            return <ServiCard key={card.id} {...card} />;
          })}
        </div>
      </div>
    </>
  );
};
export default Services;
