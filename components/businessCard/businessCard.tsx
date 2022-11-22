import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { motion } from "framer-motion";
import { useStateValue } from "../../context/stateProvider";
import { actionType } from "../../context/reducer";

// import { Qrcode } from "./qrModal/qrModal";

//-=-=-=- ICons import-=-=-=-=-=-=-=-=-|||||||||||||||||||
import { FiShare, FiLogOut, FiEdit } from "react-icons/fi";
import { MdQrCode, MdSaveAlt } from "react-icons/md";
import { BiAddToQueue } from "react-icons/bi";
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import QrModal from "./qrModal/qrModal";
// Compos imports -=-=-=-=-=-=-=-=-=-||||||||||||||||
import UploadImage from "../uploadImage/uploadImage";
import EditModal from "../profile-img-Modal/editModal";
import AddSocialMediaModal from "../addSocialMediaModal/addSocialMediaModal";
import { SociaMediaLink } from "../reusableComponents/reuseableHub";
//-=-=-=-=-=-=-=-=-=-=-=-=-= firebase Imports-=-=-=-=-=-=-=-
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { storage } from "../../Firebase/firebase.config";
import { saveImage, getAuthenticatedUser } from "../../utils/firebaseFunction";
import style from "./businessCard.module.scss";
import { useAuth } from "../../context/authUserContext";
//-=-=-=-=-=-=-=-=-=-=-=-= businessCards Component starts here-=-=-=-=-=-=--===-=-=\||||||||||||||

interface Props {
  id: string;
  name: string;
  email: string;
  imgUploaded: string;
  socialLinks: SocialMedialLink[];
}
const BusinessCard = ({ id, name, email, imgUploaded, socialLinks }: Props) => {
  const [showQr, setshowQr] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [imageAsset, setImageAsset] = useState<any>(null);
  const [msg, setMsg] = useState<string>("");
  const [fields, setFields] = useState<boolean>(false);
  const [showLoginModal, setShowEditModal] = useState<boolean>(false);
  const [showSocialMediaModal, setshowSocialMediaModall] =
    useState<boolean>(false);
  const [{ user, existedUser }, dispatch] = useStateValue();
  const { authUser, loading, signOutAndClear } = useAuth();
  useEffect(() => {
    fetchExistedUser(authUser.uid);
  }, [imageAsset]);
  //-=-=-=-=-=-=-=-=-=-=-=-=- add social link -=-=-=-=-=-=-=-|||||||||||||||||||

  ///-=-=-=-=-=-=-=-=-=-=-=-=-=-=- upload image -=-=-=-=-=-=-=-=-=-||||||||||||||||||||
  const uploadImage = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    const imageFile = e.target.files[0];
    console.log(imageFile);
    const imgRef = `Images/${Date.now()}-${imageFile.name}`;
    const storageRef = ref(storage, `${imgRef}`);
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
        setTimeout(() => {
          setFields(false);
          setIsLoading(false);
        }, 4000);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageAsset(downloadURL);
          console.log(downloadURL);
          // console.log(`this is the image asset${imageAsset}`);
          setFields(false);
          setIsLoading(false);
          setMsg("Image Uploaded successfully!");
          console.log(msg);
          setTimeout(() => {
            setFields(false);
          }, 4000);
        });
      }
    );
  };
  //-=-=-=-=-=-=-=-=-=-=-=-=  Save image Asset -=-=-=-=-=-||||||||||||||||||||||||||||||||
  const saveImageAsset = async (imageAsset: string) => {
    console.log("helloo am save img function");
    try {
      await saveImage(imageAsset, id);
      setImageAsset(null);
      // console.log(`this is the image Asset ${imageAsset}`);
      // console.log(`this is the image uploaded${imgUploaded}`);
      // console.log(savedImage);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setFields(true);
      setMsg("Error while uploading, Try again!");
      setTimeout(() => {
        setIsLoading(false);
      }, 4000);
    }
  };
  //-=-=-=-=-=-=-=-=-=-=-=-=  delete image Asset -=-=-=-=-=-||||||||||||||||||||||||||||||||
  const deleteUploadedImage = () => {
    console.log("helloo am deleteUploadedImage function");
    setIsLoading(true);
    const deleteRef = ref(storage, imgUploaded);
    deleteObject(deleteRef).then(() => {
      setImageAsset(null);
      setIsLoading(false);
      setTimeout(() => {}, 4000);
    });
  };
  // fetch  authenticted user-=-=-=-=-=-=-=-=-=-=-=-=-=-=-||||||||||||||||
  const fetchExistedUser = async (id: string) => {
    console.log("this is the fetch existed user function");
    await getAuthenticatedUser(id).then((data) => {
      localStorage.setItem("existedUser", JSON.stringify(data));
      dispatch({
        type: actionType.SET_EXISTED_USER,
        existedUser: data,
      });
    });
  };

  /// delete image-=-=-=-=-=-=-=-=-=-=--||||||||||||||||||

  return (
    <>
      {/* <QrModal onClose={() => setshowQr(false)} showQr={showQr} id={id} /> */}
      <EditModal
        onClose={() => setShowEditModal(false)}
        show={showLoginModal}
        imageAsset={imageAsset}
        setImageAsset={setImageAsset}
        imgUploaded={imgUploaded}
        saveImageAsset={saveImageAsset}
        deleteUploadedImage={deleteUploadedImage}
        uploadImage={uploadImage}
      />

      <AddSocialMediaModal
        onClose={() => setshowSocialMediaModall(false)}
        show={showSocialMediaModal}
      />
      <section className={style.businessCard}>
        <article className={style.profile}>
          <div className={style.postCard}>
            <UploadImage
              isLoading={isLoading}
              show={showLoginModal}
              setShowEditModal={setShowEditModal}
              imageAsset={imageAsset}
              imgUploaded={imgUploaded}
              saveImageAsset={saveImageAsset}
              deleteUploadedImage={deleteUploadedImage}
              uploadImage={uploadImage}
            />
          </div>

          {/* firebase practice */}

          <div className={style.funcContianer}>
            <motion.div whileTap={{ scale: 1.2 }}>
              <FiShare style={{ cursor: "pointer" }} />
            </motion.div>
            <motion.div whileTap={{ scale: 1.2 }}>
              <MdSaveAlt style={{ cursor: "pointer" }} />
            </motion.div>
            <motion.div whileTap={{ scale: 1.2 }}>
              <FiEdit
                style={{ cursor: "pointer" }}
                onClick={() => saveImageAsset(imageAsset)}
              />
            </motion.div>
            <motion.div whileTap={{ scale: 1.2 }}>
              <MdQrCode
                style={{ cursor: "pointer" }}
                onClick={() => setshowQr(!showQr)}
              />
            </motion.div>
          </div>
        </article>

        <div className={style.intro}>
          <h2>{name}</h2>
        </div>

        <div className={style.linksContainer}>
          <div className={style.linkWrapper}>
            <Link href={`mailto:${email}`}>Email Me</Link>
            <AiOutlineMail
              size={30}
              color={"white"}
              onClick={() => console.log("add")}
            />
          </div>
          {socialLinks &&
            socialLinks.map((item, index) => (
              <SociaMediaLink {...item} key={index} />
            ))}
          <div
            className={style.addWrapper}
            onClick={() => setshowSocialMediaModall(true)}
          >
            <BiAddToQueue size={30} color={"white"} />
          </div>
        </div>
      </section>
    </>
  );
};

export default BusinessCard;
