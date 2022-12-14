//слайсы это обертка нвд редьюсерами которая добавляет дополнительный
// функционал и упрощает работу

import {IUser} from "../../models/IUser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface UserState {
    users: IUser[];
    isLoading: boolean;
    error: string;
    count: number;
}


const initialState: UserState = {
    users: [],
    isLoading: false,
    error: '',
    count: 0,
}

//каждый кейс идет как отдкльный редьюсер и внутри него мы будем изменять состояние
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // increment(state, action: PayloadAction<number>) {
        //     state.count += action.payload;
        usersFetching(state){
            state.isLoading = true
        },
        usersFetchingSuccess(state, action:PayloadAction<IUser[]>){
            state.isLoading = false
            state.error =''
            state.users = action.payload
        },
        usersFetchingError(state, action: PayloadAction<string>){
            state.isLoading = false
            state.error = action.payload
        },

    }
})

//Из слайса мы можем вытащить отдельно редьюсер и отдельно экшн-креэйторы
export default userSlice.reducer;