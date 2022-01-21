import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import routes from 'routes/routes';

const PrivateRoute = ({ component }) => {
  const { isLoggedIn } = useSelector(state => state.auth);

  if (isLoggedIn) {
    return component;
  }

  return <Navigate to={routes.auth} />;
};
export default PrivateRoute;
