import Image from "next/image";
import Loader from "../../../Loader/loader";
import style from "./uploadImage.module.scss";
import { AiOutlineUser } from "react-icons/ai";
const UploadImage = ({
  isLoading,
  imageAsset,
  uploadImage,
  deleteImage,
  editImage,
}) => {
  return (
    <div className={style.imageUpload}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {!imageAsset ? (
            <>
              <label className={style.cloudUpload}>
                <input
                  type="file"
                  name="uploadimage"
                  accept="image/*"
                  onChange={uploadImage}
                  style={{
                    width: "0",
                    height: "0",
                    padding: "0",
                  }}
                />
                <AiOutlineUser style={{ color: "white", fontSize: "2rem" }} />
                <p>Upload your image</p>
              </label>
            </>
          ) : (
            <>
              <div className={style.imageContainer} onClick={deleteImage}>
                <div className={style.profileImage}>
                  <Image
                    height={"100px"}
                    width={"100px"}
                    layout="fixed"
                    src={imageAsset}
                    alt="uploaded Image"
                    draggable={"false"}
                  />
                  <span className={style.editText}> Edit</span>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default UploadImage;
