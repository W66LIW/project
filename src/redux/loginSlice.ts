import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface IData {
    login: string,
    password: string
}

export const loginSlice = createSlice({
    name: "login",
    initialState: {
        login: "",
        password: ""        
    } as IData,
    reducers: {
        changeLogin: (state: IData, {payload}: PayloadAction<string>) => {
            state.login = payload;
            return state;
        },
        changePassword: (state: IData, {payload}: PayloadAction<string>) => {
            state.password = payload;
            return state;
        }
    }
})

export default loginSlice.reducer;
export const {changeLogin, changePassword} = loginSlice.actions;