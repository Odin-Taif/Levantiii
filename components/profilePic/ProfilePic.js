import React, { useState } from "react";
import Image from "next/image";
import style from "./profilePic.module.scss";
import meUppsala from "../../public/Assets/webp/levantisk1.png";
import meStockholm from "../../public/Assets/webp/levantisk1.png";
import meBirlin from "../../public/Assets/webp/levantisk1.png";

const ProfilePic = () => {
  return (
    <>
      <div className={style.profilePic}>
        <Image
          className={style.profileImage}
          src={meStockholm}
          width={"200px"}
          height={"200px"}
          alt="Mjd Profile picture"
          priority={true}
          quality={50}
          draggable={false}
          layout={"responsive"}
        />
        <Image
          src={meBirlin}
          width={"200px"}
          height={"200px"}
          alt="Mjd Profile picture"
          quality={50}
          priority={true}
          layout={"responsive"}
          draggable={false}
          className={style.profileImage}
        />
        <Image
          src={meUppsala}
          width={"200px"}
          height={"200px"}
          alt="Mjd Profile picture"
          quality={50}
          priority={true}
          layout={"responsive"}
          draggable={false}
          className={style.profileImage}
        />
      </div>
    </>
  );
};
export default ProfilePic;
