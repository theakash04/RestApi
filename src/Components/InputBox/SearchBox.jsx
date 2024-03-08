    //input and data fetch handler
    import React from 'react'
    import axios from 'axios';
    import { useState, useEffect } from 'react'
    import ButtonSubmit from './ButtonSubmit';
    import NewChatButton from './NewChatButton';



    function SearchBox({onFetchUpdate, onUserData, clearChat}) {
        const [userInput, setUserInput] = useState('');
        let [response,setResponse] = useState("");

        


        //handle submit function
        const handleSubmit= async(e)=>{
            e.preventDefault();
            
            // sending request and fetching data
            response = await axios.post("http://192.168.29.71:3000/chatbot",{
                input: userInput,
            });
            // const testAi = "The server is Disconnected now so the data cannot be fetched!"
            // setResponse(testAi);
            setResponse(response.data);
            onUserData(userInput);
            setUserInput('');
        }

        // Pass response to onFetchUpdate when it changes
        useEffect(() => {
            onFetchUpdate(response);


        }, [response, onFetchUpdate]);

        //input handle change Function
        function handleInputChange (event) {
            setUserInput(event.target.value);
        };


        return (
            <form onSubmit={handleSubmit} className='flex items-center justify-center'>
                <div className='flex items-center border border-white/60 rounded-3xl sm:w-[60%] w-[90%] bg-[#FFFCFC] shadow-lg'>
                    <NewChatButton onClick={clearChat}/>
                    <input 
                    value={userInput} 
                    id="prompt-textarea" 
                    placeholder="Chat..." 
                    className="border-none w-[90%] h-14  m-0  resize-none rounded-2xl bg-transparent focus:ring-0 focus-visible:ring-0 max-h-25 py-[10px] pr-10 md:py-3.5 md:pr-12 placeholder-black/50  pl-3 md:pl-2 outline-none"  
                    onChange={handleInputChange}
                    autoComplete='off'
                    />

                    <ButtonSubmit onClick={handleSubmit}/>
                </div>
            </form>
        )
    }

    export default SearchBox


