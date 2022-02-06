const getByMonth = state => state.transactions.getByMonth;
const addTransaction = state => state.transactions.addTransaction;
const getAll = state => state.transactions.getAll;
const deleteTransaction = state => state.transactions.deleteTransaction;
const getIsFetchingTransactions = state =>
  state.transactions.isFetchingTransactions;

const transactionsSelectors = {
  getByMonth,
  addTransaction,
  getAll,
  deleteTransaction,
  getIsFetchingTransactions,
};

export default transactionsSelectors;
