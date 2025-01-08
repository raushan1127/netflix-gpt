import React, { useState } from 'react'
import Header from './Header';
import { useRef } from 'react';
import { checkvaliddata } from '../utils/validate';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';

const Login = () => {


   const [signIn, setsignIn] = useState(true);
   const [errormessage, seterrormessage] = useState(null);
   const navigate = useNavigate();
   const dispatch = useDispatch();

 

   const toggleSignIn = () => {
    setsignIn(!signIn);
   }
   
    const email = useRef(null)
    const password = useRef(null)
    const name = useRef(null)

   const handleclickbutton =() => {
    
  const message = checkvaliddata(email.current.value, password.current.value);
  seterrormessage(message);
  if(message) return;
   
  if(!signIn) {

    //signup logic
    
    createUserWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name.current.value,
        })
          .then(() => {
            const { uid, email, displayName } = auth.currentUser;
            dispatch(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName,
              })
            );
          })
          .catch((error) => {
            seterrormessage(error.message);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        seterrormessage(errorCode + "-" + errorMessage);
      });
  }
  else {   
//sign In logic
signInWithEmailAndPassword(
  auth,
  email.current.value,
  password.current.value
)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrormessage(errorCode + "-" + errorMessage);
  });
}
}
   

  return (
    <div>
        <Header />
        <div className='absolute'>
            <img className="h-screen object-cover md:w-screen" src='https://assets.nflxext.com/ffe/siteui/vlv3/150c4b42-11f6-4576-a00f-c631308b1e43/web/IN-en-20241216-TRIFECTA-perspective_915a9055-68ad-4e81-b19a-442f1cd134dc_small.jpg' alt='back_image'>
            </img>
        </div>
        <form onClick={(e) => e.preventDefault()} className='absolute  ml-14 w-3/4 md:w-3/12 p-12 bg-black my-44 md:my-36  md:mx-auto right-0 left-0 bg-opacity-80 text-black rounded-lg'>
        <h1 className='font-bold text-3xl py-4 text-white'>{signIn ? "Sign In":"Sign Up"}</h1>
       { !signIn && <input ref={name} type='text' placeholder='Full Name' className=' bg-blue-100 p-4 my-4 w-full rounded-lg '></input>}
            <input ref={email} type='text' placeholder='Email Address' className=' bg-blue-100 p-4 my-4 w-full rounded-lg '></input>
            <input ref= {password} type='password' placeholder='password' className='bg-blue-100 p-4 my-4 w-full rounded-lg'></input>
            {errormessage && <p className='py-2 my-2 text-red-800 font-bold'>{errormessage}</p>}
            <button onClick={handleclickbutton} className='bg-red-600 font-bold p-4 my-4 w-full rounded-lg text-white'>{signIn ? "Sign In":"Sign Up"}</button> 
            <div className='flex py-4 '>
            <p className='mx-2 text-white'>{!signIn ? "Already Registered ?" : "New To Netflix ?"}</p>
            <p className='font-bold cursor-pointer text-white' onClick={toggleSignIn}>{!signIn ? "Sign In" : "Sign Up"}</p>
            </div>                 
        </form>
    </div>
  )
}

export default Login;