import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import UsersContainer from './components/Users/UsersContainer';

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Navbar />
                <Routes>
                    <Route path="/" element={<Profile />} />
                    <Route path="/dialogs/" element={<DialogsContainer />} />
                    <Route path="/users" element={<UsersContainer />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
