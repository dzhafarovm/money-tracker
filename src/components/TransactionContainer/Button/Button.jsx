import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Button.module.css';
const Button = ({ title, route, styleActive, styleInActive }) => {
  return (
    <NavLink
      to={route}
      // className={navData => (navData.isActive ? styleActive : styleInActive)}
      className={({ isActive }) => `${isActive ? styleActive : styleInActive}`}
    >
      {title}
    </NavLink>
  );
};
export default Button;
