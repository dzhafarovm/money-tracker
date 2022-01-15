import Container from 'components/Container';
import Header from 'components/Header';
import Balance from 'components/Balance'

import AuthPages from 'pages/AuthPages';

function App() {
  return (
    <>
      <Header />
      <Container>
        <AuthPages />
      </Container>
      <Container>
        <Balance />
      </Container>
    </>
  );
}

export default App;
