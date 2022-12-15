//Ассинхронный ActionCreator создается с помощью Middleware redux-thunk
//в redux toolkit redux-thunk идет под капотом
//из ActionCreator не возвращаем сразу Action а возвращаем другую функцию которая аргументом принимает dispatch
// И уже из этой функции мы будем производить ассинхронные действия


import {AppDispatch} from "../store";
import axios from "axios";
import {IUser} from "../../models/IUser";
import {userSlice} from "./UserSlice";
import {createAsyncThunk} from "@reduxjs/toolkit";


// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//     try {
//         dispatch(userSlice.actions.usersFetching())
//         const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
//         dispatch(userSlice.actions.usersFetchingSuccess(response.data))
//     } catch (e:any) {
//         dispatch(userSlice.actions.usersFetchingError(e.message))
//     }
// }

export const fetchUsers = createAsyncThunk(
    'user/fetchAll',

    async (_, thunkAPI) => {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users1')
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue('Не удалось загрузить пользователей')
        }
    }
)

