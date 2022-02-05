const googleAuthURL =
  'https://teamproj-money-tracker.herokuapp.com/api/auth/google';

  const monthsArray = [
  { id: '1', month: '01', rusName: 'январь', engName: 'January' },
  { id: '2', month: '02', rusName: 'февраль', engName: 'February' },
  { id: '3', month: '03', rusName: 'март', engName: 'March' },
  { id: '4', month: '04', rusName: 'апрель', engName: 'April' },
  { id: '5', month: '05', rusName: 'май', engName: 'May' },
  { id: '6', month: '06', rusName: 'июнь', engName: 'June' },
  { id: '7', month: '07', rusName: 'июль', engName: 'July' },
  { id: '8', month: '08', rusName: 'август', engName: 'August' },
  { id: '9', month: '09', rusName: 'сентябрь', engName: 'September' },
  { id: '10', month: '10', rusName: 'октябрь', engName: 'October' },
  { id: '11', month: '11', rusName: 'ноябрь', engName: 'November' },
  { id: '12', month: '12', rusName: 'декабрь', engName: 'December' },
];
  
const categoryName = [
  { type:'costs', value: 'products', label: 'Продукты', svg: '#products' },
  { type:'costs', value: 'alcohol', label: 'Алкоголь', svg: '#cocktail' },
  { type:'costs', value: 'fun', label: 'Развлечения', svg: '#kite' },
  { type:'costs', value: 'health', label: 'Здоровье', svg: '#health' },
  { type:'costs', value: 'transport', label: 'Транспорт', svg: '#car' },
  { type:'costs', value: 'home', label: 'Всё для дома', svg: '#couch' },
  { type:'costs', value: 'technic', label: 'Техника', svg: '#tools' },
  { type:'costs', value: 'utility and phone', label: 'Коммуналка, связь', svg: '#invoice' },
  { type:'costs', value: 'sport and hobby', label: 'Спорт, хобби', svg: '#clay' },
  { type:'costs', value: 'education', label: 'Образование', svg: '#book' },
  { type:'costs', value: 'other', label: 'Прочее', svg: '#ufo' },
  { type:'income', value: 'salary', label: 'ЗП', svg: '#main-salary' },
  { type:'income', value: 'other income', label: 'Доп. доход', svg: '#add-salary' },
];

const Constants = {
  googleAuthURL,
  categoryName,
  monthsArray
};

export default Constants;
