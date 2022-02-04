import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import routes from 'routes/routes';

const PublicRoute = ({ component }) => {
  const location = useLocation();
  const { isLoggedIn } = useSelector(state => state.auth);

  const from = location.state?.from?.pathname || routes.expenses;
  if (isLoggedIn) {
    return <Navigate to={from} />;
  }

  return component;
};
export default PublicRoute;

