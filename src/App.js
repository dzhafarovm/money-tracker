import sprite from '../src/images/sprite.svg';

function App() {
  return (
    <>
      <h1>Hello</h1>
      {/* Пример подключения и использования спрайта */}
      <svg>
        <use href={`${sprite}#main-salary`}></use>
      </svg>
    </>
  );
}

export default App;
