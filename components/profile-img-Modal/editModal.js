import { useEffect, useState } from "react";
import style from "./editModal.module.scss";

import Image from "next/image";
import {
  AiFillCloseCircle,
  AiOutlineCloudUpload,
  AiFillEdit,
} from "react-icons/ai";

function EditModal({
  show,
  imgUploaded,
  imageAsset,
  setImageAsset,
  onClose,
  saveImageAsset,
  deleteUploadedImage,
  uploadImage,
}) {
  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanUp() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  });

  if (!show) {
    return null;
  }
  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      onClose();
    }
  };
  const saveAndClose = () => {
    deleteUploadedImage();
    saveImageAsset(imageAsset);
    onClose();
  };
  const uploadAndClose = () => {
    saveImageAsset(imageAsset);
    onClose();
  };

  const editImageAsset = () => {
    setImageAsset(null);
  };
  return (
    <div className={style.modal} onClick={onClose}>
      <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
        <AiFillCloseCircle
          size={25}
          className={style.closeBtn}
          onClick={onClose}
        />
        <div className={style.modalBody}>
          <div className={style.dropzone}>
            <>
              {!imageAsset ? (
                <label
                  style={{
                    width: "0",
                    height: "0",
                    padding: "0",
                  }}
                >
                  <input
                    type="file"
                    name="file"
                    accept="image/*"
                    onChange={uploadImage}
                    style={{
                      width: "0",
                      height: "0",
                      padding: "0",
                    }}
                  />

                  <AiOutlineCloudUpload
                    size={100}
                    style={{
                      color: "black",
                      cursor: "pointer",
                    }}
                  />
                </label>
              ) : (
                <div className={style.uploadImgContainer}>
                  <AiFillEdit
                    size={36}
                    className={style.editBtn}
                    onClick={() => editImageAsset()}
                  />
                  <Image
                    height={"100px"}
                    width={"100px"}
                    layout="responsive"
                    src={imageAsset}
                    alt="image Asset"
                    draggable={"false"}
                  />
                </div>
              )}
            </>
          </div>
          {imgUploaded ? (
            <button
              disabled={imageAsset === null ? true : false}
              onClick={() => saveAndClose()}
              className={
                imageAsset === null ? style.btnDisabled : style.btnActive
              }
            >
              Save and close
            </button>
          ) : (
            <button
              disabled={imageAsset === null ? true : false}
              onClick={() => uploadAndClose()}
              className={
                imageAsset === null ? style.btnDisabled : style.btnActive
              }
            >
              upload and close
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default EditModal;
