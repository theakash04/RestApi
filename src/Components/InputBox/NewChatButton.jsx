import React from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';

function NewChatButton({onClick}) {
    return (
        <button className='mx-3 rounded-full' onClick={onClick}  type='button'>
            <AddCircleIcon sx={{ fontSize: "34px"}} className='dark:text-white text-black hover:text-black/80 dark:hover:text-white/80 transition-colors ease-in-out'/>
        </button>
    )
}

export default NewChatButton
