import React from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { loginThunk } from '../store/thunks';

const Login = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const {login, password} = e.target.elements;
        const body = {
            login: login.value,
            password: password.value,
        }
        dispatch(loginThunk(body));
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Login
                <input type="text" name="login"/>
            </label>
            <label>
                Password
                <input type="text" name="password"/>
            </label>
            <button>Login</button>
        </form>
    )
}

const Auth = () => {
    return (
        <Switch>
            <Route path="/login" component={Login}/>
            <Redirect to="/login" />
        </Switch>
    )
}

export default Auth;