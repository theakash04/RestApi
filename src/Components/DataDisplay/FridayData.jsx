import React from 'react'
import Avatar from '@mui/material/Avatar';
import { useRef, useState, useEffect } from 'react';

function FridayData({AIdata}) {

    
    // const index = useRef(0);

    // const [currentText, setCurentText] = useState('');

    // useEffect(()=>{
    //     if(typeof AIdata === 'string'){
    //         const timeOut = setTimeout(()=>{
    //             index.current += 1;
    //             setCurentText((value) => value + AIdata.charAt(index.current));
    //         }, 10);
    
    //         return ()=> {
    //             clearTimeout(timeOut);
    //         }
    //     }
    // }, [currentText, AIdata])
    return (
        <div>
            <div className='flex items-center gap-2 overflow-x-hidden w-full'>
                <Avatar sx={{ bgcolor: 'green', width: "30px", height: "30px", fontSize: "17px", textAlign: "center"}}>F</Avatar>
                <p className='font-bold font-mono'>Friday</p>
            </div>
            <div className='py-2 pl-10 w-full'>
                <p className='text-wrap text-start font-mono'>{AIdata}</p>
            </div>
        </div>
    )
}

export default FridayData
