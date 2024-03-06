import React from 'react'
import SendIcon from '@mui/icons-material/Send';

function ButtonSubmit({onClick, disabled}) {
    return (
        <button className='mx-3 rounded-xl p-2 px-[9px]  transition-all ease-in-out delay-50'
        onClick={onClick} disabled={disabled}>
            <SendIcon sx={{color: "black", fontSize: "28px"}} className='hover:text-black/70 transition-colors ease-in-out' />
        </button>
    )
}

export default ButtonSubmit
