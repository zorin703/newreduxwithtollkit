//слайсы это обертка нвд редьюсерами которая добавляет дополнительный
// функционал и упрощает работу

import {IUser} from "../../models/IUser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchUsers} from "./ActionCreators";

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
    reducers: {},
    extraReducers: {
        [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
            state.isLoading = false
            state.error = ''
            state.users = action.payload
        },
        [fetchUsers.pending.type]: (state) => {
            state.isLoading = true
        },
        [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload
        },
    }
})

//Когда мы используем createAsyncThunk создается три состояния fulfilled, pending, rejected

//fulfilled - успешная загрузка
//pending - ожидание
//rejected - произошла ошибка

//Из слайса мы можем вытащить отдельно редьюсер и отдельно экшн-креэйторы
export default userSlice.reducer;