import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/router'


export default function categories() {
    const [category, setCategory] = useState({ quantity: 0, type: 0, difficulty: "", qtype: "" });
    const router = useRouter();

    return (
        <div className='h-[900px] bg-[#021622] flex-c-center'>
            <div className='text-white w-[23%] flex-c-center border-0 border-gray-700 rounded p-8'>
                <p className='text-[35px] font-semibold w-[100%] text-center mb-8'>Categories</p>
                <div className='flex flex-col justify-start w-[100%]'>
                    <label className='mb-2'>Select quantity: </label>
                    <select required className='block h-9 w-[100%] outline-none rounded p-2 text-xs mt-1 cursor-pointer bg-[#224459]' onChange={(e) => { setCategory({ ...category, quantity: e.target.value }) }}>
                        <option value="none" selected disabled hidden>Select an Option</option>
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                        <option value={30}>30</option>
                        <option value={40}>40</option>
                        <option value={50}>50</option>
                    </select>
                </div>
                <div className='flex flex-col justify-start mt-8 w-[100%]'>
                    <label className='mb-2'>Select type: </label>
                    <select required className='block h-9 w-[100%] outline-none rounded p-2 text-xs mt-1 cursor-pointer bg-[#224459]' onChange={(e) => { setCategory({ ...category, type: e.target.value }) }}>
                        <option value="none" selected disabled hidden>Select an Option</option>
                        <option value={9}>General Knowledge</option>
                        <option value={21}>Sports</option>
                        <option value={22}>Geography</option>
                        <option value={23}>History</option>
                        <option value={24}>Politics</option>
                        <option value={25}>Art</option>
                    </select>
                </div>
                <div className='flex flex-col justify-start mt-8 w-[100%]'>
                    <label className='mb-2'>Select difficulty: </label>
                    <select required className='block h-9 w-[100%] outline-none rounded p-2 text-xs mt-1 cursor-pointer bg-[#224459]' onChange={(e) => { setCategory({ ...category, difficulty: e.target.value }) }}>
                        <option value="none" selected disabled hidden>Select an Option</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </div>
                <div className='flex flex-col justify-start mt-8 w-[100%]'>
                    <label className='mb-2'>Select questions type: </label>
                    <select required className='block h-9 w-[100%] outline-none rounded p-2 text-xs mt-1 cursor-pointer bg-[#224459]' onChange={(e) => { setCategory({ ...category, qtype: e.target.value }) }}>
                        <option value="none" selected disabled hidden>Select an Option</option>
                        <option value="mcq">MCQ's</option>
                        <option value="match">Match the pair</option>
                    </select>
                </div>
                <div className='flex flex-col justify-start my-16 w-[100%]'>
                    <button className='green-btn w-[100%]' onClick={() => {
                        if (category.type && category.quantity && category.difficulty && category.qtype === "mcq") {
                            router.push({
                                pathname: "/quiz",
                                query: category
                            })
                        }
                        else if (category.type && category.quantity && category.difficulty && category.qtype === "match") {
                            router.push({
                                pathname: "/match",
                                query: {
                                    quantity: 7,
                                    type: null,
                                    difficulty: "Easy",
                                    qtype: "match"
                                }
                            })
                        }
                        else {
                            alert("Please choose your categories!");
                        }
                    }}>Start quiz</button>
                </div>
            </div>
        </div>
    )
}
