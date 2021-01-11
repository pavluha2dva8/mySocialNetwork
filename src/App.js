import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';

const App = (props) => {

    return (
            <div className='wrapper'>
                <Header />
                <div className='wrapper__inner'>
                    <Navbar sideBar={props.state.sideBar} />
                    <div className='inner__content'>
                        <Route path='/profile' render={() => <Profile
                            profilePage={props.state.profilePage}
                            addPost={props.addPost}
                            updateNewPostText={props.updateNewPostText}
                        />} />
                        <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage} />} />
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
