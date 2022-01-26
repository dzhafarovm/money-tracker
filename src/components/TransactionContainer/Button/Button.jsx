import React from 'react';
import { NavLink } from 'react-router-dom';

const Button = ({ title, route, styleActive, styleInActive }) => {
  return (
    <NavLink
      to={route}
      className={({ isActive }) => `${isActive ? styleActive : styleInActive}`}
    >
      {title}
    </NavLink>
  );
};
export default Button;
