import React from 'react';
import classes from './Sidebar.css';
import NavItem from "../NavItem/NavItem";

const sidebar =()=>{

    const items=["Customer","Item","Place-Order","Orders"];

    const navItems=items.map((item,index)=>(
        <div key={index} className={classes.Item}>
            &nbsp;
            &nbsp;
            <NavItem link={"/"+item}>{"  "+item+"  "}</NavItem>
        </div>
    ))
    return(
        <div className={classes.Sidebar}>
            {navItems}
        </div>
    );
}

export default sidebar;