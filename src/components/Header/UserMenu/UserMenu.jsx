import { useState } from 'react';
import { useBreakpoint } from 'react-use-size';

import Modal from 'components/Modal';

import style from './UserMenu.module.css';
import sprite from 'components/images/sprite.svg';

const UserMenu = () => {
  const [modal, setModal] = useState(true);
  const mobile = useBreakpoint(767);

  const onClose = () =>  setModal(prev => !prev); 
  return (
    <>
      <div className={style.navHeader}>
        <div className={style.user}>
          <span className={style.userIcon}>U</span>
          {!mobile && <p className={style.userEmail}>User</p>}
        </div>

        <button type="button" className={style.logoutButton} onClick={onClose}>
          {mobile && (
            <svg className={style.logoutButtonIcon} width="16" height="16">
              <use href={`${sprite}#logout`}></use>
            </svg>
          )}
          {!mobile && <p className={style.logoutButtonText}>Выйти</p>}
        </button>
      </div>
      {modal && <Modal onClose={onClose} />}
    </>
  );
};

export default UserMenu;