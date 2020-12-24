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
    
    let postsData = [
        { id: 1, message: 'Hi, how are you?', likeCount: '\u2661 10' },
        { id: 2, message: "It's my first post", likeCount: '\u2661 99' }
    ]

    return (
        <BrowserRouter>
            <div className='wrapper'>
            <Header />
                <div className='wrapper__inner'>
                    <Navbar />
                    <div className='inner__content'>
                        <Route path='/profile' render={ () => <Profile posts={postsData} />} />
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
