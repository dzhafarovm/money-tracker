import Container from 'components/Container';
import Header from 'components/Header';

import AuthPages from 'pages/AuthPages';
import stylesBg from 'components/StylesBg/StylesBg.module.css';

function App() {
  return (
    <>
      <Header />
      <div className={stylesBg.mainBgAuth}>
        <Container>
          <AuthPages />
        </Container>
      </div>
    </>
  );
}

export default App;
