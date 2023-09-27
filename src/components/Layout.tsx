import { Outlet } from "react-router-dom";
import Header from "./Header";
import Theme from "./Theme";

function Layout() {
    return(
        <div className='flex relative flex-col w-full min-h-screen max-h-fit bg-indigo-200 dark:bg-gray-950'>
            <Header/>
            <Theme/>
            <Outlet/>
        </div>
    )
}

export default Layout;