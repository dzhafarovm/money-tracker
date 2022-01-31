import { useState } from 'react';

import TransitionFormModal from './TransitionFormModal';

import style from './TransitionFormModal.module.css';

const AddTransactionButton = () => {
  const [modal, setModal] = useState(false);

  const showModal = () => setModal(prev => !prev);

  return (
    <>
      <button
        type="button"
        className={style.addTransactionButton}
        onClick={showModal}
      >
        Добавить транзакцию
      </button>
      {modal && <TransitionFormModal onClose={showModal} />}
    </>
  );
};

export default AddTransactionButton;
