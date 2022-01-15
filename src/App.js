import Container from 'components/Container';
import Header from 'components/Header';

import AuthPages from 'pages/AuthPages';

function App() {
  return (
    <>
      <Header />
      <Container>
        <AuthPages />
      </Container>
    </>
  );
}

export default App;
