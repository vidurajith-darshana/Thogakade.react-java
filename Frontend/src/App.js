import React, { Component } from 'react';
import Navbar from "./components/Navigation/Navbar/Navbar";
import SideDrawer from './components/Navigation/SideDrawer/SideDrawer';
import Backdrop from "./components/Backdrop/Backdrop";
import {connect} from "react-redux";

class App extends Component {
    render () {
        return (
            <div>
                <Navbar/>
                <SideDrawer/>
                <Backdrop show={this.props.openDrawer}/>
            </div>
        );
    }
}

const mapDispatchToProps=(state)=>{
    return{
        openDrawer:state.navbarRed.open
    }
}

export default connect(mapDispatchToProps,null)(App);
