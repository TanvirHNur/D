import { useEffect, useState } from "react";
import initializeFirebaseAuth from "../Pages/Login/firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { set } from "date-fns";

initializeFirebaseAuth();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true)

    const auth = getAuth();

    const registerUser = (email, password) => {
      setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  })
  
  .finally( () => setIsLoading(false));
    };

    const logIn = (email, password) => {
      setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  })
  .finally( () => setIsLoading(false));
    }

    const logOut = () => {
      setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally( () => setIsLoading(false));
    };



    //observer user state
    useEffect( () => {
      const unsubscribe =  onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
              // ...
            } else {
              // User is signed out
              setUser({})
            }
          })
           setIsLoading(false)
          return () => unsubscribe;
    } , [])

    return { 
        user,
        registerUser,
        logIn,
        logOut
    }
}

export default useFirebase;