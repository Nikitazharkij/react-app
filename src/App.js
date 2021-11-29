import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderComponent';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';

const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer />
                <Navbar />
                <Route path="/dialogs/" render={() => <DialogsContainer />} />
                <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
                <Route path="/users/" render={() => <UsersContainer />} />
            </div>
        </BrowserRouter>
    );
}

export default App;
