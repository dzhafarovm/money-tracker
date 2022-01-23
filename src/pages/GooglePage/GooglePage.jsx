import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import Spinner from 'components/Spinner';

const GooglPage = () => {
  const dispatch = useDispatch();
  dispatch(authOperations.googleLogin());

  return <>{<Spinner />}</>;
};

export default GooglPage;
