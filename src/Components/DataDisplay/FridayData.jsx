import React, {useRef, useEffect} from 'react'
import Avatar from '@mui/material/Avatar';
import Typed from 'typed.js';


function FridayData({Aidata}) {


    const TypedRef = useRef(null);

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
            <div className="flex items-center gap-2 overflow-x-hidden w-full">
                <Avatar
                    sx={{
                        bgcolor: "green",
                        width: "30px",
                        height: "30px",
                        fontSize: "17px",
                        textAlign: "center",
                    }}
                >
                    F
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
