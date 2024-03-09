import React from 'react'

function Card({main, secondary, onClick}) {
    return (
        <div className='dark:bg-white/10 bg-[#FFFCFC] rounded-2xl p-4 flex flex-col dark:hover:bg-white/30 backdrop-filter backdrop-blur-md hover:bg-white/60 transition-colors ease-in-out shadow-md cursor-pointer' onClick={onClick}>
            <p className='font-bold text-black dark:text-white'>
                {main}
            </p>
            <p className='dark:text-white/50 text-black/50 text-md pt-1 flex flex-wrap h-10 overflow-hidden whitespace-nowrap text-ellipsis'>
                {secondary}
            </p>
        </div>
    )
}

export default Card
