import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

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

function Extra() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        EXTRA
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose2}>View TX</MenuItem>
      </StyledMenu>

      {isOpen && (
        <div className="popupExtra">
          <Grid container>
            <Grid item xs={12}>
              <div className="txIndication">
                <div>
                  <h4>TX Color Indecation</h4>
                </div>
                <div>
                  <h5>Each color represents TX's amount of money </h5>
                </div>
              </div>
            </Grid>

            <Grid item xs={12}>
              <div className="colorCode">
                <div className="color1">
                  <h4>$ &lt; 101</h4>
                </div>
                <div className="color2">
                  <h4> 100 &gt; $ &lt; 1001 </h4>
                </div>
                <div className="color3">
                  <h4>1000 &gt; $ &lt; 10001 </h4>
                </div>
                <div className="color4">
                  <h4>10000 &gt; $ &lt; 100001 </h4>
                </div>
                <div className="color5">
                  <h4>$ &gt; 100000 </h4>
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

export default Extra;
