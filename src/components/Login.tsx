import React, {useState} from 'react';
import { changeLogin, changePassword } from '../redux/loginSlice';
import { useAppDispatch, useTypedSelector} from '../redux/hooks';

function Login() {
    const [error, setError] = useState(false);
    const dispatch = useAppDispatch();
    const login: string = useTypedSelector(state => state.authorizationData.login)
    const password: string = useTypedSelector(state => state.authorizationData.password)
    
    console.log(JSON.stringify(login), JSON.stringify(password));
    function check() {
        if(login === "Admin" && password === "12345"){
            localStorage.state = true
            window.location.assign("http://localhost:3000/project/profile")
        } else setError(true) 
    }
    return(
        <div className="flex flex-col items-center justify-center mt-16 dark:text-zinc-950" >
            <div className="flex flex-col items-center h-fit w-54 my-20 bg-slate-500 rounded-2xl p-4">
                <span className="mx-2 my-2 text-slate-200 w-36 text-center">Введите логин и пароль</span>
                    <input className="mx-2 my-2 px-2 w-32 rounded-md bg-slate-200"
                        type="text"
                        value={login}
                        onChange={(e) => dispatch(changeLogin(e.target.value))}
                        />
                    <input className="mx-2 my-2 px-2 w-32 rounded-md bg-slate-200"
                        type="text" 
                        value={password}
                        onChange={(e)=> dispatch(changePassword(e.target.value))}/>
                    <button className="flex items-center justify-center mx-2 my-2 text-slate-200 bg-slate-600 w-28 rounded-md p-1"
                        disabled={!(login && password)}
                        type="submit"
                        onClick={check}
                        >Log in</button>
            </div>
             {error && <div className="m-4 text-red-400 text-center">Имя пользователя или пароль <br/> введены неверно !</div>}
        </div>
    )
}

export default Login;