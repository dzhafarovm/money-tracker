import { useLocation } from 'react-router-dom';

import routes from 'routes/routes';

import style from './Container.module.css';
import stylesBg from 'components/StylesBg/StylesBg.module.css';

const Container = ({ children }) => {
  const { pathname } = useLocation();

  return (
   <div
      className={
        pathname === routes.auth ? stylesBg.mainBgAuth : stylesBg.mainBg
      }
    >
      <div className={
        pathname === routes.auth ? null : stylesBg.bottomFon
      }>

        <div className={style.container}>{children}</div>
        
      </div>
    </div>
  );
};

export default Container;
