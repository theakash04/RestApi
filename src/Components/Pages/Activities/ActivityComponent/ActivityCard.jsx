import React from 'react';


function ActivityCard({className, title, desc, onClick}) {
    return (
        <div className='relative' onClick={onClick}>
            {/* Circle behind the card */}
            <span className={`dark:bg- bg-[#0080FF] w-32 h-32 absolute rounded-full z-0 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 filter blur-2xl animate-pulse `}/>
            
            <div className={`dark:bg-black/10 dark:hover:bg-black/30 bg-white/40 hover:bg-white/70 transition-all ease-in-out duration-150 backdrop-filter backdrop-blur-lg w-full h-72 rounded-2xl cursor-pointer z-[1] relative border dark:border-white/10 border-[#0080ff37] ${className}`}>
                <div className='flex items-center justify-center h-full flex-col gap-4'>
                    <h3 className='dark:text-white/90 text-black text-3xl font-extrabold sm:px-0 px-4 text-center'>{title}</h3>
                    <p className='dark:text-white/40 text-black/60 text-md font-bold text-center sm:px-24 '>{desc}</p>
                </div>
            </div>

        </div>
    );
}

export default ActivityCard;
