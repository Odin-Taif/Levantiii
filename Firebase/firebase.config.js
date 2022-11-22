import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getStorage, connectStorageEmulator } from "firebase/storage";
import { getAuth, connectAuthEmulator } from "firebase/auth";

let firebaseConfig = {
  apiKey: "AIzaSyDDAT3F1BEu-0BQGBSmDxEj4URLBeyQ7uw",
  authDomain: "levantiiii.firebaseapp.com",
  databaseURL:
    "https://levantiiii-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "levantiiii",
  storageBucket: "levantiiii.appspot.com",
  messagingSenderId: "774267730883",
  appId: "1:774267730883:web:4505b46159079d932f1b76",
  measurementId: "G-FK6DNC414P",
};

//-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=|||||||||||||||||||
if (typeof window !== "undefined") {
  const hostname = window.location.hostname;
  if (hostname === "localhost" && typeof window !== "undefined") {
    firebaseConfig = {
      apiKey: "AIzaSyDDAT3F1BEu-0BQGBSmDxEj4URLBeyQ7uw",
      authDomain: "levantiiii.firebaseapp.com",
      projectId: "levantiiii",
      storageBucket: "levanti-a528a.appspot.com",
      messagingSenderId: "774267730883",
      appId: "1:774267730883:web:4505b46159079d932f1b76",
      measurementId: "G-FK6DNC414P",
      databaseURL: "http://localhost:9000?ns=emulatorui",
    };
  }
}

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const storage = getStorage();
const db = getFirestore();

connectFirestoreEmulator(db, "localhost", 8080);
connectStorageEmulator(storage, "localhost", 9199);
connectAuthEmulator(auth, "http://localhost:9099");
// if (typeof window !== "undefined") {
//   if (process.env.NEXT_PUBLIC_BASE_URL === "http://localhost:3000") {
//     // connectFirestoreEmulator(db, "localhost", 8080);
//     connectStorageEmulator(storage, "localhost", 9199);
//     connectAuthEmulator(auth, "http://localhost:9099");
//   }
// }

// const app = getApps.lenght > 0 ? getApp() : initializeApp(firebaseConfig);

export { app, db, storage, auth };
//-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=|||||||||||||||||||
