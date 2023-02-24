import React from 'react'
import { useState } from 'react';

//const answers = [4, 4, 4, 4];

export default function SingleQuestion(props) {
    const [lhsActive, setLhsActive] = useState(0);
    const [rhsActive, setRhsActive] = useState(0);

    return (
        <div className='flex flex-col justify-start items-start border-[1px] border-gray-800 h-[380px] w-[100%] my-8 rounded p-[3%]'>
            <p className='text-white mb-6'>{props.data.question}</p>
            <div className='flex-r-center gap-0 border-0 w-[100%]'>
                <div className='flex-c-center gap-6 border-0 w-[50%]'>
                    <button className='text-white border-[1px] h-[50px] w-[150px] rounded' onClick={() => lhsActive !== 1 ? setLhsActive(1) : setLhsActive(0)} style={{ borderColor: lhsActive === 1 ? "skyblue" : "gray" }}>{props.data.lhs[0]}</button>
                    <button className='text-white border-[1px] h-[50px] w-[150px] rounded' onClick={() => lhsActive !== 2 ? setLhsActive(2) : setLhsActive(0)} style={{ borderColor: lhsActive === 2 ? "orange" : "gray" }}>{props.data.lhs[1]}</button>
                    <button className='text-white border-[1px] h-[50px] w-[150px] rounded' onClick={() => lhsActive !== 3 ? setLhsActive(3) : setLhsActive(0)} style={{ borderColor: lhsActive === 3 ? "yellow" : "gray" }}>{props.data.lhs[2]}</button>
                    <button className='text-white border-[1px] h-[50px] w-[150px] rounded' onClick={() => lhsActive !== 4 ? setLhsActive(4) : setLhsActive(0)} style={{ borderColor: lhsActive === 4 ? "dodgerblue" : "gray" }}>{props.data.lhs[3]}</button>
                </div>
                <div className='flex-c-center gap-6 border-0 w-[40%]'>
                    <p className='text-white'>1 - {4 - props.answer[0]}</p>
                    <p className='text-white'>2 - {4 - props.answer[1]}</p>
                    <p className='text-white'>3 - {4 - props.answer[2]}</p>
                    <p className='text-white'>4 - {4 - props.answer[3]}</p>
                </div>
                <div className='flex-c-center gap-6 border-0 w-[50%]'>
                    <button className='text-white border-[1px] h-[50px] w-[150px] rounded' onClick={() => {
                        rhsActive !== 1 ? setRhsActive(1) : setRhsActive(0);
                        if (lhsActive !== 0) {
                            props.answer[lhsActive - 1] = 3;
                            props.handleClick(props.answer, props.data.questionID);
                        }
                    }} style={{ borderColor: lhsActive === 1 && rhsActive === 1 ? "skyblue" : (lhsActive === 2 && rhsActive === 1 ? "orange" : (lhsActive === 3 && rhsActive === 1 ? "yellow" : (lhsActive === 4 && rhsActive === 1 ? "dodgerblue" : "gray"))) }}>{props.data.rhs[3]}</button>
                    <button className='text-white border-[1px] h-[50px] w-[150px] rounded' onClick={() => {
                        rhsActive !== 2 ? setRhsActive(2) : setRhsActive(0);
                        if (lhsActive !== 0) {
                            props.answer[lhsActive - 1] = 2;
                            props.handleClick(props.answer, props.data.questionID);
                        }
                    }} style={{ borderColor: lhsActive === 1 && rhsActive === 2 ? "skyblue" : (lhsActive === 2 && rhsActive === 2 ? "orange" : (lhsActive === 3 && rhsActive === 2 ? "yellow" : (lhsActive === 4 && rhsActive === 2 ? "dodgerblue" : "gray"))) }}>{props.data.rhs[2]}</button>
                    <button className='text-white border-[1px] h-[50px] w-[150px] rounded' onClick={() => {
                        rhsActive !== 3 ? setRhsActive(3) : setRhsActive(0);
                        if (lhsActive !== 0) {
                            props.answer[lhsActive - 1] = 1;
                            props.handleClick(props.answer, props.data.questionID);
                        }
                    }} style={{ borderColor: lhsActive === 1 && rhsActive === 3 ? "skyblue" : (lhsActive === 2 && rhsActive === 3 ? "orange" : (lhsActive === 3 && rhsActive === 3 ? "yellow" : (lhsActive === 4 && rhsActive === 3 ? "dodgerblue" : "gray"))) }}>{props.data.rhs[1]}</button>
                    <button className='text-white border-[1px] h-[50px] w-[150px] rounded' onClick={() => {
                        rhsActive !== 4 ? setRhsActive(4) : setRhsActive(0);
                        if (lhsActive !== 0) {
                            props.answer[lhsActive - 1] = 0;
                            props.handleClick(props.answer, props.data.questionID);
                        }
                    }} style={{ borderColor: lhsActive === 1 && rhsActive === 4 ? "skyblue" : (lhsActive === 2 && rhsActive === 4 ? "orange" : (lhsActive === 3 && rhsActive === 4 ? "yellow" : (lhsActive === 4 && rhsActive === 4 ? "dodgerblue" : "gray"))) }}>{props.data.rhs[0]}</button>
                </div>
            </div>
        </div>
    )
}
