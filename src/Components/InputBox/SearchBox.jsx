//input and data fetch handler
import React from 'react'
import axios from 'axios';
import { useState } from 'react'
import ButtonSubmit from './ButtonSubmit';
import NewChatButton from './NewChatButton';



function SearchBox({onDataUpdate}) {
    const [useInput, setUserInput] = useState('');
    let [response,setResponse] = useState("");


    
    //handle submit function
    const handleSubmit= async(e)=>{
        e.preventDefault();

        response = await axios.post("http://192.168.67.234:3000/chatbot",{
            input: useInput,
        });
        console.log(response);
        setResponse(response.data);
        if(useInput.trim() !== ''){
            console.log(useInput);
            setUserInput('');
        }
    }

    //input handle change Function
    const handleInputChange = (event) => {
        setUserInput(event.target.value);
    };


    return (
        <form onSubmit={handleSubmit} className='flex items-center justify-center'>
            <DisplayBox response={response}></DisplayBox>
            <div className='flex items-center border border-white/60 rounded-3xl sm:w-[60%] w-[90%] bg-[#FFFCFC] shadow-lg'>
                <NewChatButton />
                <input 
                value={useInput} 
                id="prompt-textarea" 
                placeholder="Chat..." 
                className="border-none w-[90%] h-14  m-0  resize-none rounded-2xl bg-transparent focus:ring-0 focus-visible:ring-0 max-h-25 py-[10px] pr-10 md:py-3.5 md:pr-12 placeholder-black/50  pl-3 md:pl-2 outline-none"  
                onChange={handleInputChange}
                />

                <ButtonSubmit onClick={handleSubmit}/>
            </div>
        </form>
    )
}

function DisplayBox({response}){
    return(
        <>
        <div>
            {response}
        </div>
        </>
    )
}

export default SearchBox


