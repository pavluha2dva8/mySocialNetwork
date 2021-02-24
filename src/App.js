import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import NavbarContainer from './components/Navbar/NavbarContainer';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';


const App = () => {

    return (
        <div className='wrapper'>
            <HeaderContainer />
            <div className='wrapper__inner'>
                <NavbarContainer />
                <div className='inner__content'>
                    <Route path='/profile/:userId?'
                        render={() => <ProfileContainer />} />
                    <Route path='/dialogs'
                        render={() => <DialogsContainer
                        // store={props.store}
                        // addMessage={props.addMessage}
                        // updateNewMessageText={props.updateNewMessageText}
                        />} />
                    <Route path='/users'
                        render={() => <UsersContainer /> }/>
                    <Route exact path='/news' component={News} />
                    <Route exact path='/music' component={Music} />
                    <Route path='/settings' component={Settings} />
                    <Route path='/friends' component={Friends} />
                </div>
            </div>
        </div>
    )
}

export default App;
