import React, {useRef, useEffect} from 'react'
import Avatar from '@mui/material/Avatar';
import Typed from 'typed.js';
import { frame1 } from '../../assets/blenderPng/Animate';


function FridayData({Aidata}) {


    const TypedRef = useRef(null);

    // const lines = Aidata.split("\n");

    useEffect(()=>{
        const typed = new Typed(TypedRef.current, {
            strings: [Aidata],
            typeSpeed: 20,
            showCursor: false,
        });

        return () =>{
            typed.destroy();
        };
    },[])

    return (
        <>  
        {/* add avtar png from blenderPng of frame3 */}
            <div className="flex items-center gap-2 overflow-x-hidden w-full">
                <Avatar
                    alt='Friday'
                    src={frame1}
                    sx={{
                        // bgcolor: "green",
                        width: "40px",
                        height: "40px",
                        fontSize: "17px",
                        textAlign: "center",
                    }}
                >
                </Avatar>
                <p className="font-bold font-mono">Friday</p>
            </div>
            <div className="py-1 pl-10 w-full mb-5">
                <p ref={TypedRef} className="text-wrap text-start font-mono" />
            </div>
        </>
    )
}

export default FridayData
