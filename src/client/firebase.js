import {initializeApp, getApps} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
import {getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDaw1TprUNC6wPpeiU5lasE05sGPoOJiAU",
  authDomain: "disneypls.firebaseapp.com",
  projectId: "disneypls",
  storageBucket: "disneypls.appspot.com",
  messagingSenderId: "658925471960",
  appId: "1:658925471960:web:2913380537b2f5a3c96fad",
  measurementId: "G-QQC3RHPCYH",
};

getApps.length === 0 && initializeApp(firebaseConfig);
export const db = getFirestore();

export const loginWithGoogle = async () => {
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider()
  return await signInWithPopup(auth, googleProvider)
}

// const mapUserFromFirebaseAuthToUser = (user) => {
//   if (user) {
//     // const { displayName,  } = user
//   }
// }

