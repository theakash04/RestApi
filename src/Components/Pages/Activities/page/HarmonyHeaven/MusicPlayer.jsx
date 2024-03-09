import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import { useState, useRef, useEffect } from 'react';
import Progress from './Progress';
import { RainSong, RainImg, BirdsSong, BirdsImg, RelaxRain, RelaxSpace, SparrowMusic, Space, sparrowImg, RainPiano } from '../../../../../assets/Assests';

function MusicPlayer() {
    const [isPlaying, setPlaying] = useState(false)
    const [musicProgress, setProgress] = useState("0%")
    const SongList = [
        {
            source: RainSong,
            image: RainImg,
            duration: 80
        },
        {
            source: BirdsSong,
            image: BirdsImg,
            duration: 180
        },
        {
            source: RelaxRain,
            image: RainPiano,
            duration: 295,
        },
        {
            source: RelaxSpace,
            image: Space,
            duration: 295,
        },
        {
            source: SparrowMusic,
            image: sparrowImg,
            duration: 142,
        },
    ]
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const audioRef = useRef(null);

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

    function getTime(){
        const currentTime = audioRef.current.currentTime;
        const duration = audioRef.current.duration;

        const progress = (currentTime / duration) * 100;
        setProgress(progress + "%");
    }

    function skipNext() {
        const nextIndex = (currentSongIndex + 1) % SongList.length;
        setCurrentSongIndex(nextIndex);
        setPlaying(false);
        setProgress(0 ,"%")
    }

    function skipPrevious() {
        const prevIndex = (currentSongIndex - 1 + SongList.length) % SongList.length;
        setCurrentSongIndex(prevIndex);
        setPlaying(false);
        setProgress(0 ,"%")
    }

    function handleEnded(){
        console.log("Song ended. Skipping to next song...");
        skipNext();
    };


    return (
        <div className='relative'>
                <span className={`bg-[#FF00F5] w-52 h-52 absolute rounded-full z-0 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 filter blur-3xl animate-pulse `}/>
            <div className='w-[500px] h-[520px] flex items-center justify-center flex-col bg-black/20 backdrop-filter backdrop-blur-md py-8 rounded-md shadow-md border border-white/10'>
            <div className='h-72 w-2/3'>
                <img src={SongList[currentSongIndex].image} alt="" className='w-full rounded-lg shadow-lg aspect-auto' />
            </div>
            <Progress progress={musicProgress} duration={SongList[currentSongIndex].duration} state={isPlaying}/>
            <div className='w-full h-24 rounded-lg flex items-center justify-center gap-10'>
                <div className='bg-white p-2 rounded-full cursor-pointer hover:bg-white/70 shadow-md' onClick={skipPrevious}>
                    <SkipPreviousIcon sx={{fontSize: "32px"}} className='dark:text-black'/>
                </div>
                <div className='bg-white p-2 rounded-full cursor-pointer hover:bg-white/70 shadow-md' onClick={toggleMusic}>
                    {isPlaying ? <PauseIcon sx={{fontSize: "32px"}} className='dark:text-black'/> : <PlayArrowIcon sx={{fontSize: "32px"}} className='dark:text-black'/>}
                    <audio src={SongList[currentSongIndex].source} ref={audioRef} onTimeUpdate={getTime} onEnded={handleEnded}/>
                </div>
                <div className='bg-white p-2 rounded-full cursor-pointer hover:bg-white/70 shadow-md' onClick={skipNext}>
                    <SkipNextIcon sx={{fontSize: "32px"}} className='dark:text-black'/>
                </div>
            </div>
        </div>
        </div>
    )
}

export default MusicPlayer
