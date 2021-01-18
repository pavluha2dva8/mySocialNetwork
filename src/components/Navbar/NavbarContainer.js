import React from 'react'
import StoreContext from '../../StoreContext'
import Navbar from './Navbar';

const NavbarContainer = (props) => {
    return (
        <StoreContext.Consumer>
            { store => {
                return <Navbar
                    sidebar={store.getState().sidebar}
                // sidebar={props.state.sidebar} 
                />
            }
            }
        </StoreContext.Consumer>
    )
}

export default NavbarContainer