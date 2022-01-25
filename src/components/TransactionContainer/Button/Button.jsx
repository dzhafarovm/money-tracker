import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Button.module.css';

const Button = ({ title, route}) => {
  return (
    <NavLink
      to={route}
      // сlassName={style.buttonActiveTitle }
      сlassName={({ isActive }) => (isActive ?
        style.active : style.inactive)}
    > {title}            
    </NavLink>
  );
}

export default Button;