import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

const App = () => {
    return (
        <div className='wrapper'>
            <div className='wrapper__inner'>
                <Header />
                <Navbar />
                <Profile />
            </div>
        </div>
    )
}

export default App;
