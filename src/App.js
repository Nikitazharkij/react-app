import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Navbar />
                <Routes>
                    <Route path="/" element={<Profile state={props.state.profilePage} addPost={props.addPost} />} />
                    <Route path="/dialogs/" element={<Dialogs state={props.state.dialogsPage} />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
