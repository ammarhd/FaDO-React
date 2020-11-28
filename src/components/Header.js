import React from "react"
import Grid from '@material-ui/core/Grid';
import Navbar from './header/Navbar'
import Logo from './header/Logo'

import './Header.css';

function Header(){
    return(
        <div className = "header">
            <Grid container spacing={0}>
                <Grid item xs = {12} sm = {5}>
                    <Navbar/>
                </Grid>
                <Grid item xs = {12} sm = {2}>
                    <div className="navbar"><Logo/></div>
                </Grid>
                <Grid item xs = {12} sm = {5}>
                    <div className="navbar"></div>
                    
                </Grid>
            </Grid>
        </div>

    )
}

export default Header