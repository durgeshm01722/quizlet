import Image from 'next/image'
import React from 'react';
import { useRouter } from 'next/router'
import { useState } from 'react';
import { useEffect } from 'react';

export default function home() {
    const router = useRouter();
    const [username, setUserName] = useState("");

    useEffect(() => {
        setUserName(localStorage.getItem("username"));
    }, [])

    return (
        <div className='h-[2400px] bg-[#021622] flex flex-col items-center justify-start'>
            <div className='h-[800px] w-[100%] bg-[#0d1525] pt-20'>
                <div className='flex-r-center h-[100%] gap-[40%]'>
                    <div className='flex flex-col justify-start text-white' data-aos="fade-right" data-aos-duration="1000">
                        <p className='text-white text-[50px] font-semibold'>Quizlet</p>
                        <p className='text-gray-400 font-semibold text-[30px]'>Find the perfect quizzes here!</p>
                        <button className='primary-btn w-[170px] mt-4' onClick={() => username ? router.push("/categories") : router.push("/login")}>Browse categories</button>
                    </div>
                    <Image src={require("../assets/logo.png")} className='h-[200px] w-[200px]' data-aos="fade-left" data-aos-duration="1000"></Image>
                </div>
            </div>
            <div className='h-[800px] w-[100%] bg-[#111c31] pt-20'>
                <div className='flex-r-center h-[100%] gap-[25%]' data-aos="fade-up" data-aos-duration="1000">
                    <Image src={require("../assets/categories.png")} className='h-[200px] w-[200px]'></Image>
                    <div className='flex flex-col justify-start text-white w-[40%]'>
                        <p className='text-white text-[40px] font-semibold w-fit'>Browse over 5+ quiz categories</p>
                        <p className='text-gray-400 font-semibold text-[20px] h-fit w-fit'>Select from categories like General Knowledge, Sports, Geography, History, Politics and Art</p>
                    </div>
                </div>
            </div>
            <div className='h-[800px] w-[100%] bg-[#0d1525] pt-20'>
                <div className='flex-r-center h-[100%] gap-[25%]' data-aos="fade-up" data-aos-duration="1000">
                    <div className='flex flex-col justify-start text-white w-[40%]'>
                        <p className='text-white text-[40px] font-semibold w-fit'>Choose your difficulty</p>
                        <p className='text-gray-400 font-semibold text-[20px] h-fit w-fit'>Select between difficulty that best suits you</p>
                    </div>
                    <Image src={require("../assets/difficulty.png")} className='h-[200px] w-[200px]'></Image>
                </div>
            </div>
        </div>
    )
}
