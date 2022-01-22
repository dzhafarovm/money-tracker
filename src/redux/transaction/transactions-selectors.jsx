const getByMonth = state => state.transactions.transactions;
const addTransaction = state => state.transactions.addTransaction;

const transactionsSelectors = {
  getByMonth,
  addTransaction,
};

export default transactionsSelectors;
