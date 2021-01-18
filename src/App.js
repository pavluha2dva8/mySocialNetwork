import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import NavbarContainer from './components/Navbar/NavbarContainer';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';
import DialogsContainer from './components/Dialogs/DialogsContainer';


const App = (props) => {

    return (
        <div className='wrapper'>
            <Header />
            <div className='wrapper__inner'>
                <NavbarContainer />
                <div className='inner__content'>
                    <Route path='/profile'
                        render={() => <Profile
                        // store={props.store}
                        // addPost={props.addPost}
                        // updateNewPostText={props.updateNewPostText}
                        />} />
                    <Route path='/dialogs'
                        render={() => <DialogsContainer
                        // store={props.store}
                        // addMessage={props.addMessage}
                        // updateNewMessageText={props.updateNewMessageText}
                        />} />
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
