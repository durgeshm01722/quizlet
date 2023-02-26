import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

var answers = [];
const chunk = 10;
var length = [];

export default function quiz(props) {
    const [name, setName] = useState("");
    const [questions, setQuestions] = useState([]);
    const [page, setPage] = useState(0);
    const [paginatedQuestions, setPaginatedQuestions] = useState([]);
    const [stats, setStats] = useState({ correct: 0, incorrect: 0 });

    const router = useRouter();

    const { quantity, type, difficulty } = props.query;


    const handleClick = (e, key) => {
        answers[key] = e.target.value;
    }

    const changePage = (page) => {
        setPage(page);
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
        setQuestions(props.data.results);
        answers = [];
        if (length.length !== quantity / 10) {
            for (let i = 1; i <= (quantity / 10); i++) {
                length.push(i);
            }
        }
    }, []);

    useEffect(() => {
        if (questions[0]) {
            if (router.query.quantity > 10) {
                for (let i = 0; i < (quantity / 10); i++) {
                    setPaginatedQuestions((prev) => [...prev, questions.slice(chunk * i, chunk * (i + 1))]);
                }
            }
            else {
                setPaginatedQuestions([questions]);
            }
        }
    }, [questions]);

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
                                paginatedQuestions[0] && paginatedQuestions[page].map((item, key) => {
                                    return (
                                        <div key={key} className='flex flex-col justify-start items-start border-[1px] border-gray-800 h-[300px] w-[100%] my-8 rounded p-[3%]'>
                                            <div className='flex-r-center'>
                                                <p className='text-white mb-6 mr-4'>{(key + 1) + ((page) * 10)}.</p>
                                                <p className='text-white mb-6'>{item.question}</p>
                                            </div>
                                            <label htmlFor={`options${key}`} className="text-white">
                                                <input type="radio" value={item.incorrect_answers[0]} name={`options${key}`} className='m-4' onChange={(e) => handleClick(e, ((key + 1) + ((page) * 10)) - 1)} />{item.incorrect_answers[0]}
                                            </label>
                                            <label htmlFor={`options${key}`} className="text-white">
                                                <input type="radio" value={item.incorrect_answers[0]} name={`options${key}`} className='m-4' onChange={(e) => handleClick(e, ((key + 1) + ((page) * 10)) - 1)} />{item.incorrect_answers[1]}
                                            </label>
                                            <label htmlFor={`options${key}`} className="text-white">
                                                <input type="radio" value={item.correct_answer} name={`options${key}`} className='m-4' onChange={(e) => handleClick(e, ((key + 1) + ((page) * 10)) - 1)} />{item.correct_answer}
                                            </label>
                                            <label htmlFor={`options${key}`} className="text-white">
                                                <input type="radio" value={item.incorrect_answers[0]} name={`options${key}`} className='m-4' onChange={(e) => handleClick(e, ((key + 1) + ((page) * 10)) - 1)} />{item.incorrect_answers[2]}
                                            </label>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className='flex flex-row justify-center items-center w-fit mt-8'>
                        {length.map((i, key) => {
                            return (<button key={key} className='w-[60px] h-[50px] bg-[#1e2e4d] text-white rounded mx-2' onClick={() => {
                                changePage(i - 1);
                            }}>{i}</button>)
                        })}
                    </div>
                    <button className='green-btn w-[150px] mt-8' onClick={() => calculate()}>Submit Quiz</button>
                </>
            }
        </div>
    )
}


export async function getServerSideProps(context) {
    const { quantity, type, difficulty } = context.query;
    const res = await fetch(`https://opentdb.com/api.php?amount=${quantity}&category=${type}&difficulty=${difficulty.toLowerCase()}&type=multiple`)
    const data = await res.json();
    return {
        props: { data, query: context.query }
    }
}
