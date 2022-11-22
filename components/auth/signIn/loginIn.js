import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import style from "./login.module.scss";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  AuthErrorCodes,
} from "firebase/auth";
import { auth } from "../../../Firebase/firebase.config";
import { useStateValue } from "../../../context/stateProvider";
import { actionType } from "../../../context/reducer";
import {
  saveItem,
  getAuthenticatedUser,
} from "../../../utils/firebaseFunction";
import Link from "next/link";
import { useAuth } from "../../../context/authUserContext";

///-=-=-=-=-Componenet starts here -=-=-=-=-=-=-=-=-=-=-=-=-=-=-
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const { signInEmailPass } = useAuth();
  const googleProvider = new GoogleAuthProvider();
  const router = useRouter();
  const [{ user, existedUser }, dispatch] = useStateValue();
  const { authUser, loading, signOutAndClear } = useAuth();

  //-=-=-=-Sign in with email and password-=-=-=-=-=-=-||||||||||||||
  // const signInWithEmailPassword = async ({ email, password }) => {
  //   try {
  //     const userCredential = await signInWithEmailAndPassword(
  //       auth,
  //       email,
  //       password
  //     );
  //     dispatch({
  //       type: actionType.SET_USER,
  //       user: userCredential.user.providerData[0],
  //     });
  //     localStorage.setItem(
  //       "user",
  //       JSON.stringify(userCredential.user.providerData[0])
  //     );
  //     router.push(`/${userCredential.user.uid}`);
  //   } catch (error) {
  //     showLoginError(error);
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //   }
  // };

  const showLoginError = (error) => {
    if (error.code == AuthErrorCodes.INVALID_PASSWORD) {
      setErrorMsg("Wrong Password, try again!");
    } else {
      setErrorMsg(`${error.message.replace(/Firebase:/gi, "")}`);
    }
  };

  const saveDetails = async (data) => {
    console.log("hello this is save details");
    // setIsLoading(true);
    try {
      saveItem(data);
      // setTimeout(() => {}, 2000);
      // setIsLoading(false);
    } catch (error) {
      console.log(error);
      // setFields(true);
      // setMsg("Error while uploading, Try again!");
      setTimeout(() => {
        // setIsLoading(false);
      }, 4000);
    }
  };
  const pushToUserProfile = (userID) => {
    router.push(`/${userID}`);
  };
  // popUp Sign in function -=-=-=-=-=-=-=-=-=-=-=-=-=-=||||||||||||
  const popUpSignIn = async (provider) => {
    if (!user) {
      // const {
      //   user: { refreshToken, providerData },
      // } = await signInWithPopup(auth, provider);
      const result = await signInWithPopup(auth, provider);
      const resultUser = result.user;
      // console.log(resultUser);
      // console.log(resultUser.providerData[0]);
      dispatch({
        type: actionType.SET_USER,
        user: resultUser,
      });
      localStorage.setItem("user", JSON.stringify(resultUser));
      await getAuthenticatedUser(resultUser.uid).then((data) => {
        // we check if the user is already signed in or not
        // console.log(resultUser);
        if (!data) {
          console.log("the user is new there is no data for him");
          const newUser = {
            id: resultUser.uid,
            name: resultUser.displayName,
            email: resultUser.email,
            mobile: "",
            imgUploaded: null,
            socialLinks: [{ linkName: "facebook" }, { linkName: "Instagram" }],
          };
          saveDetails(newUser);
          // console.log(newUser);
          dispatch({
            type: actionType.SET_EXISTED_USER,
            existedUser: newUser,
          });
          localStorage.setItem("existedUser", JSON.stringify(newUser));
          console.log("user is stored in and dispached to context as well");
          //else there is data and the user is signed in before and no neeed to upload his data.
        } else {
          dispatch({
            type: actionType.SET_EXISTED_USER,
            existedUser: data,
          });
          console.log("user is stored in the data base");
          localStorage.setItem("existedUser", JSON.stringify(data));
        }
      });
      pushToUserProfile(resultUser.uid);
      // router.push(`/${resultUser.uid}`);
    } else {
      // the user signed in already.
      // console.log(user.uid);
      pushToUserProfile(user.uid);
    }
  };

  //-==-=-=-=-=-=-=-=-=-=-=-=-
  return (
    <div className={style.contactContainer}>
      <div className={style.contactForm}>
        <button
          className={style.federatedIDBtn}
          onClick={() => popUpSignIn(googleProvider)}
        >
          <FcGoogle size={25} style={{ margin: "auto 1rem" }} />
          <p> Google Sign in</p>
        </button>
        <button className={style.federatedIDBtn} onClick={() => popUpSignIn()}>
          <FaLinkedin size={25} style={{ margin: "auto 1rem" }} />
          <p> Google Sign in</p>
        </button>
        <button className={style.federatedIDBtn} onClick={() => popUpSignIn()}>
          <FcGoogle size={25} style={{ margin: "auto 1rem" }} />
          <p> Google Sign in</p>
        </button>
        <Formik
          initialValues={{
            email: email,
            password: password,
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Invalid email address")
              .required("Email is Required!"),
            password: Yup.string()
              .required("No password provided.")
              .min(8, "Password is too short - should be 8 chars minimum.")
              .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
          })}
          onSubmit={({ email, password }, { setSubmitting }) => {
            setSubmitting(true);
            setError(null);
            setTimeout(() => {
              signInEmailPass(auth, email, password)
                .then((authUser) => {
                  console.log(
                    "Success. The user signd in from signInEmailPass"
                  );
                  console.log(authUser.user.uid);
                  dispatch({
                    type: actionType.SET_USER,
                    user: authUser.user.providerData[0],
                  });
                  dispatch({
                    type: actionType.SET_USER,
                    authUser: authUser.user.providerData[0],
                  });
                  localStorage.setItem(
                    "user",
                    JSON.stringify(authUser.user.providerData[0])
                  );
                  router.push(`/${authUser.user.uid}`);
                })
                .catch((error) => {
                  setError(error.message);
                });
              // event.preventDefault();
              // signInWithEmailPassword(values);
              alert(JSON.stringify({ email, password }, null, 2));
            }, 4000);
          }}
        >
          <Form className={style.form}>
            {errorMsg ? <div className={style.errorMsg}>{errorMsg}</div> : null}
            <label className={style.formHeader}>
              | Sign in to your account.
            </label>
            {/* <label className={style.formHeader}>| Sign in</label> */}
            {/* Email Field */}
            <Field name="email" type="email" placeholder="Type your Email" />
            <ErrorMessage name="email">
              {(msg) => <div className={style.errorMsg}>{msg}</div>}
            </ErrorMessage>
            {/* intro Field */}
            <Field
              name="password"
              type="text"
              placeholder="Type your password!"
            />
            <ErrorMessage name="password">
              {(msg) => <div className={style.errorMsg}>{msg}</div>}
            </ErrorMessage>
            <button type="submit" className={style.formBtn}>
              Sign in
            </button>
            No account? <Link href="/sign_up">Create one</Link>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
