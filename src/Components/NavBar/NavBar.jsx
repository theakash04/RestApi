import React from "react";
import { NavLink } from "react-router-dom";
import { Avatar } from "@mui/material";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import ArticleIcon from '@mui/icons-material/Article';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import { ThemeBtn } from '../index'



function NavBar() {

    const [isHidden, setHidden] = useState(true)

    // const handle = () => {
    //     console.log("Cleared chat from the main component");
    // };

    return (
        <>
            <div className={`absolute p-2 sm:hidden cursor-pointer z-40 ${isHidden ? "absolute" : "hidden"}`} onClick={() => setHidden(false) }>
                <MenuIcon sx={{ fontSize: "38px", fontWeight: "600"}} className="dark:text-white"/>
            </div> 
            <header className={`dark:bg-black/40 bg-[#C2C2C2] py-1 sm:grid px-1 place-items-center place-content-center w-[110px] overflow-hidden rounded-tr-2xl rounded-br-2xl fixed bottom-0 top-0 z-10 delay-300 transition-all ease-in-out sm:left-0 ${isHidden ? 'left-[-110px]' : 'left-0'} z-40 border border-l-white/10 border-white/20 backdrop-filter backdrop-blur-md`}>
                <button 
                onClick={()=> setHidden(true)}
                className="absolute top-8 sm:hidden right-0 left-0 transition-all ease-in-out duration-100">
                    <CloseIcon sx={{ fontSize: "32px"}} className="dark:bg-black/30 bg-white/70 rounded-full p-1 dark:text-white"/>
                </button>

                <div className="absolute top-44 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all ease-in-out">
                    <ThemeBtn />
                </div>

                <div id="center" className="grid gap-6 place-content-center place-items-center sm:p-0 py-48">
                    <NavLink
                    to={"/"}
                    className={({ isActive }) => `${isActive ? "dark:bg-black/50 bg-white/90" : "bg-transparent"} p-4 rounded-2xl dark:hover:bg-white/20 hover:bg-white/70 transition-colors ease-in-out flex items-center justify-center`} title="Chat">
                        <QuestionAnswerIcon sx={{ fontSize: "32px" }} className="text-black dark:text-white"/>
                    </NavLink>

                    <NavLink
                    to={"/activites"}
                    className={({ isActive }) => `${isActive ? "dark:bg-black/50 bg-white/90" : "bg-transparent"} p-4 rounded-2xl dark:hover:bg-white/20 hover:bg-white/70 transition-colors ease-in-out`} title="Activities">
                        <SelfImprovementIcon sx={{ fontSize: "32px" }} className="text-black dark:text-white"/>
                    </NavLink>

                    <NavLink
                    to={"/Resources"}
                    className={({ isActive }) => `${isActive ? "dark:bg-black/50 bg-white/90" : "bg-transparent"} p-4 rounded-2xl dark:hover:bg-white/20 hover:bg-white/70 transition-colors ease-in-out`} title="Resources">
                        <ArticleIcon sx={{ fontSize: "32px" }} className="text-black dark:text-white"/>
                    </NavLink>
                </div>

                <Avatar alt="User profile" src="" sx={{ bgcolor: 'orangered' , width: "40px", height: "40px", position: "absolute", bottom: "5%", left: "50%"}} className="transform -translate-x-1/2"/>
            </header>
        </>
    );
}

export default NavBar;
