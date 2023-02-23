import Image from 'next/image'
import React from 'react'

export default function about() {
  return (
    <div className='h-[900px] bg-[#021622] flex flex-row items-center justify-center'>
        <div className='flex flex-col justify-center items-center h-fit w-[30%]' data-aos="fade-up" data-aos-duration="1000">
            <Image src={require("../assets/logo.png")} className='h-[200px] w-[200px]'></Image>
            {/* <div className='flex flex-col justify-start text-white'> */}
            <p className='text-white text-[50px] font-semibold mt-10'>Quizlet</p>
            <p className='text-gray-400 font-semibold text-[30px]'>Find the perfect quizzes here!</p>
            <p className='text-gray-500 font-semibold text-[20px] text-center'>A one stop platform where you can find questions from categories like General Knowledge, Sports, Geography, History, Politics and Art. Also, select between difficulty levels that best suits you.</p>
            {/* </div> */}
        </div>
    </div>
  )
}
