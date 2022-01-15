import Container from 'components/Container';
import Header from 'components/Header';
import Modal from 'components/Modal';

import AuthPages from 'pages/AuthPages';

import { useState } from 'react';

function App() {
  const [modal, setModal] = useState(true);
  const onClose = () => {
    setModal(prev => !prev);
  };

  return (
    <>
      <Header />
      <Container>
        <AuthPages />
        {modal && <Modal onClose={onClose} />}
      </Container>
    </>
  );
}

export default App;
