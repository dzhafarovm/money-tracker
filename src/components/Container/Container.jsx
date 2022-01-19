// import { useLocation } from 'react-router-dom';
import style from './Container.module.css';

import stylesBg from 'components/StylesBg/StylesBg.module.css';

const Container = ({ children }) => {
  // const location = useLocation();
  
  // let pageAuth = location.pathname === '/authorization';
  // let bg = pageAuth ? 'mainBgAuth' : 'mainBg'; /**потом поставить переменую  bg вместо имени класса '.mainBgAuth'*/
  
  return (
    
    <div className={stylesBg.mainBgAuth}>
      <div className={style.container}>
        {children}
      </div>
    </div>
  
  )
};

export default Container;
