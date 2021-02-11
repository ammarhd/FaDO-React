import React, { useState, useEffect } from "react";

import Button from "@material-ui/core/Button";
import { layer1count } from "../functions/FaDO";
import { Grid } from "@material-ui/core";
import Pop1Config from "./Pop1Config";

function SetPopup1(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [count, setCount] = useState(layer1count);

  useEffect(() => {
    const interval = setInterval(() => {
      for (var j = 0; j < 100; j++) {
        setCount((prevCount) => layer1count);
      }
    }, 10);
    return () => clearInterval(interval);
  }, []);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        component="span"
        id="layer1Btn"
        onClick={togglePopup}
      >
        <h2>{props.name}</h2>
      </Button>
      {isOpen && <Pop1Config count={count} closePopup={togglePopup} />}
    </div>
  );
}

export default SetPopup1;
