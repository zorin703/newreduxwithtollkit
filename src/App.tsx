import React, {useEffect} from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {fetchUsers} from "./store/reducers/ActionCreators";


function App() {
    // const {count} = useAppSelector(state => state.userReducer)
    // const {increment} = userSlice.actions;
    // console.log(increment(5))
   const dispatch = useAppDispatch()
    const {users, isLoading, error} = useAppSelector(state => state.userReducer)
    useEffect(()=>{
        dispatch(fetchUsers())
    },[])


    return (
        <div className="App">
            {isLoading && <h1>LOADING...........</h1>}
            {error && <h1>{error}</h1>}
            {JSON.stringify(users, null, 2)}
            {/*<h1>{count}</h1>*/}
            {/*<button onClick={()=>dispatch(increment(10))}>INCREMENT</button>*/}
        </div>
    );
}

export default App;
