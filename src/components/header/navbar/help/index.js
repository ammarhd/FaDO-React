import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import "../Navbar.css";
import "./help.css";

import image1 from "../../../mainContent/layers/functions/flags/AT.png";
import image2 from "../../../mainContent/layers/functions/flags/FR.png";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

function Help() {
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClose2 = () => {
    setAnchorEl(null);
    setIsOpen(!isOpen);
  };

  const toFado = () => {
    window.open("https://fado.life", "_blank");
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        HELP
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose2}>TX Visualization</MenuItem>
        <MenuItem onClick={handleClose}>Tutorial</MenuItem>
        <MenuItem onClick={toFado}>FADO</MenuItem>
      </StyledMenu>
      {isOpen && (
        <div className="popupExtra">
          <Grid container>
            <Grid item xs={12}>
              <div className="txIndication">
                <div>
                  <h3>TX Visualization</h3>
                </div>
              </div>
              <div className="nTX">
                <div className="nLabel">?</div>
                <div className="nScountry">
                  <img className="d" src={image1} />
                </div>
                <div className="nSlegal"></div>
                <div className="nColor"></div>
                <div className="nRlegal"></div>
                <div className="nRcountry">
                  <img className="d" src={image2} />
                </div>
              </div>
            </Grid>

            <Grid item xs={12}>
              <div className="colorCode">
                <div className="ex1">
                  <div className="ex11">
                    <div className="ex111">Labels</div>
                    <div className="ex1111">
                      <span style={{ color: "#0E4AE2" }}>Normal </span>/
                      <span style={{ color: "#CE3131" }}> Fraud </span>/
                      <span style={{ color: "#020202" }}> Default </span>
                    </div>
                  </div>

                  <div className="ex12">
                    <div className="nLabelN">N</div>
                    <div className="nLabelF">F</div>
                    <div className="nLabel">?</div>
                    <div className="nScountry blur">
                      <img className="d" src={image1} />
                    </div>
                    <div className="nSlegal blur"></div>
                    <div className="nColor blur"></div>
                    <div className="nRlegal blur"></div>
                    <div className="nRcountry blur">
                      <img className="d" src={image2} />
                    </div>
                  </div>
                </div>
                <div className="ex1">
                  <div className="ex11">Sender Country</div>
                  <div className="ex12">
                    <div className="nLabel blur">?</div>
                    <div className="nScountry">
                      <img className="d" src={image1} />
                    </div>
                    <div className="nSlegal blur"></div>
                    <div className="nColor blur"></div>
                    <div className="nRlegal blur"></div>
                    <div className="nRcountry blur">
                      <img className="d" src={image2} />
                    </div>
                  </div>
                </div>
                <div className="ex1">
                  <div className="ex11">
                    <div className="ex111">Sender Type</div>
                    <div className="ex1111">
                      <span style={{ color: "#FFFFFF" }}> Legal </span>/
                      <span style={{ color: "#47a0f8" }}> Natural </span>
                    </div>
                  </div>
                  <div className="ex12">
                    <div className="nLabel blur">?</div>
                    <div className="nScountry blur">
                      <img className="d" src={image1} />
                    </div>
                    <div className="nSlegal1">
                      <div
                        className="nSlegal2"
                        style={{ marginBottom: "5px" }}
                      ></div>
                      <div className="nSlegal3"></div>
                    </div>
                    <div className="nColor blur"></div>
                    <div className="nRlegal blur"></div>
                    <div className="nRcountry blur">
                      <img className="d" src={image2} />
                    </div>
                  </div>
                </div>
                <div className="ex1">
                  <div className="ex11">Amount</div>
                  <div className="ex12">
                    <div className="nLabel blur">?</div>
                    <div className="nScountry blur">
                      <img className="d" src={image1} />
                    </div>
                    <div className="nSlegal blur"></div>
                    <div className="nColorr ">
                      <div className="nColor1 ">$ &gt; 100000 </div>
                      <div
                        className="nColor2 "
                        style={{ backgroundColor: "#5b5b5b" }}
                      >
                        10000 &gt; $ &lt; 100001{" "}
                      </div>
                      <div
                        className="nColor2 "
                        style={{ backgroundColor: "#a0a0a0" }}
                      >
                        1000 &gt; $ &lt; 10001{" "}
                      </div>
                      <div
                        className="nColor2 "
                        style={{ backgroundColor: "#e7e7e7", color: "#000000" }}
                      >
                        100 &gt; $ &lt; 1001{" "}
                      </div>
                      <div
                        className="nColor2 "
                        style={{ backgroundColor: "#ffffff", color: "#000000" }}
                      >
                        $ &lt; 101
                      </div>
                    </div>

                    <div className="nRlegal blur"></div>
                    <div className="nRcountry blur">
                      <img className="d" src={image2} />
                    </div>
                  </div>
                </div>
                <div className="ex1">
                  <div className="ex11">
                    <div className="ex111">Receiver Type</div>
                    <div className="ex1111">
                      <span style={{ color: "#FFFFFF" }}> Legal </span>/
                      <span style={{ color: "#47a0f8" }}> Natural </span>
                    </div>
                  </div>
                  <div className="ex12">
                    <div className="nLabel blur">?</div>
                    <div className="nScountry blur">
                      <img className="d" src={image1} />
                    </div>
                    <div className="nSlegal blur"></div>
                    <div className="nColor blur"></div>
                    <div className="nRlegal1">
                      <div
                        className="nSlegal3"
                        style={{ marginBottom: "5px" }}
                      ></div>
                      <div className="nSlegal2"></div>
                    </div>
                    <div className="nRcountry blur">
                      <img className="d" src={image2} />
                    </div>
                  </div>
                </div>
                <div className="ex1">
                  <div className="ex11">Receiver Country</div>
                  <div className="ex12">
                    <div className="nLabel blur">?</div>
                    <div className="nScountry blur">
                      <img className="d" src={image1} />
                    </div>
                    <div className="nSlegal blur"></div>
                    <div className="nColor blur"></div>
                    <div className="nRlegal blur"></div>
                    <div className="nRcountry">
                      <img className="d" src={image2} />
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleClose2}
            id="closExtra"
          >
            Close
          </Button>
        </div>
      )}
    </div>
  );
}

export default Help;
