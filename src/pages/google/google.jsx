import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';

const Google = () => {
  const dispatch = useDispatch();
  dispatch(authOperations.googleLogin());

  return (
    <>
      <h4>Перенаправляем...</h4>
    </>
  );
};

export default Google;
