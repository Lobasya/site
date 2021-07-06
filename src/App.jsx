import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Main from './containers/Main'
import Auth from './containers/Auth'
import {currentUser} from './store/thunks';
import './App.css';

const App = () => {
  const isAuth = useSelector(store => store.isAuth);
  const isPreloader = useSelector(store => store.isPreloader);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(currentUser())
  }, [dispatch])

  if(isPreloader) {
    return <h1>Loading...</h1>
  }

  return isAuth ? <Main/> : <Auth/>
}

export default App;
