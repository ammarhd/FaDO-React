import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { setTxsFile, txsSelector } from "../../../../redux/slices/txsSlice";
import { useSelector, useDispatch } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
//let
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

import io from "socket.io-client";

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

const Accordion = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, 0.4)",
    borderRadius: "10px",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    borderRadius: "5px",
    borderBottom: "1px solid rgba(0, 0, 0, 0.4)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    borderRadius: "0px 0px 10px 10px",
  },
}))(MuiAccordionDetails);

function ConnectPop(props) {
  // the floating actions animating buttons are
  const classes = useStyles();
  const [expanded, setExpanded] = useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  ////
  const [serverError, setServerError] = useState(false);
  const [helperText, setHelperText] = useState("");
  const [file2, setFile2] = useState();

  const dispatch = useDispatch();

  const socket = () => {
    var url = document.getElementById("urll").value;

    /// first check server urll
    check_server(url);
  };

  const check_server = (url) => {
    var socket = io(url, {
      transports: ["websocket", "polling", "flashsocket"],
    });

    socket.on("connect_error", () => {
      errorMassage();
      socket.close();
    });
    console.log(serverError);
    socket.on("connect", () => {
      validServer(url);
      socket.close();
    });
  };

  const errorMassage = () => {
    setHelperText("Incorrect entry.");
  };

  const validServer = (url) => {
    setHelperText("");
    props.setServer(url);
    console.log(url);
    props.setFetchStatus(true);
    props.closePopup();
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

    props.setState((prevState) => ({ ...prevState, checkTx: true }));

    //wholeCheck();

    props.closePopup();
    //let files = e.target.files;
    //let reader = new FileReader;
    //
  };

  return (
    <div className="popup-import" id="layer1popup">
      <div className="mainFrame">
        <div className="options">
          <Accordion
            square
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
              className="summary"
            >
              <div className="localFile">
                <Typography>Upload Local File</Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails className="details">
              <div className="localFile">
                <div className={classes.root}>
                  <input
                    accept="file/*"
                    className={classes.input}
                    id="contained-button-file2"
                    multiple
                    type="file"
                    onChange={(e) => handleChange2(e)}
                  />
                  <label htmlFor="contained-button-file2">
                    <Button
                      variant="contained"
                      color="default"
                      component="span"
                      id="button-color"
                    >
                      Import
                    </Button>
                  </label>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion
            square
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
              className="summary"
            >
              <div className="localFile">
                <Typography>Connect to A Server</Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails className="details">
              <div className="serverSet">
                <div className="server">
                  <form className={classes.root} noValidate autoComplete="off">
                    {helperText == "" ? (
                      <TextField
                        id="outlined-error-helper-text"
                        id="urll"
                        label="http://localhost:4001"
                        variant="outlined"
                        className="server-input"
                      />
                    ) : (
                      <TextField
                        error
                        id="outlined-error-helper-text"
                        id="urll"
                        label="http://localhost:4001"
                        variant="outlined"
                        className="server-input"
                        helperText={helperText}
                      />
                    )}
                  </form>
                </div>
                <div className="localFile">
                  <Button
                    variant="contained"
                    color="default"
                    onClick={socket}
                    id="button-color"
                  >
                    Connect
                  </Button>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default ConnectPop;
