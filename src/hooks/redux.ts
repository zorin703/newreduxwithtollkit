import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../store/store";


export const useAppDispatch = () =>useDispatch<AppDispatch>()  //создаем хук типизированный Dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector  //создаем хук типизированный useSelector
