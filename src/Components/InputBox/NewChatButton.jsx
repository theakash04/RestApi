import React from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';

function NewChatButton({onClick}) {
    return (
        <button className='mx-3 rounded-full' onClick={onClick}>
            <AddCircleIcon sx={{ color: "black" , fontSize: "34px"}} className='hover:text-black/80 transition-colors ease-in-out'/>
        </button>
    )
}

export default NewChatButton
