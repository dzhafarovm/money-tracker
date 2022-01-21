import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import routes from 'routes/routes';

const PublicRoute = ({ component }) => {
  const { isLoggedIn } = useSelector(state => state.auth);

  if (isLoggedIn) {
    return <Navigate to={routes.expenses} />;
  }

  return component;
};
export default PublicRoute;
