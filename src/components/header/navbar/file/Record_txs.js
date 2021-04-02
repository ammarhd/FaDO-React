import React, { useState } from "react";
import Button from "@material-ui/core/Button";

import {
  setRecordStatus,
  recordSelector,
} from "../../../../redux/slices/recordingSlice";
import { useSelector, useDispatch } from "react-redux";

import IconButton from "@material-ui/core/IconButton";
import CancelIcon from "@material-ui/icons/Cancel";

import "./file.css";
function Record_txs(props) {
  const dispatch = useDispatch();
  const { record, record_text, record_color } = useSelector(recordSelector);

  const [recordingColor, setRecordingColor] = useState(record_color);
  const [recordingText, setRecordingText] = useState(record_text);

  const record_stop = () => {
    if (record) {
      dispatch(setRecordStatus(["default", "Start Recording"]));
      setRecordingColor("default");
      setRecordingText("Start Recording");
      //alert("Recording is finished!");
    } else {
      dispatch(setRecordStatus(["secondary", "Stop Recording"]));
      setRecordingColor("secondary");
      setRecordingText("Stop Recording");
      //alert("Transactions started to be recorded!");
    }
  };

  return (
    <div className="popup_export_tx">
      <div className="recording_buttons">
        <Button
          variant="contained"
          color={recordingColor}
          onClick={record_stop}
          id="record_button"
        >
          {recordingText}
        </Button>
      </div>

      <IconButton aria-label="delete" onClick={props.closePopup} id="closss">
        <CancelIcon fontSize="large" />
      </IconButton>
    </div>
  );
}

export default Record_txs;
