import { l0, m_t, layer1count, layer2count, layer3count } from "./FaDO.js";

var allTxs = 0;
var flagedTxs = 0;
var count1 = 0;
var count2 = 0;
var count3 = 0;
const numOfTxs = () => {
  setInterval(() => {
    allTxs = l0;
    flagedTxs = m_t;
    count1 = layer1count;
    count2 = layer2count;
    count3 = layer3count;
  }, 10);
};

export { numOfTxs, allTxs, flagedTxs };
