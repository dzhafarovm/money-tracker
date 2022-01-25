import { useState } from "react";
import TransitionFormModal from './TransitionFormModal';
// import { useBreakpoint } from 'react-use-size';
import style from './TransitionFormModal.module.css';

const AddTransactionButton = () => { 
const [modal, setModal] = useState(false);
//   const mobile = useBreakpoint(767);

  const showModal = () => setModal(prev => !prev);

  return (
    <>
        <button
          type="button"
          className={style.addTransactionButton}
          onClick={showModal}
        >   Добавить транзакцию
          </button>
          {modal && (
        <TransitionFormModal />
      )}
    </>
  );
}

export default AddTransactionButton;