import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  signInWithPopup,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLgSFSUtUj6Tm1FudG0REmXn4uDycAOvw",
  authDomain: "clothing-store-f9bf7.firebaseapp.com",
  projectId: "clothing-store-f9bf7",
  storageBucket: "clothing-store-f9bf7.appspot.com",
  messagingSenderId: "124336491967",
  appId: "1:124336491967:web:0088bab2212a32a8df250a",
};

// Initialize Firebase
const fireBaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);
  console.log("userAuth ",userAuth);
  console.log("userDocRef ",userDocRef);
  console.log("userSnapshot ",userSnapshot);
  console.log(userSnapshot.exists());

  if(!userSnapshot.exists()){
    const {displayName, email} = userAuth;
    try {
      const createAt = new Date();
      setDoc(userDocRef, {
        displayName,
        email,
        createAt
      })
    } catch (error) {
      console.log("error while creating user document ",error.message);
    }
  }
  console.log(userSnapshot.exists());

  return userDocRef;
}