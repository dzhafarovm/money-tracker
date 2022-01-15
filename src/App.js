import Container from 'components/Container';
import Header from 'components/Header';
import Modal from 'components/Modal/Modal';

import AuthPages from 'pages/AuthPages';

function App() {
  return (
    <>
      <Header />
      <Container>
        <AuthPages />
        <Modal />
      </Container>
    </>
  );
}

export default App;
