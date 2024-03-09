import React from 'react'
import Cotainer from '../../../../Container/Cotainer'
import BookCard from './BookCard'

function BookRec() {
    const Books = [
        {
            title: "first book",
            desc: "about first book dsfdnfksdnfkdkfgnkd dgkndkgnndskgns sdfnksdkndkfnd skdfnksdnf"
        },
        {
            title: "first book",
            desc: "about first book dsfdnfksdnfkdkfgnkd dgkndkgnndskgns sdfnksdkndkfnd skdfnksdnf"
        },
        {
            title: "first book",
            desc: "about first book dsfdnfksdnfkdkfgnkd dgkndkgnndskgns sdfnksdkndkfnd skdfnksdnf"
        },
        {
            title: "first book",
            desc: "about first book dsfdnfksdnfkdkfgnkd dgkndkgnndskgns sdfnksdkndkfnd skdfnksdnf"
        },
        {
            title: "first book",
            desc: "about first book dsfdnfksdnfkdkfgnkd dgkndkgnndskgns sdfnksdkndkfnd skdfnksdnf"
        },
    ]
    return (
        <Cotainer className={"pt-16"}>
            <div className='grid sm:grid-cols-3 sm:gap-5'>
                {Books.map((item,index)=>(
                    <div key={index} >
                        <BookCard title={item.title} Description={item.desc}/>
                    </div>
                ))}
            </div>
        </Cotainer>
    )
}

export default BookRec
