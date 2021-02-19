import React, { useState, useEffect } from "react";

import Button from "@material-ui/core/Button";
import Pop2 from "./Pop2";

function SetPopup2(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [theId, setTheId] = useState();

  const togglePopup = (id) => {
    if ((id = "22")) {
      setTheId("22");
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
          togglePopup("22");
        }}
      >
        <h2>{props.name}</h2>
      </Button>
      {isOpen && theId == "22" && <Pop2 closePopup={togglePopup2} />}
    </div>
  );
}

export default SetPopup2;
