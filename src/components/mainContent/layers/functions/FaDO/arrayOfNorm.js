var normArray = Array.from(Array(11), () => 0.0);
var normArrayToDisplay = [];

var countNorm = 0;
const arrayOfNorm = (norm, x_axis) => {
  countNorm++;

  for (let i = 0; i < 11; i++) {
    if (norm <= x_axis[i + 1]) {
      normArray[i] += 1;
      break;
    }
  }
  //console.log(normArray);

  //if (norm <= 0.57) {
  //  normArray[0] += 1;
  //} else if (norm <= 1.58) {
  //  normArray[1] += 1;
  //} else if (norm <= 1.59) {
  //  normArray[2] += 1;
  //} else if (norm <= 1.6) {
  //  normArray[3] += 1;
  //} else if (norm <= 1.61) {
  //  normArray[4] += 1;
  //} else if (norm <= 1.62) {
  //  normArray[5] += 1;
  //} else if (norm <= 1.63) {
  //  normArray[6] += 1;
  //} else if (norm <= 1.64) {
  //  normArray[7] += 1;
  //} else if (norm <= 1.65) {
  //  normArray[8] += 1;
  //} else if (norm <= 1.66) {
  //  normArray[9] += 1;
  //} else {
  //  normArray[10] += 1;
  //}
  if (countNorm == 1000) {
    normArrayToDisplay = normArray;
    normArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    countNorm = 0;
  }
};

export { arrayOfNorm, normArrayToDisplay };
