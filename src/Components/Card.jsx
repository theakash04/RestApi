import React from 'react'

function Card({main, secondary}) {
    return (
        <div className='bg-[#FFFCFC] rounded-2xl p-4 flex flex-col hover:bg-white/60 transition-colors ease-in-out shadow-md cursor-pointer'>
            <p className='font-bold text-black'>
                {main}
            </p>
            <p className='text-black/50 text-md pt-1 flex flex-wrap h-10 overflow-hidden whitespace-nowrap text-ellipsis'>
                {secondary}
            </p>
        </div>
    )
}

export default Card
