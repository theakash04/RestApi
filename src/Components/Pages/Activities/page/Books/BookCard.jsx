import React from 'react'
import Book from './Assets/Book.png'

function BookCard({title, Description, Author}) {
    return (
        <div>
            <div class="relative flex flex-col mt-6 dark:bg-white/10 bg-white/50 shadow-md bg-clip-border rounded-xl  backdrop-filter backdrop-blur-md dark:shadow-black/30 m-h-72 sm:w-4/5">
                <div class="py-6 px-8">
                    <div className='w-full flex items-center justify-center'>
                        <img src={Book} alt="" className='w-20'/>
                    </div>
                    <div class="mb-2 font-sans text-xl antialiased leading-snug tracking-normal dark:text-white/80 font-bold">
                        <h5 className=''>{title}</h5>
                        <p className='text-sm font-mono dark:text-white/40 dark:hover:text-violet-300 text-black/50  pb-5'>{Author ?? "Unkown"}</p>
                    </div>
                    <p class="block dark:text-gray-400 font-sans text-base antialiased font-semibold leading-relaxed text-black/50 sm:pb-0 pb-5">
                        {Description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BookCard
