import React,{Component} from 'react';
import classes from './SideDrawer.css';
import Sidebar from "../Sidebar/Sidebar";
import {connect} from "react-redux";

class SideDrawer extends Component{

    render(){
        return(
            <div className={this.props.drawerIsOpen?classes.SideDrawer:classes.Close}>
                <Sidebar />
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return{
        drawerIsOpen:state.navbarRed.open
    }
}

export default connect(mapStateToProps,null)(SideDrawer);