import React, { useState, useEffect } from "react";

import Button from "@material-ui/core/Button";

import Pop1 from "./Pop1";

import { useSelector } from "react-redux";
import { txsSelector } from "../../../../redux/slices/txsSlice";

import { l1_txs_to_backend } from "../functions/backend";
import { update_l3txs_array } from "../functions/FaDO";
import io from "socket.io-client";

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

  //// working with the expert sys connection

  const { expertSys_status, status, expertSys_url } = useSelector(txsSelector);
  var txs_to_backend = [];

  useEffect(() => {
    if (expertSys_status && status) {
      var socket = io(expertSys_url, {
        transports: ["websocket", "polling", "flashsocket"],
      });

      socket.on("connect_error", () => {
        //alert("There is a connection error with the server!");
        socket.close();
      });
      socket.on("disconnect", () => {
        alert("Server disconnects");
      });

      socket.on("connect", () => {
        setInterval(() => {
          txs_to_backend = l1_txs_to_backend();
          if (txs_to_backend.length > 0) {
            socket.emit("l1_txs", txs_to_backend);
          }
        }, 1000);

        socket.on("l3_txs", (l3Txs) => {
          update_l3txs_array(l3Txs);
          //console.log(l3Txs);
        });
      });
    }
  }, [expertSys_status, expertSys_url]);

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
