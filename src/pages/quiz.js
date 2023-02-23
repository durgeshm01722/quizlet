import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

var answers = [];

export default function quiz() {
    const [name, setName] = useState("");
    const [questions, setQuestions] = useState([]);
    const [stats, setStats] = useState({ correct: 0, incorrect: 0 });

    const router = useRouter();

    const { quantity, type, difficulty } = router.query;

    const getQuestions = async () => {
        const res = await axios.get(`https://opentdb.com/api.php?amount=${quantity}&category=${type}&difficulty=${difficulty.toLowerCase()}&type=multiple`);
        setQuestions(res.data.results);
        answers = [];
    }

    const handleClick = (e, key) => {
        answers[key] = e.target.value;
    }

    const calculate = () => {
        let count = 0;
        for (let i = 0; i < answers.length; i++) {
            if (answers[i] === questions[i].correct_answer) {
                count++;
            }
        }
        setStats({ correct: count, incorrect: quantity - count });
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        setName(localStorage.getItem("name"));
        if (router.isReady) {
            getQuestions();
        }
    }, [router.isReady]);

    return (
        <div className='h-[1800px] bg-[#021622] flex-c-center'>
            {quantity && type && difficulty &&
                <>
                    <p className='text-white text-[40px]'>{`Hey ${name}!`}</p>
                    <div className='flex flex-row w-[70%] mt-8 rounded py-4'>
                        <div className='flex flex-col justify-start items-start w-[50%] gap-4'>
                            <p className='text-white text-[20px]'>Total questions: {quantity}</p>
                            <p className='text-white text-[20px]'>Difficulty: {difficulty.toUpperCase()}</p>
                        </div>
                        <div className='flex flex-col justify-start items-end w-[50%] gap-4'>
                            <p className='text-green-500 text-[20px]'>Correct: {stats.correct}</p>
                            <p className='text-red-500 text-[20px]'>Incorrect: {stats.incorrect}</p>
                        </div>
                    </div>

                    <div className='h-[70%] flex flex-col border-[1px] border-gray-700 w-[70%] mt-4 rounded overflow-y-scroll p-8'>
                        <div>
                            {
                                questions.map((item, key) => {
                                    return (
                                        <div key={key} className='flex flex-col justify-start items-start border-[1px] border-gray-800 h-[300px] w-[100%] my-8 rounded p-[3%]'>
                                            <p className='text-white mb-6'>{item.question}</p>
                                            <label htmlFor={`options${key}`} className="text-white">
                                                <input type="radio" value={item.incorrect_answers[0]} name={`options${key}`} className='m-4' onChange={(e) => handleClick(e, key)} />{item.incorrect_answers[0]}
                                            </label>
                                            <label htmlFor={`options${key}`} className="text-white">
                                                <input type="radio" value={item.incorrect_answers[0]} name={`options${key}`} className='m-4' onChange={(e) => handleClick(e, key)} />{item.incorrect_answers[1]}
                                            </label>
                                            <label htmlFor={`options${key}`} className="text-white">
                                                <input type="radio" value={item.correct_answer} name={`options${key}`} className='m-4' onChange={(e) => handleClick(e, key)} />{item.correct_answer}
                                            </label>
                                            <label htmlFor={`options${key}`} className="text-white">
                                                <input type="radio" value={item.incorrect_answers[0]} name={`options${key}`} className='m-4' onChange={(e) => handleClick(e, key)} />{item.incorrect_answers[2]}
                                            </label>
                                        </div>
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
