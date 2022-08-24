import React from 'react';

import {
  NavLink,
} from 'react-router-dom';

import getRoutes from '../../utils/routes';

import styles from './navbar.module.css';

export default function NavBar() {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        {
          (getRoutes() || []).map((item) => (
            <NavLink
              to={item.to}
              key={item.id}
              className={({ isActive }) => (isActive ? styles.link__is__active : styles.link__is__not__active)}
            >
              {item.label}
            </NavLink>
          ))
        }
      </div>
    </header>
  );
}
