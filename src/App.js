import './App.css';
import NavbarContainer from './components/Navbar/NavbarContainer';
import { Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { React, Component } from 'react';
import { initializeApp } from './redux/app-reducer'
import { connect } from 'react-redux'
import Preloader from './components/common/Preloader/Preloader';


class App extends Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }

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
                            render={() => <UsersContainer />} />
                        <Route exact path='/news' component={News} />
                        <Route exact path='/music' component={Music} />
                        <Route path='/settings' component={Settings} />
                        <Route path='/friends' component={Friends} />
                        <Route path='/login'
                            render={() => <Login />} />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default connect(mapStateToProps, { initializeApp })(App)