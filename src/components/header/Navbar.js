import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Extra from "./Extra";
import File from "./File";
import Setup from "./Setup";
import Help from "./Help";

function Navbar() {
  return (
    <Grid>
      <nav className="navbar">
        <ul>
          <li>
            <File />
          </li>
          <li>
            <Setup />
          </li>
          <li>
            <Extra />
          </li>
          <li>
            <Help />
          </li>
        </ul>
      </nav>
    </Grid>
  );
}

export default Navbar;
