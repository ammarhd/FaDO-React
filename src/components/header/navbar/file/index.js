import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

function File() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [file, setFile] = useState("");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (e) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.file, "UTF-8");
    fileReader.onload = (e) => {
      setFile(e.target.result);
    };
    handleClose();
  };
  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        FILE
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem label="Folder" onClick={handleChange}>
          Upload Data
        </MenuItem>
        <MenuItem onClick={handleClose}>Close</MenuItem>
      </StyledMenu>
    </div>
  );
}

export default File;