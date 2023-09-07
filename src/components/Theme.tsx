import React, {useState} from "react";
import theme from "../theme";
import sun from "../svg/sun.svg"
import moon from "../svg/moon.svg"

function Theme(){    
    function changeTheme() {
        if(localStorage.theme === "light" || (!("theme" in localStorage))) {
            localStorage.theme = "dark";
        } else {
            localStorage.theme = "light";
        }
        theme()
    }

    return(
        <div onClick={changeTheme}
        className="h-[60px] w-[60px] p-[1px] mx-5 my-24 rounded-full flex justify-center items-center fixed right-1 cursor-pointer">
        <img src={moon} className="hidden dark:block dark:rounded-full h-[50px] dark:h-[37px] dark:shadow-[0px_0px_30px_20px_rgba(218,218,193,0.3)]"></img>
        <img src={sun} className="dark:hidden dark:rounded-full h-[50px] dark:h-[37px] dark:shadow-[0px_0px_30px_20px_rgba(218,218,193,0.3)]"></img>
        </div>
    )
}

export default Theme;