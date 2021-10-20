import { getAuth, signInWithPopup,onAuthStateChanged,signOut,GithubAuthProvider, createUserWithEmailAndPassword,signInWithEmailAndPassword,sendEmailVerification,sendPasswordResetEmail,GoogleAuthProvider ,updateProfile} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../pages/Login/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [users, setUsers] = useState({});
  const [error,setError]=useState("");
  const[isLoading,setIsLoading]=useState(true);
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();


  const signInWithGoogle = () => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUsers(user);
        setError("");
      })
      .finally(()=>{setIsLoading(false)});
      // .catch((error) => {
      //   const errorCode = error.code;
      //   const errorMessage = error.message;
      //   console.log(errorCode, errorMessage);
      //   setError(errorCode,errorMessage);
      //   setUsers({});
      // });
      
     
  };
  const signInWithGithub=()=>{
    setIsLoading(true);
    signInWithPopup(auth, githubProvider)
  .then((result) => {
    const credential = GithubAuthProvider.credentialFromResult(result);
    const user = result.user;
    setUsers(user);
    setError("")
   })
   .finally(()=>{setIsLoading(false)});
  //.catch((error) => {
  //   // Handle Errors here.
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   // The email of the user's account used.
  //   const email = error.email;
  //   // The AuthCredential type that was used.
  //   const credential = GithubAuthProvider.credentialFromError(error);
  //   // ...
  // });
  }
  const registerWithEmailAndPassword=(name,email,password)=>{
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      setUsers(user);
      verifyUserEamail();
      updateUserName(name);
      setError("");
      alert("Please Go And Check YOur Gmail Account For Verify Your Account")
    })
    .finally(()=>{
      setIsLoading(false);

    })
  
  };
  const updateUserName=(name)=>{
    updateProfile(auth.currentUser, {
        displayName: name
      }).then(() => {
      }).catch((error) => {
          setError(error)
      });
  }

  const resetPassword=(email)=>{
    sendPasswordResetEmail(auth, email)
    .then(() => {
      alert("Please check your gmail account for reset your password")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setError(errorCode,errorMessage)
      // ..
    });
  }
  const loginWithEmailAndPassword=(email,password)=>{
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      setUsers(user);
      setError("");
      
    })
   .finally(()=>{
     setIsLoading(false);
   })
  };


  const verifyUserEamail=()=>{
    sendEmailVerification(auth.currentUser)
    .then(() => {
      // Email verification sent!
      // ...
    });
  }
  useEffect(()=>{
    const unsubscribed=onAuthStateChanged(auth, (user) => {
        if (user) {
          setUsers(user);
        } else {
          setUsers({});
        }
        setIsLoading(false)
      });
      return ()=>unsubscribed;
  },[]);

  const logOut=()=>{
    setIsLoading(true);
    signOut(auth).then(() => {
        setUsers({});
      })
      .finally(()=>{setIsLoading(false)})
  }
  return {
      users,
      error,
      isLoading,
      signInWithGoogle,
      resetPassword,
      registerWithEmailAndPassword,
      loginWithEmailAndPassword,
      signInWithGithub,
      logOut
  }
};
export default useFirebase;
