import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import routes from 'routes/routes';

const PrivateRoute = ({ component }) => {
  const location = useLocation();

  const { isLoggedIn } = useSelector(state => state.auth);

  if (isLoggedIn) {
    return component;
  }

  return <Navigate to={routes.auth} state={{ from: location }} replace/>;
};
export default PrivateRoute;
