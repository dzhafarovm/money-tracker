import React from 'react';
import { NavLink } from 'react-router-dom';
// import style from './Button.module.css';

const Button = ({ title, route, style}) => {
  return (
    <NavLink
      to={route}
      className={style}
      // className={style.buttonTitle}
      // activeClassName={style.buttonActiveTitle}
    >
      {title}
    </NavLink>
  );
}

export default Button;