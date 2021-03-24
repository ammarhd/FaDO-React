var transactions = [];

export const l1_txs = (tx) => {
  transactions.push(tx);
};

export const l1_txs_to_backend = () => {
  var trx = transactions;
  transactions = [];
  return trx;
};
