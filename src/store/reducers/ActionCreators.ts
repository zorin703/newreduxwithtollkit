//Ассинхронный ActionCreator создается с помощью Middleware redux-thunk
//в redux toolkit redux-thunk идет под капотом
//из ActionCreator не возвращаем сразу Action а возвращаем другую функцию которая аргументом принимает dispatch
// И уже из этой функции мы будем производить ассинхронные действия


import {AppDispatch} from "../store";
import axios from "axios";
import {IUser} from "../../models/IUser";
import {userSlice} from "./UserSlice";



export const fetchUsers = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.usersFetching())
        const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
        dispatch(userSlice.actions.usersFetchingSuccess(response.data))
    } catch (e:any) {
        dispatch(userSlice.actions.usersFetchingError(e.message))
    }
}

