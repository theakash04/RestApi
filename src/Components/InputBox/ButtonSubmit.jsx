import React from 'react'
import SendIcon from '@mui/icons-material/Send';

function ButtonSubmit({onClick, disabled}) {
    return (
        <button className='mx-3 rounded-xl p-2 px-[9px]  transition-all ease-in-out delay-50'
        onClick={onClick} disabled={disabled}>
            <SendIcon sx={{fontSize: "28px"}} className='dark:text-white text-black hover:text-black/70 dark:hover:text-white/70 transition-colors ease-in-out' />
        </button>
    )
}

export default ButtonSubmit
