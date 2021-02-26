import React, { useState, useEffect } from "react";
import "./popups.css";
import Button from "@material-ui/core/Button";
import Pop3 from "./Pop3";
import { label_type } from "../functions/outputs/visualTxs3";

function SetPopup3(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [theId, setTheId] = useState();
  const [lButton, setLButton] = useState("default");

  const togglePopup = (id) => {
    if ((id = "33")) {
      setTheId("33");
      setIsOpen(true);
    }
  };

  const togglePopup2 = () => {
    setIsOpen(!isOpen);
  };

  const autoLabel = () => {
    if (lButton == "primary") {
      setLButton((prevColor) => "default");
      label_type(0);
    } else {
      setLButton((prevColor) => "primary");
      label_type(1);
    }
  };

  return (
    <div className="pop3_all">
      <div className="pop3_buttons">
        <Button
          variant="contained"
          color="primary"
          component="span"
          id="layer3Btn"
          onClick={() => {
            togglePopup("33");
          }}
        >
          <h2>{props.name}</h2>
        </Button>
        {isOpen && theId == "33" && <Pop3 closePopup={togglePopup2} />}

        <Button
          variant="contained"
          color={lButton}
          onClick={autoLabel}
          component="span"
          id="layer3Btn2"
        >
          <h2>L</h2>
        </Button>
      </div>
    </div>
  );
}

export default SetPopup3;
