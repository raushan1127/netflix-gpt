import React, { useState } from 'react'
import { auth } from "../utils/firebase"
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANG } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import changeLanguage from "../utils/configSlice"


const Header = () => {

const dispatch = useDispatch()
const navigate = useNavigate();
const user = useSelector ((store) => store.user)
const showGptSearch = useSelector((store) => store.gpt.showGptSearch);






const handlesignout = () => {
  signOut(auth)
    .then(() => {})
    .catch((error) => {
      navigate("/error");
    });
};


useEffect (() => {
const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    const { uid, email, displayName } = user;
    dispatch(
      addUser({
        uid: uid,
        email: email,
        displayName: displayName,
      })
    );
    navigate("/browse");
  } else {
    dispatch(removeUser());
    navigate("/");
  }
});
//unsubcribe when component unmounts 
return () => unsubscribe()
 }, [])

 const handleGptSearchClick = () => {
  dispatch(toggleGptSearchView())
 }

 



  return (
    <div className=' w-screen  absolute p-4  bg-gradient-to-b from-black  z-10 flex flex-col md:flex-row justify-between'>
        <img className='w-44 mx-auto md:mx-0' src={LOGO}></img>
       {user&& (<div className=''>
    <buttton className='py-3 mx-4 px-4 rounded-lg hover: bg-blue-900 text-white cursor-pointer ' onClick={handleGptSearchClick} >
        {showGptSearch ? "Homepage" : "Gpt search"}
        </buttton>
        
        
          <button  onClick={handlesignout} className=' ml-32 md:ml-0 size-fit md:size-fit-0 md:ml-0  p-3 bg-red-700 m-4 content-center text-white font-bold rounded-lg hover:bg-red-800 shadow-lg'>
            sign out 
            </button>
        </div>)}
        
        
    </div>
  )
}

export default Header;