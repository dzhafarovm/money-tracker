import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Container from 'components/Container';
import PrivateRoute from 'routes/PrivateRoute';
import routes from 'routes/routes';

import Header from 'components/Header';
import AuthPages from 'pages/AuthPages';
// import ExpensesPage from 'pages/ExpensesPage';
// import IncomePage from 'pages/IncomePage';
import ReportPage from 'pages/ReportPage';

import authSelectors from 'redux/auth/auth-selectors';
import authOperations from 'redux/auth/auth-operations';

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <>
        <Header />
        <Container>
          <Routes>
            <Route path={routes.home} element={<AuthPages />} />

            {/*           
          <Route path="/expenses" element={<ExpensesPage />} />
          <Route path="/income" element={<IncomePage />} /> */}
            <Route
              path={routes.report}
              element={<PrivateRoute component={<ReportPage />} />}
            />
          </Routes>
        </Container>

        <Toaster position="top-right" />
      </>
    )
  );
}

export default App;
