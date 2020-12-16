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

const App = () => {
    return (
        <BrowserRouter>
            <div className='wrapper'>
            <Header />
                <div className='wrapper__inner'>
                    <Navbar />
                    <div className='inner__content'>
                        <Route path='/profile' component={Profile} />
                        <Route path='/dialogs' component={Dialogs} />
                        <Route exact path='/news' component={News} />
                        <Route exact path='/music' component={Music} />
                        <Route path='/settings' component={Settings} />
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
