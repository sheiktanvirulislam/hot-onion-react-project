import React, { useContext } from 'react';
import { userLoginData } from '../../App';
import { firebaseConfig } from '../firebaseConfig';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import { useHistory, useLocation } from 'react-router';
const app = initializeApp(firebaseConfig);
const Login = () => {
    const[loginData, setLoginData] = useContext(userLoginData)
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const handleGoogleSignIn = ()=>{
        signInWithPopup(auth, provider)
        .then((result) => {
          
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          
          const user = result.user;
         
          setLoginData(user)
          history.replace(from)
          // ...
        }).catch((error) => {
         
          const errorCode = error.code;
          const errorMessage = error.message;
          
          const email = error.email;
          
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
          
    }
    console.log(loginData)
    return (
        <div>
            <button className="btn btn-primary" onClick={handleGoogleSignIn}> 
                Sign In By Google
            </button>
        </div>
    );
};

export default Login;