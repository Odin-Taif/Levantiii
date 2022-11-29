import {
  setDoc,
  doc,
  getDocs,
  query,
  collection,
  orderBy,
  updateDoc,
  update,
  getDoc,
} from "firebase/firestore";
import { db, auth } from "../Firebase/firebase.config";

// Get alll items from a collection
export const getItems = async () => {
  const items = await getDocs(
    query(collection(db, "users"), orderBy("id", "desc"))
  );
  return items.docs.map((doc) => doc.data());
};

export const getUserID = async () => {
  console.log(auth.currentUser);
  return auth.currentUser;
};
//-=-=-=-=-=-=-= get authenticated user-=-=-=-=-=-|||||||||||||||||
export const getAuthenticatedUser = async (userID) => {
  console.log(userID);
  const docRef = doc(db, "users", `${userID}`);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    // console.log("Document data:", docSnap.data());
  } else {
    console.log("No such document!");
  }
  return docSnap.data();
};

//-=-=-=-=-=-=-= saveITtem-=-=-=-=-=-|||||||||||||||||
export const saveItem = async (data) => {
  await setDoc(doc(db, "users", `${data.id}`), data);
};
//-=-=-=-=-=-=-= saveImage-=-=-=-=-=-|||||||||||||||||
export const saveImage = async (imageAsest, userID) => {
  await updateDoc(doc(db, "users", userID), {
    imgUploaded: imageAsest,
  });
  console.log("saving done ");
};
