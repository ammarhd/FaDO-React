var normArray = Array.from(Array(10), () => 0.0);
var normArrayToDisplay = [];

const arrayOfNorm = (norm, countOfNorm) => {
  var countNorm = countOfNorm;
  if (norm <= 0.57) {
    normArray[0] += 1;
  } else if (norm <= 1.58) {
    normArray[1] += 1;
  } else if (norm <= 1.59) {
    normArray[2] += 1;
  } else if (norm <= 1.6) {
    normArray[3] += 1;
  } else if (norm <= 1.61) {
    normArray[4] += 1;
  } else if (norm <= 1.62) {
    normArray[5] += 1;
  } else if (norm <= 1.63) {
    normArray[6] += 1;
  } else if (norm <= 1.64) {
    normArray[7] += 1;
  } else if (norm <= 1.65) {
    normArray[8] += 1;
  } else if (norm <= 1.66) {
    normArray[9] += 1;
  } else {
    normArray[10] += 1;
  }
  if (countNorm == 1000) {
    normArrayToDisplay = normArray;
    normArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    countNorm = 0;
  }

  return countNorm;
};

export { arrayOfNorm, normArrayToDisplay };
