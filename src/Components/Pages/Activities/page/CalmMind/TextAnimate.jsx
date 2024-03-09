import React from 'react'
import { useEffect, useState, useContext } from 'react'
import { MyContext } from './CalmMind';


function TextAnimate() {
    const textArr = ["BREATHE IN", "HOLD", "BREATHE OUT"];
    const [text, setText] = useState(textArr[0])
    let {state, restart } = useContext(MyContext);    

    

    useEffect(()=>{
        let interval;
        let i = 1;
        if(state){
            interval = setInterval(()=>{
                setText(textArr[i])
                i = (i + 1) % textArr.length;
            }, 4000)
        }

        if(restart){
            console.log(restart);
            clearInterval(interval)
            setText(textArr[0])
            i = 0;
        }

        return (()=> clearInterval(interval))
    }, [state, restart])



    return (
        <div className='font-bold text-2xl bg-white/40 backdrop-filter backdrop-blur-lg ml-10 py-2 w-48 text-center rounded-lg shadow-md sm:mr-0 mr-10' id='animateText'>
            {text}
        </div>
    )
}

export default TextAnimate
