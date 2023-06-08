import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import AppRouter from './components/AppRouter';
import './App.css'
const App = () => {
    return (
        <BrowserRouter>
            <NavBar className="ml-auto"/>
            <AppRouter/>
        </BrowserRouter>
    );
};

export default App;