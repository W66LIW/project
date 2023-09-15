import png from "../svg/user-profile.png";
function Profile() {
    return(
        <div className="Profile dark:text-slate-300">
            <div className="flex mx-8" >
                <img src={png} alt="Фото профиля" className="h-16 dark:bg-slate-400 rounded-full p-1"/>
                <p className="p-4  text-lg">Admin</p>
                
            </div>
            <ul className="px-6 my-4">
                <li>Дата рождения: 01.01.2001 г.</li>
                <li>Пол: женскй</li>
                <li>Почта: <a target="_blank" rel="noreferrer" href="https://mail.google.com/mail/u/1/#inbox?compose=CllgCKCHVNCQRfCcDNrZfwQzXXFDSWwTTmGzzlbfXMqVklGXbMRprfnJvPRhnzBtvmVvHrXdCKL">meerim.art.b@gmail.com</a></li>
                <li>Телефон: +7(916)818-58-21</li>
                <li>Телеграм: <a target="_blank" rel="noreferrer" href="https://web.telegram.org/k/#@W66LIW">@W66LIW</a></li>
            </ul>
            <div className="flex flex-col justify-between my-4 px-6 w-4/5">
                <h6>О себе:</h6>
                <p className="indent-8">
                    По образованию аудитор. Разработкой заинтересовалась в то время, когда работала бухгалтером 
                    в строительной компании. Попала на отборочный этап Школы 21 от Сбербанк (кодинг на языке С 
                    в течение месяца), но не прошла на обучение.
                </p>
                <p className="indent-8">
                    Изначально выбрала JavaScript так как он и в целом фронтенд считался более легким вариантом. 
                    Но походу обучения он мне понравился и я узнала о Node JS, React, Redux и тд.
                </p>
                <p className="indent-8">На данный момент изучаю TypeScript и библиотеку D3 для построения инфографики</p>
            </div>
            
            

            
        </div>
    )
}

export default Profile;