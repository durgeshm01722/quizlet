import Link from 'next/link';
import React from 'react';
import { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { UserContext } from '@/pages/_app';

export default function login() {
    const [userData, setUserData] = useState({ username: "", password: "" });
    const router = useRouter();
    const user = useContext(UserContext);

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setUserData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    const loginUser = () => {
        if (userData.username && userData.password) {
            if (userData.username === localStorage.getItem("username") && userData.password === localStorage.getItem("password")) {
                alert("Logged in successfully!");
                user.toggleLoggedin();
                router.push("/home");
            }
            else {
                alert("Incorrect username and password!");
            }
        }
        else {
            alert("Enter all fields!");
        }
    }

    return (
        <div className='h-[900px] bg-[#021622] flex-c-center'>
            <div className='text-white w-[23%] flex-c-center border-[1px] border-gray-700 rounded p-8'>
                <p className='text-[35px] font-semibold w-[100%] text-center mb-16'>Login</p>
                <div className='flex flex-col justify-start w-[80%]'>
                    <label className='mb-2'>Username: </label>
                    <input type="text" className='bg-[#224459] rounded-sm h-[35px] w-[100%] pl-2' value={userData.username} name="username" onChange={handleChange}></input>
                </div>
                <div className='flex flex-col justify-start my-8 w-[80%]'>
                    <label className='mb-2'>Password: </label>
                    <input type="password" className='bg-[#224459] rounded-sm h-[35px] w-[100%] pl-2' value={userData.password} name="password" onChange={handleChange}></input>
                </div>
                <div className='flex flex-col justify-start w-[80%]'>
                    <label className='text-sm'>New to Quizlet?</label>
                    <Link href="/signup" className='text-sm text-blue-500'>Sign up</Link>
                </div>
                <div className='flex flex-col justify-start my-6 w-[80%]'>
                    <button className='green-btn w-[100%]' onClick={loginUser}>Login</button>
                </div>
            </div>
        </div>
    )
}
