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
import {
  stream,
  wholeCheck,
  wholeCheck_backend,
  run_backend,
  lengthT,
} from "../../../mainContent/layers/functions/main";

import { l1_txs_to_backend } from "../../../mainContent/layers/functions/backend";
import { update_l3txs_array } from "../../../mainContent/layers/functions/FaDO";

import ConnectPop from "./ConnectPop";
import { w3cwebsocket as W3WebSocket } from "websocket";
import axios from "axios";
//import socketIOClient from "socket.io-client";
import io from "socket.io-client";
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

//const ENDPOINT = "http://localhost:4001";
function File() {
  const [FetchStatus, setFetchStatus] = useState(false);
  const [fetchError, setFetchError] = useState(false);
  //const [data, setData] = useState({ txss: [], isFetching: false });
  //const [socketUrl, setSocketUrl] = useState("ws://localhost:8098");
  const [response, setResponse] = useState("");

  const { status } = useSelector(txsSelector);

  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [file, setFile] = useState("");
  const [file2, setFile2] = useState();
  const [server, setServer] = useState("");

  const [state, setState] = useState({
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

  const handleClose_connect = () => {
    setIsOpen(!isOpen);
  };

  const handleClose_connect2 = () => {
    setIsOpen(!isOpen);
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

  useEffect(() => {
    if (status && state.checkConfig) {
      setTimeout(function () {
        wholeCheck();
      }, 1000);
    }
  }, [state, status]);

  const exportConfig = () => {
    export_config();
    handleClose();
  };

  ///////////socket
  var once = false;
  var txs_to_backend;
  useEffect(() => {
    if (FetchStatus && state.checkConfig) {
      var socket = io(server, {
        transports: ["websocket", "polling", "flashsocket"],
      });
      socket.on("connect_error", () => {
        console.log("error");
        setFetchStatus(false);
        setFetchError(true);
        console.log(fetchError);
        setServer("");
        socket.close();
      });
      socket.on("connect", () => {
        setInterval(() => {
          txs_to_backend = l1_txs_to_backend();
          if (txs_to_backend.length > 0) {
            socket.emit("l1_txs", txs_to_backend);
          }
          if (lengthT < 5000) {
            socket.emit("messege");
            console.log("emitiing");
          }
        }, 1000);

        socket.on("FromAPI", (data) => {
          if (!once) {
            wholeCheck_backend(data[0]);
            //run_backend();
            once = true;
          }
          setResponse(data);
          console.log(lengthT);
        });

        socket.on("l3_txs", (l3Txs) => {
          update_l3txs_array(l3Txs);
        });
      });
    }
  }, [FetchStatus, state]);

  useEffect(() => {
    stream(response);
    //console.log(response);
  }, [response]);

  //// fetch data f

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
        </div>

        <MenuItem onClick={handleClose_connect}>Import</MenuItem>
        {isOpen && (
          <ConnectPop
            closePopup={handleClose_connect2}
            setFetchStatus={setFetchStatus}
            setState={setState}
            setServer={setServer}
            fetchError={fetchError}
          />
        )}
      </StyledMenu>
    </div>
  );
}

export default File;

//<MenuItem label="Folder" onClick={handleChange}>
//          Upload Data
//        </MenuItem>
//        <MenuItem onClick={handleClose}>Close</MenuItem>
