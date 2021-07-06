import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { currentUser } from "./thunks";

const initialState = {
    isAuth: false,
    token: localStorage.getItem('token') || '',
    currentUser: null,
    users: [],
    isPreloader: true,
}

const reducer = (store=initialState, action) => {
    switch(action.type){
        case "PRELOADER":
            return {
                ...store,
                isPreloader: false
            }
        case 'SET_CURRENT_USER': 
            return {
                ...store,
                currentUser: action.payload,
                isAuth: true,
            }
        case 'LOGIN':
            return {
                ...store,
                token: action.payload,
            }
        case 'LOGOUT':
            return {
                currentUser: null,
                isAuth: false,
                token: '',
                users: [],
            }    
        default:
            return store;    
    }
}


const store = createStore(reducer, applyMiddleware(thunk));

store.subscribe(() => console.log(store.getState()))

console.log(store.getState())

export default store;


