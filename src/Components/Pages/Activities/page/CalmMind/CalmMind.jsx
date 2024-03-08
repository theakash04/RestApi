import React from 'react'
import Cotainer from '../../../../Container/Cotainer'
import Timer from './Timer'
import TextAnimate from './TextAnimate'
import Rain from './Rain'
import { useState, createContext } from 'react'
import Music from './Music'

const MyContext = createContext();
export { MyContext }; 

function CalmMind() {
    const [state, setState] = useState(false)
    let [restart, setRestart] = useState(false)
    function handleFetchedData(state) {
        setState(state);
    }

    function handleRestart(prevC){
        setRestart(prevC);
    }

    return (
        <>
        <MyContext.Provider value={{state, restart}} >
            <Cotainer className={"sm:px-9 flex items-center justify-center h-screen pt-20 px-5 gap-40 relative overflow-hidden"}>
                <Rain />
                <div className='grid sm:grid-cols-2 grid-rows-2 place-content-center place-items-center py-2 z-10'>
                    <Timer fetchState={handleFetchedData} restart={handleRestart}/>
                    <TextAnimate />
                </div>
            </Cotainer>
        </MyContext.Provider>
        <Music className={'absolute right-10 top-10'}/>
        </>
    )
}


export default CalmMind
