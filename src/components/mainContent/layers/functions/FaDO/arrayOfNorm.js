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

  if (countNorm == 1000) {
    normArrayToDisplay = normArray;
    normArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    countNorm = 0;
  }
};

export { arrayOfNorm, normArrayToDisplay };
