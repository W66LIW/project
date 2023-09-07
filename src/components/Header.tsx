import React from "react";
import {NavLink} from "react-router-dom";
import '../style/css/index.css';

function Header(){  
    return(
        <header className="flex justify-center bg-slate-500 dark:bg-slate-900 min-h-[64px] w-screen border-b border-[rgba(38,38,38,.08)] mb-[36px] text-white dark:text-slate-300" >
            <NavLink className="flex items-center px-2" to="/project/">На главную</NavLink>
            <NavLink className="flex items-center px-2" to="/project/news">Новости</NavLink>
            <NavLink className="flex items-center px-2" to={localStorage.state ? "/project/profile" : "/project/login"}>Профиль</NavLink>
        </header>
    )
}

    
    

export default Header;