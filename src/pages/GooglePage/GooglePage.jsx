import { useDispatch } from 'react-redux';

import authOperations from 'redux/auth/auth-operations';
import Spinner from 'components/Spinner';

const GooglePage = () => {
  const dispatch = useDispatch();
  dispatch(authOperations.googleLogin());

  return <>{<Spinner />}</>;
};

export default GooglePage;
