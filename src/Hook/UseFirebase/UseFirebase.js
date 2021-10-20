import initializeAuthentication from "../../Firebase/Firebase.init";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useState } from "react";
initializeAuthentication();
const useFirebase = () => {
  const auth = getAuth();
  const [user, setUser] = useState({});

  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {})
      .catch((error) => {});
  };
  //   //signout
  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        // An error happened.
      });
  };

  //auth change
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
    }
  });
  //signin]

  return { signInWithGoogle, user, logOut };
};
export default useFirebase;
