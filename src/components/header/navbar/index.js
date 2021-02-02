import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Extra from "./extra";
import File from "./file";
import Setup from "./setup";
import Help from "./help";

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
