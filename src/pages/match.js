import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import data from "../data/data.json"
import SingleQuestion from '@/components/SingleQuestion';

var totalAnswers = [[4, 4, 4, 4],
[4, 4, 4, 4],
[4, 4, 4, 4],
[4, 4, 4, 4],
[4, 4, 4, 4],
[4, 4, 4, 4],
[4, 4, 4, 4],
];

export default function match() {
    const [name, setName] = useState("");
    const [stats, setStats] = useState({ correct: 0, incorrect: 0 });

    const router = useRouter();

    const { quantity, type, difficulty } = router.query;

    const handleClick = (data2, key) => {
        totalAnswers[key] = data2;
    }

    const calculate = () => {
        let count = 0;
        console.log(totalAnswers.length);
        for (let i = 0; i < totalAnswers.length; i++) {
            if ((data[i].rhs[totalAnswers[i][0]] === data[i].rhs[0]) && (data[i].rhs[totalAnswers[i][1]] === data[i].rhs[1]) && (data[i].rhs[totalAnswers[i][2]] === data[i].rhs[2]) && (data[i].rhs[totalAnswers[i][3]] === data[i].rhs[3])) {
                count++;
            }
        }
        for (let i = 0; i < totalAnswers.length; i++) {
            console.log([data[i].rhs[totalAnswers[i][0]], data[i].rhs[totalAnswers[i][1]], data[i].rhs[totalAnswers[i][2]], data[i].rhs[totalAnswers[i][3]]]);
        }
        setStats({ correct: count, incorrect: quantity - count });
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        setName(localStorage.getItem("name"));
        if (router.isReady) {
        }
    }, [router.isReady]);

    return (
        <div className='h-[1800px] bg-[#021622] flex-c-center'>
            {quantity && difficulty &&
                <>
                    <p className='text-white text-[40px]'>{`Hey ${name}!`}</p>
                    <div className='flex flex-row w-[70%] mt-8 rounded py-4'>
                        <div className='flex flex-col justify-start items-start w-[50%] gap-4'>
                            <p className='text-white text-[20px]'>Total questions: {data.length}</p>
                            <p className='text-white text-[20px]'>Difficulty: EASY</p>
                        </div>
                        <div className='flex flex-col justify-start items-end w-[50%] gap-4'>
                            <p className='text-green-500 text-[20px]'>Correct: {stats.correct}</p>
                            <p className='text-red-500 text-[20px]'>Incorrect: {stats.incorrect}</p>
                        </div>
                    </div>

                    <div className='h-[70%] flex flex-col border-[1px] border-gray-700 w-[70%] mt-4 rounded overflow-y-scroll p-8'>
                        <div>
                            {
                                data.map((item, key) => {
                                    return (
                                        <SingleQuestion key={item.questionID} data={item} handleClick={handleClick} answer={totalAnswers[item.questionID]}></SingleQuestion>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <button className='green-btn w-[150px] mt-8' onClick={() => calculate()}>Submit Quiz</button>
                </>
            }
        </div>
    )
}
