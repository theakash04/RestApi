import React from 'react'
import Avatar from '@mui/material/Avatar';
import TypeIt from 'typeit-react';


function FridayData({Aidata}) {
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
                <TypeIt className="text-wrap text-start font-mono">{Aidata}</TypeIt>
            </div>
        </>
    )
}

export default FridayData
