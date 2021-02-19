import React, { useState } from "react";

import "./popups.css";
import Button from "@material-ui/core/Button";

import Pop0 from "./Pop0";

function SetPopup0(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [theId, setTheId] = useState();

  const togglePopup = (id) => {
    if ((id = "00")) {
      setTheId("00");
      setIsOpen(true);
    }
  };

  const togglePopup2 = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="default"
        component="span"
        id="layer1Btn"
        onClick={() => {
          togglePopup("00");
        }}
      >
        <h2>{props.name}</h2>
      </Button>
      {isOpen && theId == "00" && <Pop0 closePopup={togglePopup2} />}
    </div>
  );
}

export default SetPopup0;
