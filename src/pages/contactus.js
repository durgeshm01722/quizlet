import Image from 'next/image'
import React from 'react'

export default function contactus() {
    return (
        <div className='h-[900px] bg-[#021622] flex flex-row items-center justify-center'>
            <div className='flex flex-col justify-center items-center h-fit w-[30%]' data-aos="fade-up" data-aos-duration="1000">
                <p className='text-white text-[27px] font-semibold'>Website developed by -</p>
                <p className='text-white text-[32px] font-semibold mt-2'>Durgesh Mahajan</p>
                <p className='text-gray-400 font-semibold text-[30px] mt-8'>Connect with me</p>
                <div className='flex-r-center gap-[30px] mt-6'>
                    <a href="mailto:durgeshmahajan1722@gmail.com" target="_blank"><Image src={require("../assets/gmail.png")} className='w-[40px] h-[40px]'></Image>
                    </a>
                    <a href="https://www.linkedin.com/in/durgesh-mahajan-99bab0212/" target="_blank"><Image src={require("../assets/linkedin.png")} className='w-[40px] h-[40px]'></Image>
                    </a>
                    <a href="https://github.com/durgeshm01722" target="_blank"><Image src={require("../assets/github.png")} className='w-[40px] h-[40px]'></Image>
                    </a>
                    <a href="https://www.instagram.com/durgeshm01722/" target="_blank"><Image src={require("../assets/instagram.png")} className='w-[40px] h-[40px]'></Image>
                    </a>
                </div>
            </div>
        </div>
    )
}
