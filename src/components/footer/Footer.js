import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <div className='bg-[#00243b]'>
            <div className=' w-[100%] h-[300px] bg-none bg-opacity-10 flex flex-col justify-center items-center backdrop-blur-3xl'>
                <div className='w-[100%] text-white flex flex-row justify-center items-center my-6 gap-52'>
                    <div className='h-[200px] w-[20%]'>
                        <div className='flex flex-row items-center'>
                            <Image src={require('../../assets/logo.png')} width={40} height={40} className='mr-4' alt="logo"></Image>
                            <p className='text-[30px] font-semibold text-gray-300'>Quizlet</p>
                        </div>
                    </div>
                    <div className='h-[200px] w-[15%] text-gray-400'>
                        <div className='flex flex-row items-center mb-4'>
                            <p className='text-md font-bold'>Pages</p>
                        </div>
                        <div className='text-sm gap-2 flex flex-col justify-center'>
                            <Link href='/home' className='w-fit'>Home</Link>
                            <Link href='/about' className='w-fit'>About Quizlet</Link>
                            <Link href='/contactus' className='w-fit'>Contact Us</Link>
                        </div>
                    </div>

                    <div className='h-[200px] w-[20%] text-gray-400'>
                        <div className='flex flex-row items-center mb-4'>
                            <p className='text-md font-bold'>Contact</p>
                        </div>
                        <div className='text-xs gap-2 flex flex-col justify-center'>
                            <a href='mailto:durgeshmahajan1722@gmail.com' target="_blank" className='w-fit'>durgeshmahajan1722@gmail.com</a>
                            <a href='https://www.linkedin.com/in/durgesh-mahajan-99bab0212/' target="_blank" className='w-fit'>LinkedIn</a>
                            <a href='https://github.com/durgeshm01722' target="_blank" className='w-fit'>Github</a>
                            <a href='https://www.instagram.com/durgeshm01722/' target="_blank" className='w-fit'>Instagram</a>
                        </div>
                    </div>
                </div>
                <div className='text-xs text-gray-400'>
                    <p>Copyright &#169; 2023 Quizlet | All rights reserved</p>
                </div>
            </div>
        </div>
    )
}
