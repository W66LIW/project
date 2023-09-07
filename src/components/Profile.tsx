import png from "../svg/user-profile.png";
function Profile() {
    return(
        <div>
            <div className="flex mx-8">
                <img src={png} alt="Фото профиля" className="h-16 dark:bg-slate-400 rounded-full p-1"/>
                <p className="p-4 dark:text-slate-300 text-lg">Admin</p>
                
            </div>
            <div className="my-4">
                <p className="px-6 dark:text-slate-300">Дата рождения: 19.08.2011 г.</p>
                <p className="px-6 dark:text-slate-300">Пол: мужской</p>
                <p className="px-6 dark:text-slate-300">О себе: Люблю видеоигры <br/>
            </p>
            </div>
            
            

            
        </div>
    )
}

export default Profile;