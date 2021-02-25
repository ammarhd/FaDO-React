import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import {
  setConfigFile,
  configsSelector,
} from "../../../../redux/slices/configSlice";
import { setTxsFile, txsSelector } from "../../../../redux/slices/txsSlice";

import { export_config } from "../../../mainContent/layers/functions/exportConfig";
import { wholeCheck } from "../../../mainContent/layers/functions/main";

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

  const [state, setState] = React.useState({
    checkConfig: false,
    checkTx: false,
  });

  const dispatch = useDispatch();
  //const { txs } = useSelector(txsSelector);
  //const { configs } = useSelector(configsSelector);

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
    document.getElementById("contained-button-file").value = "";

    setState((prevState) => ({ ...prevState, checkConfig: true }));

    //wholeCheck();

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
    document.getElementById("contained-button-file2").value = "";

    setState((prevState) => ({ ...prevState, checkTx: true }));

    //wholeCheck();

    handleClose();
    //let files = e.target.files;
    //let reader = new FileReader;
    //
  };

  useEffect(() => {
    if (state.checkTx && state.checkConfig) {
      setTimeout(function () {
        wholeCheck();
      }, 1000);
    }
  }, [state]);

  const exportConfig = () => {
    export_config();
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
        <MenuItem>Save as</MenuItem>
        <MenuItem onClick={exportConfig}>Export</MenuItem>
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
              Open
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
              Import
            </Button>
          </label>
        </div>

        <MenuItem>Connect</MenuItem>
      </StyledMenu>
    </div>
  );
}

export default File;

//<MenuItem label="Folder" onClick={handleChange}>
//          Upload Data
//        </MenuItem>
//        <MenuItem onClick={handleClose}>Close</MenuItem>
