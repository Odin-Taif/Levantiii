import Image from "next/image";
import { useState } from "react";
import style from "./addItemform.module.scss";
import { categories } from "../dataHub";
import { Loader } from "../componentsHub";
import { MdCloudUpload, MdDelete } from "react-icons/md";
import { useStateValue } from "../../../context/stateProvider";
import { getItems } from "../../../utils/firebaseFunction";
import { actionType } from "../../../context/reducer";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { storage } from "../../../Firebase/firebase.config";
import { saveItem } from "../../../utils/firebaseFunction";

const AddItemForm = ({ onClose }) => {
  const [title, setTitle] = useState("");
  const [calories, setCalories] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState(null);
  const [fields, setFields] = useState(false);
  const [alertSataus, setAlertsStatus] = useState("");
  const [msg, setMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [imageAsset, setImageAsset] = useState(null);
  const [{ foodItems }, dispatch] = useStateValue();

  const uploadImage = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const imageFile = e.target.files[0];
    console.log(imageFile);
    const storageRef = ref(storage, `Images/${Date.now()}-${imageFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const uploadProgress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        console.log(error);
        setFields(true);
        setMsg("Error while uploading, Try again!");
        setAlertsStatus("red");
        setTimeout(() => {
          setFields(false);
          setIsLoading(false);
        }, 5000);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageAsset(downloadURL);
          setIsLoading(false);
          setFields(true);
          setMsg("Image Uploaded successfully!");
          setAlertsStatus("success");
          setTimeout(() => {
            setFields(false);
          }, 4000);
        });
      }
    );
  };

  //-=-=-=-=-=-=-=-Delete the Image
  const deleteImage = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const deleteRef = ref(storage, imageAsset);
    deleteObject(deleteRef).then(() => {
      setImageAsset(null);
      setIsLoading(false);
      setAlertsStatus("sucess");
      setTimeout(() => {
        setFields(false);
      }, 4000);
    });
  };

  //-=-=-=-Save the input data to firestore db.
  const saveDetails = () => {
    setIsLoading(true);
    try {
      if (!title || !calories || !imageAsset || !price || !category) {
        console.log(error);
        setFields(true);
        setMsg("Required fields can not be empty");
        setAlertsStatus("red");
        setTimeout(() => {
          setFields(false);
          setIsLoading(false);
        }, 4000);
      } else {
        const data = {
          id: `${Date.now()}`,
          title: title,
          imageURL: imageAsset,
          category: category,
          calories: calories,
          qty: 1,
          price: price,
        };
        saveItem(data);
        setIsLoading(false);
        setFields(true);
        setMsg("Data uploaded.");
        setAlertsStatus("success");
        setTimeout(() => {
          setFields(false);
          clearData();
        }, 4000);
      }
    } catch (error) {
      console.log(error);
      setFields(true);
      setMsg("Error while uploading, Try again!");
      setAlertsStatus("red");
      setTimeout(() => {
        setFields(false);
        setIsLoading(false);
      }, 4000);
    }
    fetchData();
  };

  //-=-=-=-=-Clear the data after saveing or submiting.
  const clearData = () => {
    setTitle("");
    setImageAsset(null);
    setCalories("");
    setPrice("");
    setCategory("select category");
  };
  const fetchData = async () => {
    await getItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };

  return (
    <section>
      <div className={style.contactContainer}>
        <div className={style.contactForm}>
          <form className={style.form}>
            <label className={style.formHeader}>
              | Fill the form with item details.
              <div className={style.statusContainer}>
                {fields && (
                  <p style={{ color: `${alertSataus}` }}>Something Wrong</p>
                )}
              </div>
            </label>
            <input
              type="text"
              name="name"
              value={title}
              placeholder="Give me a title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <select
              name="dish"
              onChange={(e) => setCategory(e.target.value)}
              className={style.selectDish}
            >
              <option className={style.selectOption} value="other">
                select a category
              </option>
              Select a dish ...
              {categories &&
                categories.map((item) => (
                  <option
                    key={item.id}
                    className={style.selectOption}
                    value={item.urlParamName}
                    defaultValue="selected"
                  >
                    {item.name}
                  </option>
                ))}
            </select>

            <div className={style.imageUpload}>
              {isLoading ? (
                <Loader />
              ) : (
                <>
                  {!imageAsset ? (
                    <>
                      <label className={style.cloudUpload}>
                        <div className={style.cloudUpload}>
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
                          <MdCloudUpload
                            style={{ color: "white", fontSize: "2rem" }}
                          />
                          <p>Click here to upload.</p>
                        </div>
                      </label>
                    </>
                  ) : (
                    <>
                      <div>
                        <Image
                          height={"200px"}
                          width={"200px"}
                          layout="fixed"
                          src={imageAsset}
                          alt="uploaded Image"
                        />

                        <button onClick={deleteImage}>
                          Remove
                          <MdDelete />
                        </button>
                      </div>
                    </>
                  )}
                </>
              )}
            </div>

            <input
              type="text"
              name="name"
              value={calories}
              placeholder="Calories"
              onChange={(e) => setCalories(e.target.value)}
            />

            <input
              type="text"
              name="name"
              value={price}
              placeholder="$Price"
              onChange={(e) => setPrice(e.target.value)}
            />

            <button
              type="button"
              className={style.formBtn}
              onClick={saveDetails}
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddItemForm;
