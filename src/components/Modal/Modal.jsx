import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import style from './Modal.module.css';
import sprite from '../images/sprite.svg';

const modalRoot = document.querySelector('#modal-root');

// Добавить в необходимый компонент
// - рендер модалки
// { modal && <Modal onClose={message, onClose} /> }
// - message - если нажать на кнопку "выйти" передать текст "Вы действительно хотите выйти?"
//           - если добавить транзакцию передать текст "Вы уверенны?"
// - onClose - const showModal = () => setModal(prev => !prev);

const Modal = ({ message, onClose }) => {
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

  const closeModalAndFetch = () => {
    if (message === 'Вы действительно хотите выйти?') {
      // fetch для логаута
    }

    if (message === 'Вы уверены?') {
      // fetch для добавления транзакции
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
