import AuthPageTitle from 'components/AuthPageTitle';
import AuthForm from 'components/AuthForm';

import style from './AuthPages.module.css';

const AuthPages = () => {
  return (
    <div className={style.authContainer}>
      <AuthPageTitle />
      <AuthForm />
    </div>
  );
};

export default AuthPages;
