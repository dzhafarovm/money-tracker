const getByMonth = state => state.transactions.transactions;
const addTransaction = state => state.transactions.addTransaction;
const getAll = state => state.transactions.getAll;

const transactionsSelectors = {
  getByMonth,
  addTransaction,
  getAll,
};

export default transactionsSelectors;
