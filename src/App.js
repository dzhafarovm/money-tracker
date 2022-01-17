import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import authSelectors from 'redux/auth/auth-selectors';
import authOperations from 'redux/auth/auth-operations';

import Container from 'components/Container';
import Header from 'components/Header';
// import Balance from 'components/Balance';
import AuthPages from 'pages/AuthPages';
import HomePage from 'pages/HomePage';
import ExpensesPage from 'pages/ExpensesPage';
import IncomePage from 'pages/IncomePage';
import ReportPage from 'pages/ReportPage';

import stylesBg from 'components/StylesBg/StylesBg.module.css';

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);
  console.log(isFetchingCurrentUser);
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Container>
        <Header />
        <div className={stylesBg.mainBg}></div>

        <Routes>
          <Route path="/" element={<AuthPages />} />
          <Route path="/signup" element={<AuthPages />} />
          <Route path="/signin" element={<AuthPages />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/expenses" element={<ExpensesPage />} />
          <Route path="/income" element={<IncomePage />} />
          <Route path="/report" element={<ReportPage />} />
        </Routes>

        {/* <Balance /> */}
      </Container>
    </>
  );
}

export default App;
