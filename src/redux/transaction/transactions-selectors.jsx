const getByMonth = state => state.transactions.getByMonth;
const addTransaction = state => state.transactions.addTransaction;
const getAll = state => state.transactions.getAll;
const deleteTransaction = state => state.transactions.deleteTransaction;

const transactionsSelectors = {
  getByMonth,
  addTransaction,
  getAll,
  deleteTransaction,
};

export default transactionsSelectors;
