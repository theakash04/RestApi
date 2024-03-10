import React from 'react'
import Cotainer from '../../../../Container/Cotainer'
import BookCard from './BookCard'

function BookRec() {
    const Books = [
        {
            title: "The Power of Now",
            author: "Eckhart Tolle",
            description: "Offers insights into living in the present moment and techniques to alleviate stress by focusing on the now."
        },
        {
            title: "Wherever You Go, There You Are",
            author: "Jon Kabat-Zinn",
            description: "Explores mindfulness meditation and its benefits in reducing stress, enhancing mental clarity, and promoting overall well-being."
        },
        {
            title: "The Happiness Project",
            author: "Gretchen Rubin",
            description: "Chronicles the author's journey to increase happiness through gratitude, mindfulness, and pursuing passions."
        },
        {
            title: "The Relaxation Response",
            author: "Herbert Benson",
            description: "Introduces the relaxation response and provides techniques for eliciting it through relaxation and meditation."
        },
        {
            title: "Full Catastrophe Living",
            author: "Jon Kabat-Zinn",
            description: "Discusses mindfulness-based stress reduction techniques for coping with stress, pain, and illness."
        },
        {
            title: "The Four Agreements",
            author: "Don Miguel Ruiz",
            description: "Presents principles for living a fulfilling life based on Toltec wisdom, offering guidance for achieving inner peace and reducing self-imposed suffering."
        },
        {
            title: "The Mindfulness Workbook for Anxiety",
            author: "Tanya J. Peterson",
            description: "Provides mindfulness exercises and strategies tailored to help manage anxiety and stress effectively."
        },
        {
            title: "You Are Here: Discovering the Magic of the Present Moment",
            author: "Thich Nhat Hanh",
            description: "Shares mindfulness practices and teachings from Buddhist monk Thich Nhat Hanh to cultivate awareness, joy, and peace in everyday life."
        }
    ];

    return (
        <Cotainer className={"pt-16 sm:mx-24"}>
            <div className='grid sm:grid-cols-2 place-items-center place-content-center gap-1'>
                {Books.map((item, index) => (
                    <div key={index}>
                        <BookCard title={item.title} Description={item.description} Author={item.author} />
                    </div>
                ))}
            </div>
        </Cotainer>
    )
}

export default BookRec
