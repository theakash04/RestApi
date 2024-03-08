import React, { useState, useEffect, useRef } from "react";
import SearchBox from "../InputBox/SearchBox";
import PlaceHolder from "../PlaceHolder/PlaceHolder";
import TextFetching from "../Loading/TextFetching";
import UserData from "./UserData";
import FridayData from "./FridayData";




function MainDataDisplay() {
    const [Aidata, setAiData] = useState("");
    const [userData, setUserData] = useState("");
    const [dataArray, setDataArray] = useState([])
    const [isLoading, setLoading] = useState(false);



    useEffect(()=>{
        PushDataArray();
        if(Aidata != ""){
            scrollToBottom();
        }
    },[Aidata, userData])

    
    function handleUserData(newUserData){
        setUserData(newUserData);
        // console.log(newUserData);
    }

    function handleDataUpdate(newAiData){
        setAiData(newAiData);
        // console.log(newAiData);
    };

    function PushDataArray(){
        if (userData.trim() !== '' && Aidata.trim() !== '') {
            const newData = {
                user: userData,
                friday: Aidata
            };
            setDataArray(prevData => [...prevData, newData]);
        }
    }

    function handleClearChat(){
        setDataArray([]);
    }

    function scrollToBottom(){
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth',
            block: 'end', 
            inline: 'nearest'
        });
    }

    return (
        <>
            {dataArray.length > 0 ? (
                <div className="flex flex-col items-start px-10 py-8">
                    {/* {isLoading && <TextFetching />}  !isLoading &&*/}

                    {/* map on data get item and index of it*/}
                    {dataArray.map((item, index) => (
                            <div key={index}>
                                <div>
                                    <UserData userData={item.user}/>
                                </div>
                                <div>
                                    {<FridayData Aidata={item.friday}/>}
                                </div>
                            </div>
                        ))} 
                </div>
            ) : (
                <PlaceHolder />
            )}
            <div className="fixed bottom-5 left-0 right-0 mx-auto ">
                <SearchBox onFetchUpdate={handleDataUpdate} onUserData={handleUserData} clearChat={handleClearChat}/>
            </div>
        </>
    );
}

export default MainDataDisplay;
