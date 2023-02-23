import Link from 'next/link';
import React, { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { UserContext } from '@/pages/_app';

export default function signup() {
    const [userData, setUserData] = useState({ name: "", username: "", email: "", password: "" });
    const router = useRouter();
    const user = useContext(UserContext);

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setUserData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    const signupUser = () => {
        if (userData.name && userData.username && userData.email && userData.password) {
            localStorage.setItem("name", userData.name);
            localStorage.setItem("username", userData.username);
            localStorage.setItem("email", userData.email);
            localStorage.setItem("password", userData.password);
            alert("User created successfully");
            user.toggleLoggedin();
            router.push("/home");
        }
        else {
            alert("Enter all fields!");
        }
    }

    return (
        <div className='h-[900px] bg-[#021622] flex-c-center'>
            <div className='text-white w-[25%] flex-c-center border-[1px] border-gray-700 rounded p-8'>
                <p className='text-[35px] font-semibold w-[100%] text-center mb-8'>Signup</p>
                <div className='flex flex-col justify-start my-2 w-[80%]'>
                    <label className='mb-2'>Name: </label>
                    <input type="text" className='bg-[#224459] rounded-sm h-[35px] w-[100%] pl-2' value={userData.name} name="name" onChange={handleChange}></input>
                </div>
                <div className='flex flex-col justify-start my-2 w-[80%]'>
                    <label className='mb-2'>Username: </label>
                    <input type="text" className='bg-[#224459] rounded-sm h-[35px] w-[100%] pl-2' value={userData.username} name="username" onChange={handleChange} ></input>
                </div>
                <div className='flex flex-col justify-start my-2 w-[80%]'>
                    <label className='mb-2'>Email: </label>
                    <input type="email" className='bg-[#224459] rounded-sm h-[35px] w-[100%] pl-2' value={userData.email} name="email" onChange={handleChange} ></input>
                </div>
                <div className='flex flex-col justify-start my-2 w-[80%]'>
                    <label className='mb-2'>Password: </label>
                    <input type="password" className='bg-[#224459] rounded-sm h-[35px] w-[100%] pl-2' value={userData.password} name="password" onChange={handleChange} ></input>
                </div>
                <div className='flex flex-col justify-start w-[80%] mt-4'>
                    <label className='text-sm'>Already a user?</label>
                    <Link href="/login" className='text-sm text-blue-500'>Login</Link>
                </div>
                <div className='flex flex-col justify-start my-6 w-[80%]'>
                    <button className='green-btn w-[100%]' onClick={signupUser}>Sign up</button>
                </div>
            </div>
        </div>
    )
}
