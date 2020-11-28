import React from "react"
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

function Navbar(){
    return(
        <Grid>
            <nav className="navbar">
                <ul>
                    <li><Button>File</Button></li>
                    <li><Button>Setup</Button></li>
                    <li><Button>Extra</Button></li>
                    <li><Button>Help</Button></li>
                </ul>
            </nav>
        </Grid>

    )
}

export default Navbar