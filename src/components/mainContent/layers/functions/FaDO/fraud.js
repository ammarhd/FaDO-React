const fraudd = (transaction) => {
  var fraud = 0;
  var weighted = require("weighted");
  var tx = transaction.split(",");
  if (tx[3] === "IT" || tx[9] === "IT") {
    fraud = weighted.select([1, 0], [0.01, 0.99]);
    return fraud;
  } else {
    fraud = weighted.select([1, 0], [0.001, 0.999]);
    return fraud;
  }
};

export default fraudd;
