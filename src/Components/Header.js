import React from 'react'
import { auth } from "../utils/firebase"
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { removeUSer } from '../utils/userSlice';
import { LOGO } from '../utils/constants';


const Header = () => {

const dispatch = useDispatch()
const navigate = useNavigate();

const handlesignout = () => {

signOut(auth).then(() => {
}).catch((error) => {
navigate("/error ")
    
});
};

useEffect (() => {
const unsubscribe = onAuthStateChanged(auth, (user) => {
if (user) {
 const {uid, email, displayName} = user;
 dispatch (addUser({uid: uid, email: email, displayName: displayName }));
 navigate("/browse")
 }
else 
{
 dispatch(removeUSer());
 navigate("/")
}
});
//unsubcribe when component unmounts 
return () => unsubscribe()
 }, [])



  return (
    <div className=' w-screen absolute p-4  bg-gradient-to-b from-black absolute z-10 flex justify-between'>
        <img className='w-44' src={LOGO}></img>
        <div>
          <button onClick={handlesignout} className='  p-4 bg-red-700 m-4 content-center text-white font-bold rounded-lg hover:bg-red-800 shadow-lg'>sign out </button>
        </div>
    </div>
  )
}

export default Header