import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

function Timer({fetchState, restart}) {
    const [value, setValue] = useState(300)
    const [isRunning, setIsRunning] = useState(false);


    function StartTimer(){
        setIsRunning(true);
        fetchState(true);
    }

    function pauseTimer(){
        setIsRunning(false);
        fetchState(false);
    }

    function restartTimer(){
        setValue(300);
        setIsRunning(true);
        fetchState(true);
        restart(true);
    }

    useEffect(() => {
        let interval;
        if(isRunning){
            interval = setInterval(()=>{
                restart(false);
                setValue(prevValue => (prevValue > 0 ? prevValue - 1 : 0));
            }, 1000);
        }

        if(value == 0){
            
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
                    <button className='hover:bg-white/80 transition-all duration-150 ease-in-out bg-white/40 backdrop-filter backdrop-blur-md p-3 rounded-full shadow-lg' onClick={StartTimer}>
                        <PlayArrowIcon sx={{fontSize: "30px"}}/>
                    </button>:
                    <button onClick={pauseTimer} className='hover:bg-white/80 transition-all duration-150 ease-in-out bg-white/40 backdrop-filter backdrop-blur-md p-3 rounded-full shadow-lg'>
                        <PauseIcon sx={{fontSize: "30px"}}/>
                    </button>}
                    <button onClick={restartTimer} className='hover:bg-white/80 transition-all duration-150 ease-in-out bg-white/40 backdrop-filter backdrop-blur-md p-3 rounded-full shadow-lg'>
                        <RestartAltIcon sx={{fontSize: "30px"}}/>
                    </button>
                </div>
        </div>
    )
}

export default Timer
