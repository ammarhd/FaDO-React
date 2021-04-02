import React from "react";
import "./help.css";
import image from "./help_fado.png";

import IconButton from "@material-ui/core/IconButton";
import CancelIcon from "@material-ui/icons/Cancel";

function Tutorial(props) {
  return (
    <div className="popup_tutorial">
      <div className="help_fado">
        <img className="help_img" src={image} />
        <IconButton
          aria-label="delete"
          onClick={props.closePopup}
          id="help_close"
        >
          <CancelIcon fontSize="large" />
        </IconButton>
      </div>
    </div>
  );
}

export default Tutorial;
