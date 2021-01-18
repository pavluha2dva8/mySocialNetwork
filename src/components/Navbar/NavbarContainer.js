import React from 'react'
import { connect } from 'react-redux';
import Navbar from './Navbar';

/* 

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

*/

let mapStateToProps = (state) => {
    return {
        sidebar: state.sidebar
    }
}
const NavbarContainer = connect(mapStateToProps)(Navbar)

export default NavbarContainer