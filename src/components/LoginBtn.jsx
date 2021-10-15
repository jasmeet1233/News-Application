import React, { useState } from "react";
import app from "../firebase/firebase";
import providerFirebase from "../firebase/authProvider";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { useGlobalContext } from "../Globalstate/context";

const auth = getAuth(app);

const LoginBtn = () => {
  const {signInHandler, signOutHandler, isSignedIn, userData} = useGlobalContext()

  const loginHandler = () => {
    signInWithPopup(auth, providerFirebase)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        signInHandler(user)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const logoutHandler = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        signOutHandler()
      })
      .catch((error) => {
        // An error happened.
        console.log("error--of--signIn", error);
      });
  };

  if (isSignedIn) {
    return (
      <div className="btn-container">
        <img
          src="https://w7.pngwing.com/pngs/741/68/png-transparent-user-computer-icons-user-miscellaneous-cdr-rectangle-thumbnail.png"
          alt="photo"
          style={{ borderRadius: "100px", height: "30px", marginRight:'3px' }}
        />
        <div>Welcome {userData.displayName}</div>
        <button onClick={logoutHandler}>Sign out</button>
      </div>
    );
  }

  return (
    <div className="btn-container">
      <button
        className= "button"
        onClick={() => {
          // signInWithRedirect(auth, providerFirebase);
          loginHandler();
        }}
      >
        Login With Google
      </button>
      <div>{userData && userData.uid}</div>
    </div>
  );
};

export default LoginBtn;
