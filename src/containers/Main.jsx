import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

const Users = () => {
    return (
        <div>Users</div>
    )
}

const Personal = () => {
    return (
        <div>Personal</div>
    )
}

const Main = () => {
    return (
        <Switch>
            <Route exact path="/" component={Personal} />
            <Route path="/users" component={Users} />
            <Redirect to="/" />
        </Switch>
    )
}

export default Main;