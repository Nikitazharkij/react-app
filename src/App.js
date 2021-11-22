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
                    <Route path="/" element={<Profile
                        profilePage={props.state.profilePage}
                        dispatch={props.dispatch} />} />
                    <Route path="/dialogs/" element={<Dialogs store={props.store} />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
