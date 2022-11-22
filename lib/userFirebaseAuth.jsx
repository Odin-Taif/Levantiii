import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../Firebase/firebase.config";
//-=-=--=--=-=-=-=-Format user-=-=-=-=-=-=-
const formatAuthUser = (user) => ({
  uid: user.uid,
  email: user.email,
});
//-=-=-=-=-=-=-=-=-=-=-=-=||||||||||||||||||||||
export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  //-=-=-=- authStateChanged--=-=-=-=-=
  const authStateChanged = async (authState) => {
    if (!authState) {
      setLoading(false);
      return;
    }
    setLoading(true);
    var formattedUser = formatAuthUser(authState);
    setAuthUser(formattedUser);
    setLoading(false);
  };

  //-=-=-=-=-=-=clear and set user to null
  const clear = () => {
    console.log("from clear");
    setAuthUser(null);
    setLoading(true);
  };
  //-=-=-=- signIn--=-=-=-=-=-=---=-=-=
  const signInEmailPass = (auth, email, password) =>
    signInWithEmailAndPassword(auth, email, password);
  //-=-=-=- signUp--=-=-=-=-=-=---=-=-=
  const signUpEmail = (auth, email, password) =>
    createUserWithEmailAndPassword(auth, email, password);
  //-=-=-=- signOut--=-=-=-=-=-=---=-=-=

  // const logout = async () => {
  //   console.log("hello for log out");
  //   await signOut(auth);
  //   window.localStorage.clear();
  //   dispatch({
  //     type: actionType.SET_USER,
  //     user: null,
  //   });
  //   dispatch({
  //     type: actionType.SET_USER,
  //     existedUser: {},
  //   });
  //   router.push(`/`);
  // };
  const signOutAndClear = () => {
    console.log("hello from sign out");
    signOut(auth)
      .then(() => {
        console.log("Sign-out successful.");
        clear();
        router.push("/");
      })
      .catch((error) => {
        console.log("An error happened.");
      });
  };
  //-=-=-=-=-=-=-=- Observ the state of the athentication
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, authStateChanged);
    return () => unsubscribe();
  }, []);
  return {
    authUser,
    loading,
    signInEmailPass,
    signUpEmail,
    signOutAndClear,
  };
}
