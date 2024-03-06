    import React from 'react'
    import Card from '../Card'
import Cotainer from '../Container/Cotainer';



    function PlaceHolder() {
        
        const data = [
            {
                main: "I am lonely",
                secondary: "give some sport or activities to play"
            },
            {
                main: "Feeling bored",
                secondary: "recommend a good book or movie"
            },
            {
                main: "Stressed out",
                secondary: "suggest relaxation techniques or hobbies"
            },
            {
                main: "Need motivation",
                secondary: "provide inspirational quotes or success stories"
            }
        ];

        return (
            <>
                <div className='flex items-center w-full justify-center'>
                    <span className='text-6xl px-5 pt-10 font-extrabold'>Hello Akash!</span>
                </div>
                <div className='grid sm:grid-cols-2 grid-cols-1 gap-4 absolute bottom-28 left-0 right-0 sm:mx-44 mx-2 z-0'>
                {data.map((item, index) => (
                    <div key={index}>
                        <Card main={item.main} secondary={item.secondary}/>
                    </div>
                ))}
                </div>
            </>
        )
    }

    export default PlaceHolder
