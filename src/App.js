import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Header from 'components/Header';
import Balance from 'components/Balance';
import Container from 'components/Container';
import AnimatedKapusta from 'components/AnimatedKapusta';
import Spinner from 'components/Spinner';

import PrivateRoute from 'routes/PrivateRoute';
import PublicRoute from 'routes/PublicRoute';
import authSelectors from 'redux/auth/auth-selectors';
import authOperations from 'redux/auth/auth-operations';
import routes from 'routes/routes';

const AuthPages = lazy(() => import('pages/AuthPages'));
const ExpensesPage = lazy(() => import('pages/ExpensesPage'));
const IncomePage = lazy(() => import('pages/IncomePage'));
const ReportPage = lazy(() => import('pages/ReportPage'));
const GooglePage = lazy(() => import('pages/GooglePage'));

function App() {
  const { pathname } = useLocation();
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
          {pathname === routes.auth ? <Balance /> : null}

          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route
                path={routes.auth}
                element={<PublicRoute component={<AuthPages />} />}
              />

              <Route
                path={routes.google}
                element={<PublicRoute component={<GooglePage />} />}
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

          {pathname === routes.auth ? <AnimatedKapusta /> : null}
        </Container>

        <Toaster position="top-right" />
      </>
    )
  );
}

export default App;
