import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';

import authOperations from 'redux/auth/auth-operations';
import transOperations from 'redux/transaction/transactions-operation';
import balanceOperations from 'redux/balance/balance-operations';
import sprite from '../images/sprite.svg';

import style from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ message, onClose, id }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleCloseByKey);
    return () => {
      window.removeEventListener('keydown', handleCloseByKey);
    };
  });

  const handleCloseByKey = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleCloseByBackdrop = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  const dispatch = useDispatch();

  const closeModalAndFetch = () => {
    if (message === 'Вы действительно хотите выйти?') {
      dispatch(authOperations.logOut());
    }

    if (message === 'Вы уверены?') {
      dispatch(transOperations.deleteTransaction(id));
      dispatch(balanceOperations.getCurrentUserBalance());
    }

    onClose();
  };

  return createPortal(
    <div className={style.overlay} onClick={handleCloseByBackdrop}>
      <div className={style.modal}>
        <button className={style.closeBtn} onClick={onClose}>
          <svg className={style.icon}>
            <use href={`${sprite}#close`}></use>
          </svg>
        </button>
        <p className={style.text}>{message}</p>
        <div className={style.btnBlock}>
          <button className={style.btn} onClick={closeModalAndFetch}>
            Да
          </button>
          <button className={style.btn} onClick={onClose}>
            Нет
          </button>
        </div>
      </div>
    </div>,
    modalRoot,
  );
};

export default Modal;
