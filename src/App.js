import React, { useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import AppRouter from './components/AppRouter';
import './App.css'
import { Context } from './index';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loader from './components/Loader';

const App = () => {
    const { auth } =useContext(Context);
    const [user, loading, error] = useAuthState(auth);

    console.log("user", user);
    console.log("loading", loading);
    console.log("error", error);

    if (loading) {
        return (<Loader/>);
        // return 
    }

    return (
        <BrowserRouter>
            {/* <NavBar className="ml-auto"/> */}
            <NavBar/>
            <AppRouter/>
        </BrowserRouter>
    );
};

export default App;