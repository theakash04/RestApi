import React, {useState, useRef, useEffect} from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import AudioSrc from '../../../../../assets/Rain.wav'
import './Music.css'

function Music({className}) {
    const [isPlaying, setPlaying] = useState(false);

    const audioRef = useRef(null)

    function toggleMusic(){
        setPlaying(prevState => !prevState);
    }

    useEffect(()=>{
        if(isPlaying){
            audioRef.current.play();
            audioRef.current.volume = 0.1;
        }
        else{
            audioRef.current.pause();
        }
    },[isPlaying])



    return (
        <div className={`${className} cursor-pointer bg-white/40 p-4 rounded-full hover:bg-white/70 transition-all duration-150 shadow-lg`} id='music'>
            {isPlaying ? <PauseIcon onClick={toggleMusic} sx={{fontSize: "30px"}}/> : <PlayArrowIcon sx={{fontSize: "30px"}} onClick={toggleMusic} />}
            <audio src={AudioSrc} ref={audioRef}  loop/>
            <div className='dark:bg-white dark:text-black bg-black text-white px-3 rounded-md py-1 -bottom-11 right-0.5' id='MusicState'>
                <p>{isPlaying ? "Stop" : "Play"}</p>
            </div>
        </div>
    )
}

export default Music
