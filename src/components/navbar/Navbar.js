import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { UserContext } from '@/pages/_app';
import { useContext } from 'react';

export default function Navbar() {
  const [username, setUserName] = useState("");
  const router = useRouter();
  const user = useContext(UserContext);

  useEffect(() => {
    setUserName(localStorage.getItem("username"));
  }, [])

  return (
    <div className='bg-[#00243b] h-[60px] w-[100%] flex-row justify-start items-center fixed backdrop-blur-md bg-opacity-60 z-10'>
      <div className='flex flex-row justify-start items-center h-fit w-[100%] gap-[3%] mt-2 mb-2'>
        <div className='flex flex-row items-center ml-16'>
          <Image src={require('../../assets/logo.png')} width={40} height={40} className='mr-4' alt="logo"></Image>
          <p className='text-[30px] font-semibold text-gray-300'>Quizlet</p>
        </div>
        <div className='mx-[20%]'>
          <ul className='flex flex-row justify-center items-center text-gray-300 gap-20'>
            <Link href='/home'>Home</Link>
            <Link href='/about'>About Quizlet</Link>
            <Link href='/contactus'>Contact Us</Link>
          </ul>
        </div>
        <div className='w-fit'>
          {!user.loggedin ? <button className='primary-btn mr-4' onClick={() => router.push("/login")}>Login</button> : <button className='secondary-btn' onClick={() => { alert("Logged out successfully!!"); user.toggleLoggedin(); localStorage.clear(); router.push("/home"); }}>Logout</button>}
        </div>
      </div>
    </div>
  )
}
