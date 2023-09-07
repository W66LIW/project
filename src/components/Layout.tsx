import {Link, Outlet} from "react-router-dom";
import theme from '../theme';
import Header from "./Header";
import Div from "./Div";
import Theme from "./Theme";

function Layout() {
    //theme()
    return(
        <div className='flex flex-col min-h-screen w-full bg-indigo-200 dark:bg-gray-950'>
            <Header />
            <Theme />
            <Outlet />
        </div>
    )
}

export default Layout;