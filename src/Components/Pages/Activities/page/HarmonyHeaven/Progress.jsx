import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

function Progress({progress, duration = 0, state}) {
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);
    const [songDuration, setSongDuration] = useState(duration)
    
    useEffect(()=>{
        const interval =setInterval(()=>{
            if(state){
                if(songDuration > 0){
                    setSongDuration(songDuration - 1);
                }
            }
        }, 1000)

        return () => clearInterval(interval)
    },[songDuration, state])

    useEffect(()=>{
        setSongDuration(duration);
    },[duration])

    useEffect(()=>{
        const min = Math.floor(songDuration / 60);
        const sec = songDuration % 60;
        setMinute(min);
        setSecond(sec);
    },[songDuration])


    return (
        <div className='w-full items-center flex justify-center gap-3'>
            <div className='sm:w-4/6 w-1/2 h-2 bg-[#ccc] rounded-md '>
                <div className='h-full bg-[#FFA500] transition-all duration-75 ease-in rounded-md' style={{width: progress ?? "0%"}}/>
            </div>
            <div className='font-semibold'>
            {`${minute < 10 ? "0" + minute : minute}:${second < 10 ? "0" + second : second}` }
            </div>
        </div>
    )
}

export default Progress
