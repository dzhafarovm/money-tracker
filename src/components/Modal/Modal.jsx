import { createPortal } from 'react-dom';
import style from './Modal.module.css';
import sprite from '../images/sprite.svg';
import { useEffect } from 'react';

const modalRoot = document.querySelector('#modal-root');

// Добавить в необходимый компонент
// - рендер модалки
// { modal && <Modal onClose={onClose} /> }
// - логика закрытия
// import { useState } from 'react';
//   const [modal, setModal] = useState(true);
//   const onClose = () => {
//     setModal(prev => !prev);
//   };

// Когда будут готовы все компоненты выход и добавление убрать дефолтное значение
const Modal = ({ message = 'Вы действительно хотите выйти?', onClose }) => {
  // const [modal, setModal] = useState(true);

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
