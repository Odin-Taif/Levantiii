import { useState, useRef, useEffect } from "react";
import style from "./categoryMenu.module.scss";
import CategoryCard from "./categoryCard/categoryCard";
import { DishMenu } from "../componentsHub";
import { categories } from "../dataHub";
import { useStateValue } from "../../context/stateProvider";

const CategoryMenu = () => {
  const [filter, setfilter] = useState("");
  const [{ foodItems }, dispatch] = useStateValue();

  useEffect(() => {}, [filter]);
  const slider = useRef();
  const scrollLeft = (scrollOffset) => {
    slider.current.scrollLeft += scrollOffset;
  };
  const scrollRight = (scrollOffset) => {
    slider.current.scrollLeft -= scrollOffset;
  };
  return (
    <div className={style.container}>
      <h1 className={style.title}>Chosse a category. </h1>
      <div className={style.wraper} ref={slider}>
        <div className={style.menuContainer}>
          {categories &&
            categories.map((category) => (
              <div
                key={category.id}
                className={
                  filter === category.urlParamName
                    ? style.serivcesCardActive
                    : style.serivcesCard
                }
                onClick={() => setfilter(category.urlParamName)}
              >
                <CategoryCard {...category} />
              </div>
            ))}
        </div>
        <div className={style.dishFiltered}>
          <DishMenu data={foodItems?.filter((it) => it.category === filter)} />
        </div>
      </div>
    </div>
  );
};

export default CategoryMenu;
