import React from "react";
import { NavLink } from "react-router-dom";
import { Avatar } from "@mui/material";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import ArticleIcon from '@mui/icons-material/Article';
import CelebrationIcon from '@mui/icons-material/Celebration';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";



function NavBar() {

    const [isHidden, setHidden] = useState(true)

    const handle = () => {
        console.log("Cleared chat from the main component");
    };

    return (
        <>
            <div className="absolute p-2 sm:hidden cursor-pointer" onClick={() => setHidden(false) }>
                <MenuIcon sx={{fontSize: "38px", fontWeight: "600"}}/>
            </div>
            <header className={`bg-[#C2C2C2] py-1 sm:grid px-1 place-items-center place-content-center w-[90px] overflow-hidden rounded-tr-2xl rounded-br-2xl fixed bottom-0 top-0 z-10 delay-300 transition-all ease-in-out sm:left-0 ${isHidden ? 'left-[-90px]' : 'left-0'}`}>
                <button 
                onClick={()=> setHidden(true)}
                className="absolute top-8 sm:hidden right-0 left-0 transition-all ease-in-out">
                    <CloseIcon sx={{color: "black", fontSize: "32px"}} className="hover:bg-white/90 rounded-full p-1 transition-all ease-in-out rotate-45 delay-75 hover:rotate-0 focus:rotate-0"/>
                </button>
                <div id="center" className="grid gap-6 place-content-center place-items-center sm:p-0 py-48">
                    <NavLink
                    to={"/"}
                    className={({ isActive }) => `${isActive ? "bg-white/90" : "bg-transparent"} p-3 rounded-2xl hover:bg-white/70 transition-colors ease-in-out`}>
                        <QuestionAnswerIcon sx={{ color: "black", fontSize: "28px" }} />
                    </NavLink>

                    <NavLink
                    to={"/activites"}
                    className={({ isActive }) => `${isActive ? "bg-white/90" : "bg-transparent"} p-3 rounded-2xl hover:bg-white/70 transition-colors ease-in-out`}>
                        <CelebrationIcon sx={{ color: "black", fontSize: "28px" }} />
                    </NavLink>

                    <NavLink
                    to={"/Resources"}
                    className={({ isActive }) => `${isActive ? "bg-white/90" : "bg-transparent"} p-3 rounded-2xl hover:bg-white/70 transition-colors ease-in-out`}>
                        <ArticleIcon sx={{ color: "black", fontSize: "28px" }} />
                    </NavLink>
                </div>

                <Avatar alt="User profile" src="" sx={{ bgcolor: 'orangered' , width: "40px", height: "40px", position: "absolute", bottom: "40px", left: "20px", right: "0px"}}/>
            </header>
        </>
    );
}

export default NavBar;
