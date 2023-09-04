import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  beforeAuthStateChanged
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

const gooleProvider = new GoogleAuthProvider();
gooleProvider.setCustomParameters({
  prompt: "select_account",
});



export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, gooleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, gooleProvider);


export const createUserWithGoogleEmailAndPassword = (email, password) => createUserWithEmailAndPassword(auth, email, password);

export const signInWithGoogleEmailAndPassword = (email, password) => signInWithEmailAndPassword(auth, email, password);

export const signOutAuthUser = async () => await signOut(auth);

export const beforeAuthStateChangedTest = (callback) => beforeAuthStateChanged(auth, callback)

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    try {
      const createAt = new Date();
      setDoc(userDocRef, {
        displayName,
        email,
        createAt,
      });
    } catch (error) {
      console.log("error while creating user document ", error.message);
    }
  }
  console.log("FireBase: userDocRef ", userDocRef);
  return userDocRef;
};
