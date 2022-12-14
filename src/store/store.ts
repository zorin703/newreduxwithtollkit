import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userReducer from './reducers/UserSlice';
//В redux-toolkit не обязательно использовать combineReducers
// в качестве корневого редьсера можно использовать просто объект

const rootReducer = combineReducers({
    userReducer
})

//Вместо createStore используем configureStore
//devTools middleware thunk уже включены в redux-toolkit
export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

//типы с помощью которых мы будем взаимодействовать с  хранилищем
export type RootState = ReturnType<typeof rootReducer>  // тип нашего состояния
export type AppStore = ReturnType<typeof setupStore>    //тип стора
export type AppDispatch = AppStore[`dispatch`]          //тип dispatch
