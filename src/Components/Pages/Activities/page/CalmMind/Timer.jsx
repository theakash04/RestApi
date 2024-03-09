import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import './Music.css'

function Timer({ fetchState, restart }) {
    const [value, setValue] = useState(300)
    const [isRunning, setIsRunning] = useState(false);


    function StartTimer() {
        setIsRunning(true);
        fetchState(true);
    }

    function pauseTimer() {
        setIsRunning(false);
        fetchState(false);
    }

    function restartTimer() {
        setValue(300);
        setIsRunning(true);
        fetchState(true);
        restart(true);
    }

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                restart(false);
                setValue(prevValue => (prevValue > 0 ? prevValue - 1 : 0));
            }, 1000);
        }


        // Clear interval when component unmounts
        return () => clearInterval(interval);
    }, [isRunning]);

    const minutes = Math.floor(value / 60);
    const seconds = value % 60;
    const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;


    return (
        <div className='w-44'>
            <CircularProgressbar
                value={value / 300 * 100}
                text={formattedTime}
                strokeWidth={7}
                styles={buildStyles({
                    pathColor: "#3DAC78",
                    textColor: '#32CD32',
                })}
            />

            <div className='flex items-center justify-center gap-6 pt-5'>
                {!isRunning ?
                    <button className='hover:bg-white/80 transition-all duration-150 ease-in-out bg-white/40 backdrop-filter backdrop-blur-md p-3 rounded-full shadow-lg relative' onClick={StartTimer} id='play'>
                        <PlayArrowIcon sx={{ fontSize: "30px" }} />
                        <div className='dark:bg-white dark:text-black bg-black text-white px-3 rounded-md py-1 -bottom-11 right-0.5' id='icon1'>
                            <p>Play</p>
                        </div>
                    </button> :
                    <button onClick={pauseTimer} className=' hover:bg-white/80 transition-all duration-150 ease-in-out bg-white/40 backdrop-filter backdrop-blur-md p-3 rounded-full shadow-lg relative' id='pause'>
                        <PauseIcon sx={{ fontSize: "30px" }} />
                        <div className='dark:bg-white dark:text-black bg-black text-white px-3 rounded-md py-1 -bottom-11 -right-2' id='icon2'>
                            <p>Pause</p>
                        </div>
                    </button>}
                <button onClick={restartTimer} className='hover:bg-white/80 transition-all duration-150 ease-in-out bg-white/40 backdrop-filter backdrop-blur-md p-3 rounded-full shadow-lg relative' id='restart'>
                    <RestartAltIcon sx={{ fontSize: "30px" }} />
                    <div className='dark:bg-white dark:text-black bg-black text-white px-3 rounded-md py-1 -bottom-11 -right-2' id='icon3'>
                        <p>Restart</p>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default Timer
