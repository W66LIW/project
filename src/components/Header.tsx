import {NavLink} from "react-router-dom";
import '../style/css/index.css';

function Header(){  
    return(
        <header className="Header" >
            <NavLink className="flex items-center px-2" to="/project/">На главную</NavLink>
            <NavLink className="flex items-center px-2" to="/project/news">Новости</NavLink>
            <NavLink className="flex items-center px-2" to={localStorage.state ? "/project/profile" : "/project/login"}>Профиль</NavLink>
        </header>
    )
}

    
    

export default Header;