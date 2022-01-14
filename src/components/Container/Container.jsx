import style from './Container.module.css';

const Container = ({ children }) => (
  <div className={style.container}>{children}</div>
);

export default Container;
