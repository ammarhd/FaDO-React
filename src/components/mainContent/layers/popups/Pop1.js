import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { layer1count } from "../functions/FaDO";

import IconButton from "@material-ui/core/IconButton";
import CancelIcon from "@material-ui/icons/Cancel";

import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
//let
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

import { setExpertSys } from "../../../../redux/slices/txsSlice";
import { useDispatch } from "react-redux";

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
function Pop1(props) {
  const [count, setCount] = useState(layer1count);
  const [helperText, setHelperText] = useState("");

  const dispatch = useDispatch();

  // the floating actions animating buttons are
  const classes = useStyles();
  const [expanded, setExpanded] = useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      for (var j = 0; j < 100; j++) {
        setCount((prevCount) => layer1count);
      }
    }, 10);
    return () => clearInterval(interval);
  }, []);

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

    socket.on("connect", () => {
      dispatch(setExpertSys(url));
      validServer(url);
      socket.close();
    });
  };

  const errorMassage = () => {
    setHelperText("Incorrect entry.");
  };

  const validServer = (url) => {
    setHelperText("");
    props.closePopup();
  };

  return (
    <div className="popup11-menu" id="layer1popup">
      <div className="txNum123">
        <div>Number of transactions</div>
        <div id="count1">{count}</div>
      </div>
      <div className="connect_expertSys">
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

      <IconButton
        aria-label="delete"
        className={classes.margin}
        onClick={props.closePopup}
        id="closss"
      >
        <CancelIcon fontSize="large" />
      </IconButton>
    </div>
  );
}

export default Pop1;
