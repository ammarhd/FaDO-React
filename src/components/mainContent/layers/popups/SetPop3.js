import React, { useState, useEffect } from "react";

import Button from "@material-ui/core/Button";
import Pop3 from "./Pop3";

function SetPopup3(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [theId, setTheId] = useState();

  const togglePopup = (id) => {
    if ((id = "33")) {
      setTheId("33");
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
        color="primary"
        component="span"
        id="layer1Btn"
        onClick={() => {
          togglePopup("33");
        }}
      >
        <h2>{props.name}</h2>
      </Button>
      {isOpen && theId == "33" && <Pop3 closePopup={togglePopup2} />}
    </div>
  );
}

export default SetPopup3;
