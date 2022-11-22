import { useState } from "react";
import style from "./cartItem.module.scss";
import Image from "next/image";
import dummyImage from "../../public/Assets/webp/levantisk.png";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

const CartItem = () => {
  const [counter, setCounter] = useState(1);
  return (
    <div className={style.cartItem}>
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <Image
          src={dummyImage}
          width={"70px"}
          height={"70px"}
          style={{ borderRadius: "2%" }}
          draggable={"false"}
          alt={"image"}
        />
        <h4 style={{ margin: "1rem" }}>
          Choclite <p>$23</p>
        </h4>
      </div>

      <div className={style.itemCounter}>
        <AiOutlineMinusCircle
          onClick={() => setCounter(counter - 1)}
          style={{ fontSize: "2rem", cursor: "pointer" }}
        />

        <div style={{ display: "block", width: "2rem", margin: "1rem" }}>
          <h1>{counter < 0 ? setCounter(0) : counter}</h1>
        </div>

        <AiOutlinePlusCircle
          onClick={() => setCounter(counter + 1)}
          style={{ fontSize: "2rem", cursor: "pointer" }}
        />
      </div>
    </div>
  );
};

export default CartItem;
