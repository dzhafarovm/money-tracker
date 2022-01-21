import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Container from 'components/Container';
import PrivateRoute from 'routes/PrivateRoute';
import PublicRoute from 'routes/PublicRoute';
import routes from 'routes/routes';

import Header from 'components/Header';
// import AuthPages from 'pages/AuthPages';
// import ExpensesPage from 'pages/ExpensesPage';
// import IncomePage from 'pages/IncomePage';
// import ReportPage from 'pages/ReportPage';
import AnimatedKapusta from './components/AnimatedKapusta';
import authSelectors from 'redux/auth/auth-selectors';
import authOperations from 'redux/auth/auth-operations';

const AuthPages = lazy(() => import('pages/AuthPages'));
const ExpensesPage = lazy(() => import('pages/ExpensesPage'));
const IncomePage = lazy(() => import('pages/IncomePage'));
const ReportPage = lazy(() => import('pages/ReportPage'));

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
          <Suspense fallback={<p>Loading...</p>}>
            <Routes>
              <Route
                path={routes.auth}
                element={<PublicRoute component={<AuthPages />} />}
              />

              <Route
                path={routes.expenses}
                element={<PrivateRoute component={<ExpensesPage />} />}
              />

              <Route
                path={routes.income}
                element={<PrivateRoute component={<IncomePage />} />}
              />

              <Route
                path={routes.report}
                element={<PrivateRoute component={<ReportPage />} />}
              />
            </Routes>
          </Suspense>
          <AnimatedKapusta />
        </Container>

        <Toaster position="top-right" />
      </>
    )
  );
}

export default App;
