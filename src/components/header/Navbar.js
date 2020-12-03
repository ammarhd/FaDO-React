import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Extra from "./Extra";

function Navbar() {
  return (
    <Grid>
      <nav className="navbar">
        <ul>
          <li>
            <Button aria-controls="simple-menu" aria-haspopup="true">
              File
            </Button>
          </li>
          <li>
            <Button aria-controls="simple-menu" aria-haspopup="true">
              Setup
            </Button>
          </li>
          <li>
            <Extra />
          </li>
          <li>
            <Button aria-controls="simple-menu" aria-haspopup="true">
              Help
            </Button>
          </li>
        </ul>
      </nav>
    </Grid>
  );
}

export default Navbar;
