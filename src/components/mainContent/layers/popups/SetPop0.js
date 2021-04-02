import React, { useState } from "react";

import "./popups.css";
import Button from "@material-ui/core/Button";
import RefreshIcon from "@material-ui/icons/Refresh";

import Pop0 from "./Pop0";
import { wholeCheck } from "../functions/main";

import { useSelector, useDispatch } from "react-redux";
import { txsSelector } from "../../../../redux/slices/txsSlice";
import {
  refreshSelector,
  setRefreshStatus,
} from "../../../../redux/slices/refreshSlice";

function SetPopup0(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [theId, setTheId] = useState();

  const dispatch = useDispatch();
  const { status } = useSelector(txsSelector);
  const { refreshStatus } = useSelector(refreshSelector);

  const togglePopup = (id) => {
    if ((id = "00")) {
      setTheId("00");
      setIsOpen(true);
    }
  };

  const togglePopup2 = () => {
    setIsOpen(!isOpen);
  };

  const refresh = () => {
    if (status) {
      if (refreshStatus) {
        dispatch(setRefreshStatus());
      }
      wholeCheck();
      //alert("The system is refreshed!");
    }
  };

  return (
    <div className="layer0buttons">
      <Button
        variant="contained"
        color="default"
        onClick={refresh}
        component="span"
        id="layer0Btn2"
      >
        <RefreshIcon />
      </Button>

      <Button
        variant="contained"
        color="default"
        component="span"
        id="layer0Btn1"
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
