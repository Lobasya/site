import api from '../api';

export const loginThunk = (body) => {
    return async (dispatch) => {
        try {
            const {data} = await api.login(body);
            localStorage.setItem('token', data.access_token);
            dispatch({type: 'LOGIN', payload: data.access_token})
            dispatch(currentUser())
        } catch(e){
            console.error(e)
        } finally{
            dispatch({type: 'PRELOADER'})
        }
    }
}

export const currentUser = () => {
    return async (dispatch) => {
        try {
            const {data} = await api.getCurrentUser();
            dispatch({type: 'SET_CURRENT_USER', payload: data})
        } catch(e){
            console.error(e)
        } finally{
            dispatch({type: 'PRELOADER'})
        }
    }
}