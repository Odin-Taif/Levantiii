import { useState } from "react";
import { useStateValue } from "../../../context/stateProvider";
import { actionType } from "../../../context/reducer";
import { useRouter } from "next/router";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import {
  AuthErrorCodes,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { storage, auth } from "../../../Firebase/firebase.config";
import {
  saveItem,
  getAuthenticatedUser,
} from "../../../utils/firebaseFunction";
import UploadImage from "./uploadImage/uploadImage";
import style from "./signUp.module.scss";

const Signup = () => {
  const provider = new GoogleAuthProvider();
  const [isLoading, setIsLoading] = useState(false);
  const [imageAsset, setImageAsset] = useState(null);
  const [msg, setMsg] = useState("");
  const [fields, setFields] = useState(false);
  const [alertSataus, setAlertsStatus] = useState("");
  const [{ user, existedUser }, dispatch] = useStateValue();
  const [storedUser, setstoredUser] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();

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
        }, 4000);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageAsset(downloadURL);
          setFields(false);
          setIsLoading(false);
          setMsg("Image Uploaded successfully!");
          setAlertsStatus("success");
          setTimeout(() => {
            setFields(false);
          }, 4000);
        });
      }
    );
  };
  //-=-=-=-Save the input data to firestore db-=-=-=-=-///
  const saveDetails = async (data) => {
    console.log("hello this is save details");
    setIsLoading(true);
    try {
      saveItem(data);
      setTimeout(() => {
        clearData();
      }, 2000);
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
  //-=-=-=-=-Clears the data after saveing or submiting-=-=-=-=-||||||
  const clearData = () => {
    setImageAsset(null);
  };
  //--=-=-=-=- Fetchs the data of the existed user(in sign up is the newlly created user)-=-=-=-=-=//
  const fetchExistedUser = async (userID) => {
    console.log("this is the fetch existed user function");
    await getAuthenticatedUser(userID).then((data) => {
      localStorage.setItem("existedUser", JSON.stringify(data));
      dispatch({
        type: actionType.SET_EXISTED_USER,
        existedUser: data,
      });
    });
  };
  const showLoginError = (error) => {
    if (error.code == AuthErrorCodes.INVALID_PASSWORD) {
      setErrorMsg("Wrong Password, try again!");
    } else {
      setErrorMsg(`${error.message}`);
    }
  };
  //-=-=-=-=-=-=- Sign up method
  const signUp = async (data) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      dispatch({
        type: actionType.SET_USER,
        user: userCredential.user.providerData[0],
      });
      dispatch({
        type: actionType.SET_USER,
        authUser: userCredential.user.providerData[0],
      });
      localStorage.setItem(
        "user",
        JSON.stringify(userCredential.user.providerData[0])
      );
      data.id = `${userCredential.user.uid}`;
      data.imageAsset = imageAsset;
      console.log(data);
      await saveDetails(data);
      await fetchExistedUser(data.id);
      router.push(`/${data.id}`);
      console.log("sign up is done");
    } catch (error) {
      showLoginError(error);
      const errorCode = error.code;
      const errorMessage = error.message;
    }
  };

  //-=-=-=-= logut -=-=-=-=-=-=-=-=
  const logout = async () => {
    console.log("hello for log out");
    await signOut(auth);
    window.localStorage.clear();
    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
    dispatch({
      type: actionType.SET_USER,
      existedUser: {},
    });
    router.push(`/`);
  };

  return (
    <div className={style.contactContainer}>
      <div className={style.contactForm}>
        <Formik
          initialValues={{
            id: "",
            name: "",
            email: "",
            password: "",
            passwordConfirmation: "",
            mobile: "",
            imgUploaded: imageAsset,
            socialLinks: [{ linkName: "facebook" }, { linkName: "Instagram" }],
          }}
          validationSchema={Yup.object({
            name: Yup.string()
              .max(15, "Must be 15 characters or less")
              .required("Name is Required!"),
            email: Yup.string()
              .email("Invalid email address")
              .required("Email is Required!"),
            password: Yup.string()
              .required("No password provided.")
              .min(8, "Password is too short - should be 8 chars minimum.")
              .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
            passwordConfirmation: Yup.string().oneOf(
              [Yup.ref("password"), null],
              "Passwords must match"
            ),
            mobile: Yup.string().max(30, "Must be 40 characters or less"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true);
            setTimeout(() => {
              signUp(values);
              alert(JSON.stringify(values, null, 2));
              // console.log(values);
            }, 4000);
          }}
        >
          <Form className={style.form}>
            <label className={style.formHeader}>
              |||||-start creating your Levanti card.
            </label>
            {/* Name Field */}
            <Field name="name" type="text" placeholder="Display name." />
            <ErrorMessage name="name">
              {(msg) => <div className={style.errorMsg}>{msg}</div>}
            </ErrorMessage>
            {/* Email Field */}
            <Field name="email" type="email" placeholder="Email address." />
            <ErrorMessage name="email">
              {(msg) => <div className={style.errorMsg}>{msg}</div>}
            </ErrorMessage>
            {/* Password Field */}
            <Field name="password" type="password" placeholder="Password!" />
            <ErrorMessage name="password">
              {(msg) => <div className={style.errorMsg}>{msg}</div>}
            </ErrorMessage>
            {/* Verify your Password Field */}
            <Field
              name="passwordConfirmation"
              type="password"
              placeholder="Confirm password!"
            />
            <ErrorMessage name="passwordConfirmation">
              {(msg) => <div className={style.errorMsg}>{msg}</div>}
            </ErrorMessage>
            {/* mobile number */}
            <Field
              name="mobile"
              type="text"
              placeholder="Mobile number | Optional "
            />
            <ErrorMessage name="intro">
              {(msg) => <div className={style.errorMsg}>{msg}</div>}
            </ErrorMessage>
            <button type="submit" className={style.formBtn}>
              Sign up
            </button>
            {/* <button onClick={() => logout()}>Log out</button> */}

            <div className={style.termsCondition}>
              By clicking Sign Up, you agree to our Terms. Learn how we collect,
              use and share your data in our Privacy Policy and how we use
              cookies and similar technology in our Cookies Policy. You may
              receive SMS notifications from us and can opt out at any time.
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Signup;
