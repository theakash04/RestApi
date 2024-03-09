import React from 'react'
import Book from './Assets/Book.png'

function BookCard({title, Description}) {
    return (
        <div>
            <div class="relative flex flex-col mt-6 dark:bg-white/20 bg-white/50 shadow-md bg-clip-border rounded-xl w-full backdrop-filter backdrop-blur-md dark:shadow-black/60">
                <div class="py-6 px-8">
                    <div>
                        <img src={Book} alt="" className='w-20'/>
                    </div>
                    <h5 class="block mb-2 font-sans text-xl antialiased leading-snug tracking-normal dark:text-white font-bold">
                        {title}
                    </h5>
                    <p class="block dark:text-[#adb5bd] font-sans text-base antialiased font-semibold leading-relaxed text-black/50">
                        {Description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BookCard
