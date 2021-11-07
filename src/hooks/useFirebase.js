import { useEffect, useState } from "react";
import initializeFirebaseAuth from "../Pages/Login/firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, updateProfile,  signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { display } from "@mui/system";

initializeFirebaseAuth();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');

    const auth = getAuth();
    const GoogleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, histroy) => {
      setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {

    const newUser = {email, displayName: name};
    setUser(newUser);
    // Signed in 
    setAuthError('');
    //send data to firebase
    const auth = getAuth();
updateProfile(auth.currentUser, {
  displayName: name
}).then(() => {
  // Profile updated!
  // ...
}).catch((error) => {
  // An error occurred
  // ...
});

    histroy.replace('/')

  })
  .catch((error) => {
    setAuthError(error.message);
    // ..
  })
  
  .finally( () => setIsLoading(false));
    };

    const logIn = (email, password, location, histroy) => {
      setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const destination = location?.state?.from || '/';
    histroy.replace(destination);
    setAuthError('');

  })
  .catch((error) => {
    setAuthError(error.message);
  })
  .finally( () => setIsLoading(false));
    }


    const signWithGoogle = (location, histroy) => {
      setIsLoading(true);
      signInWithPopup(auth, GoogleProvider)
      .then((result) => {
        // const user = result.user;
        const destination = location.state.from || '/';
        histroy.replace(destination);
        setAuthError('')
        // ...
      }).catch((error) => {
        // const error = error.message;
        setAuthError(error.message);
      })
      .finally( () => setIsLoading(false));
    }

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
    } , []);
    
    const logOut = () => {
      setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally( () => setIsLoading(false));
    };

    return { 
        user,
        registerUser,
        isLoading,
        authError,
        logIn,
        signWithGoogle,
        logOut
    }
}

export default useFirebase;