import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";

import Tutorial from "./Tutorial";

import { tx_to_visualize } from "../../../mainContent/layers/functions/outputs/visualTxs2";

import { all_features_to_visualize } from "../../../mainContent/layers/functions/outputs/tx_visual";

import "../Navbar.css";
import "./help.css";
import IconButton from "@material-ui/core/IconButton";
import CancelIcon from "@material-ui/icons/Cancel";

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

function Help() {
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [theId, setTheId] = useState("");

  useEffect(() => {
    if (isOpen && theId == "tx_visual") {
      let mainTX = document.getElementById("nTXX");
      mainTX.insertBefore(tx_to_visualize, mainTX.childNodes[0]);

      let tx_parts = document.getElementById("all_features");
      tx_parts.insertBefore(all_features_to_visualize, tx_parts.childNodes[0]);
    }
  }, [isOpen]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClose2 = () => {
    //setAnchorEl(null);
    setIsOpen(!isOpen);
  };

  const toggle_popups = (popup_id) => {
    if (popup_id === "tx_visual") {
      setTheId((prev) => "tx_visual");
      setIsOpen(true);
    } else if (popup_id == "tutorial") {
      setTheId((prev) => "tutorial");
      setIsOpen(true);
    }
    setAnchorEl(null);
  };

  const toFado = () => {
    window.open("https://fado.life", "_blank");
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        HELP
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => {
            toggle_popups("tx_visual");
          }}
        >
          TX Visualization
        </MenuItem>
        <MenuItem
          onClick={() => {
            toggle_popups("tutorial");
          }}
        >
          Tutorial
        </MenuItem>
        <MenuItem onClick={toFado}>FADO</MenuItem>
      </StyledMenu>
      {isOpen && theId == "tutorial" && <Tutorial closePopup={handleClose2} />}
      {isOpen && theId == "tx_visual" && (
        <div className="popupTX_visual">
          <div className="tx_box">
            <div className="tx_title">
              <h3>TX Visualization</h3>
            </div>
          </div>
          <div id="nTXX" className="all_tx_features"></div>

          <div id="all_features" className="tx_features"></div>

          <IconButton
            aria-label="delete"
            onClick={handleClose2}
            id="txVisual_close"
          >
            <CancelIcon fontSize="large" />
          </IconButton>
        </div>
      )}
    </div>
  );
}

export default Help;
