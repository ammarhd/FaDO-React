import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";

import Pop0 from "../../../mainContent/layers/popups/Pop0";
import Pop1 from "../../../mainContent/layers/popups/Pop1";
import Pop2 from "../../../mainContent/layers/popups/Pop2";
import Pop3 from "../../../mainContent/layers/popups/Pop3";

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

function Setup() {
  const [isOpen, setIsOpen] = useState(false);
  const [theId, setTheId] = useState("");

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const togglePopup = (id) => {
    if (id === "00") {
      setTheId((prev) => "00");
      setIsOpen(true);
    } else if (id == "11") {
      setTheId((prev) => "11");
      setIsOpen(true);
    } else if (id == "22") {
      setTheId((prev) => "22");
      setIsOpen(true);
    } else if (id == "33") {
      setTheId((prev) => "33");
      setIsOpen(true);
    }

    setAnchorEl(null);
    //console.log(theId);
  };

  const togglePopup2 = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        SETUP
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
            togglePopup("00");
          }}
        >
          L0 &#62; L1
        </MenuItem>
        <MenuItem
          onClick={() => {
            togglePopup("11");
          }}
        >
          L1 &#62; L2
        </MenuItem>
        <MenuItem
          onClick={() => {
            togglePopup("22");
          }}
        >
          L2 &#62; L3
        </MenuItem>
        <MenuItem
          onClick={() => {
            togglePopup("33");
          }}
        >
          L3
        </MenuItem>
      </StyledMenu>
      {isOpen && theId == "00" && <Pop0 closePopup={togglePopup2} />}
      {isOpen && theId == "11" && <Pop1 closePopup={togglePopup2} />}
      {isOpen && theId == "22" && <Pop2 closePopup={togglePopup2} />}
      {isOpen && theId == "33" && <Pop3 closePopup={togglePopup2} />}
    </div>
  );
}

export default Setup;
