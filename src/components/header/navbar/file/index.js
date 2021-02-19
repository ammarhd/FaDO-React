import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { setConfigFile } from "../../../../features/configSlice";
import { setTxsFile } from "../../../../features/txsSlice";

import { makeStyles } from "@material-ui/core/styles";

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

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
}));

function File() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const [file, setFile] = useState("");
  const [file2, setFile2] = useState();
  const dispatch = useDispatch();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (e) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      var target = e.target;
      var data = JSON.parse(target.result);
      setFile(data);

      dispatch(setConfigFile(data));
    };
    //document.getElementById("btnsubmit").value = "";

    handleClose();
    //let files = e.target.files;
    //let reader = new FileReader;
    //
  };

  const handleChange2 = (e) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      var target = e.target;
      var data = JSON.parse(target.result);
      setFile2(data);

      dispatch(setTxsFile(data));
    };
    //document.getElementById("btnsubmit2").value = "";

    handleClose();
    //let files = e.target.files;
    //let reader = new FileReader;
    //
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
        <MenuItem>Save as</MenuItem>
        <MenuItem>Export</MenuItem>
        <MenuItem>Import</MenuItem>
        <MenuItem>Connect</MenuItem>
        <div className={classes.root}>
          <input
            accept="file/*"
            className={classes.input}
            id="contained-button-file"
            multiple
            type="file"
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="contained-button-file">
            <Button color="primary" component="span" id="black">
              Configration file
            </Button>
          </label>
          <br />
          <input
            accept="file/*"
            className={classes.input}
            id="contained-button-file2"
            multiple
            type="file"
            onChange={(e) => handleChange2(e)}
          />
          <label htmlFor="contained-button-file2">
            <Button color="primary" component="span" id="black">
              Dataset file
            </Button>
          </label>
        </div>
      </StyledMenu>
    </div>
  );
}

export default File;

//<MenuItem label="Folder" onClick={handleChange}>
//          Upload Data
//        </MenuItem>
//        <MenuItem onClick={handleClose}>Close</MenuItem>
