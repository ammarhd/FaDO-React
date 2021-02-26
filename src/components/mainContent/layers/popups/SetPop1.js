import React, { useState, useEffect } from "react";

import Button from "@material-ui/core/Button";

import Pop1 from "./Pop1";

function SetPopup1(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [theId, setTheId] = useState();

  const togglePopup = (id) => {
    if ((id = "11")) {
      setTheId("11");
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
          togglePopup("11");
        }}
      >
        <h2>{props.name}</h2>
      </Button>
      {isOpen && theId == "11" && <Pop1 closePopup={togglePopup2} />}
    </div>
  );
}

export default SetPopup1;
