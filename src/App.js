import Container from 'components/Container';
import Header from 'components/Header';
import Balance from 'components/Balance';

import AuthPages from 'pages/AuthPages';
import stylesBg from 'components/StylesBg/StylesBg.module.css';

function App() {
  return (
    <>
      <Header />
      <div className={stylesBg.mainBg}>
        <Container>
          <AuthPages />
        </Container>
        <Container>
          <Balance />
        </Container>
      </div>
    </>
  );
}

export default App;
