import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useBreakpoint } from 'react-use-size';

import Modal from 'components/Modal';
import sprite from 'components/images/sprite.svg';
import authSelectors from 'redux/auth/auth-selectors';

import style from './UserMenu.module.css';

const UserMenu = () => {
  const email = useSelector(authSelectors.getUserEmail);
  const name = email.split('@')[0];
  const letter = name[0].toUpperCase();

  const [modal, setModal] = useState(false);
  const mobile = useBreakpoint(767);

  const showModal = () => setModal(prev => !prev);

  return (
    <>
      <div className={style.navHeader}>
        <div className={style.user}>
          <span className={style.userIcon}>{letter}</span>
          {!mobile && <p className={style.userEmail}>{name}</p>}
        </div>

        <button
          type="button"
          className={style.logoutButton}
          onClick={showModal}
        >
          {mobile && (
            <svg className={style.logoutButtonIcon} width="16" height="16">
              <use href={`${sprite}#logout`}></use>
            </svg>
          )}
          {!mobile && <p className={style.logoutButtonText}>Выйти</p>}
        </button>
      </div>
      {modal && (
        <Modal message="Вы действительно хотите выйти?" onClose={showModal} />
      )}
    </>
  );
};

export default UserMenu;
