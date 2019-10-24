import React from 'react';
import {classes} from './sidebarStyle'

function SidebarAddLogo() {
    return(
        <div>
            <div className = {classes.addPick}>
            <img src={require('./plus.svg')} className ={classes.addPickIcon} alt="plus icon" />
            <p className = {classes.addPickText}>Add logo</p>
            </div>
        </div>
    )
};
export default SidebarAddLogo;