import React, {useState} from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

function Music({className}) {
    const [isPlaying, setPlaying] = useState(true);

    function stopMusic(){
        setPlaying(false);
    }

    function playMusic(){
        setPlaying(true);
    }



    return (
        <div className={`${className} cursor-pointer bg-white/40 p-4 rounded-full hover:bg-white/70 transition-all duration-150 shadow-lg`}>
            {isPlaying ? <PauseIcon onClick={stopMusic} sx={{fontSize: "30px"}}/> : <PlayArrowIcon sx={{fontSize: "30px"}} onClick={playMusic} />}
            <audio src="" />
        </div>
    )
}

export default Music
