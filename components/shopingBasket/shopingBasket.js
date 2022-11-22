import { MdShoppingBasket } from "react-icons/md";
import style from "./shopingBasket.module.scss";

const ShopingBasket = () => {
  return (
    <div className={style.basketContainer}>
      <MdShoppingBasket className={style.basket} />
      <div className={style.dot}>
        <p className={style.dotText}>2</p>
      </div>
    </div>
  );
};

export default ShopingBasket;
