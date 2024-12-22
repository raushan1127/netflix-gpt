import React, { useState } from 'react'
import Header from './Header';

const Login = () => {
   const [signIn, setsignIn] = useState(true);
   const toggleSignIn = () => {
    setsignIn(!signIn);
   }

  return (
    <div>
        <Header />
        <div className='absolute'>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/150c4b42-11f6-4576-a00f-c631308b1e43/web/IN-en-20241216-TRIFECTA-perspective_915a9055-68ad-4e81-b19a-442f1cd134dc_small.jpg' alt='back_image'>
            </img>
        </div>
        <form className='absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 bg-opacity-80 text-white rounded-lg'>
        <h1 className='font-bold text-3xl py-4'>{signIn ? "Sign In":"Sign Up"}</h1>
       { !signIn && <input type='text' placeholder='Full Name' className=' bg-blue-100 p-4 my-4 w-full rounded-lg '></input>}
            <input type='text' placeholder='Email Address' className=' bg-blue-100 p-4 my-4 w-full rounded-lg '></input>
            <input type='password' placeholder='password' className='bg-blue-100 p-4 my-4 w-full rounded-lg'></input>
            <button className='bg-red-600 font-bold p-4 my-4 w-full rounded-lg'>{signIn ? "Sign In":"Sign Up"}</button> 
            <div className='flex py-4 '>
            <p className='mx-2'>{!signIn ? "Already Registered ?" : "New To Netflix ?"}</p>
            <p className='font-bold cursor-pointer' onClick={toggleSignIn}>{!signIn ? "Sign In" : "Sign Up"}</p>
            </div>                 
        </form>
    </div>
  )
}

export default Login;