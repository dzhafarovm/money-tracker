import style from './Container.module.css';
import PropTypes from 'prop-types';

const Container = ({ children }) => (
  <div className={style.container}>{children}</div>
);

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
