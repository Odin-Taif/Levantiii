import style from "./uploadImage.module.scss";
import Image from "next/image";
import userImg from "../../public/Assets/user.webp";

const UploadImage = ({ setShowEditModal, imgUploaded }) => {
  // console.log(imgUploaded);
  return (
    <div className={style.imageUpload}>
      <div
        className={style.profileImage}
        onClick={() => setShowEditModal(true)}
      >
        <Image
          height={"100px"}
          width={"100px"}
          layout="fixed"
          src={imgUploaded ? imgUploaded : userImg}
          alt="uploaded Image here"
          draggable={"false"}
          priority={"true"}
        />
        <span>{imgUploaded ? "Edit" : "Upload"}</span>
      </div>
    </div>
  );
};

export default UploadImage;
