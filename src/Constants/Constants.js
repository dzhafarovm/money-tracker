const googleAuthURL =
  'https://teamproj-money-tracker.herokuapp.com/api/auth/google';

const arrMonthName = [
  { id: '1', name: 'январь', engName: 'January' },
  { id: '2', name: 'февраль', engName: 'February' },
  { id: '3', name: 'март', engName: 'March' },
  { id: '4', name: 'апрель', engName: 'April' },
  { id: '5', name: 'май', engName: 'May' },
  { id: '6', name: 'июнь', engName: 'June' },
  { id: '7', name: 'июль', engName: 'July' },
  { id: '8', name: 'август', engName: 'August' },
  { id: '9', name: 'сентябрь', engName: 'September' },
  { id: '10', name: 'октябрь', engName: 'October' },
  { id: '11', name: 'ноябрь', engName: 'November' },
  { id: '12', name: 'декабрь', engName: 'December' },
];

const monthArr = [
  { id: '1', month: '01' },
  { id: '2', month: '02' },
  { id: '3', month: '03' },
  { id: '4', month: '04' },
  { id: '5', month: '05' },
  { id: '6', month: '06' },
  { id: '7', month: '07' },
  { id: '8', month: '08' },
  { id: '9', month: '09' },
  { id: '10', month: '10' },
  { id: '11', month: '11' },
  { id: '12', month: '12' },
];

const monthRusName = [
  { month: 'Январь', id: '01' },
  { month: 'Февраль', id: '02' },
  { month: 'Март', id: '03' },
  { month: 'Апрель', id: '04' },
  { month: 'Май', id: '05' },
  { month: 'Июнь', id: '06' },
  { month: 'Июль', id: '07' },
  { month: 'Август', id: '08' },
  { month: 'Сентябрь', id: '09' },
  { month: 'Октябрь', id: '10' },
  { month: 'Ноябрь', id: '11' },
  { month: 'Декабрь', id: '12' },
];

const expenses = [
  { value: 'transport', label: 'Транспорт' },
  { value: 'products', label: 'Продукты' },
  { value: 'alcohol', label: 'Алкоголь' },
  { value: 'health', label: 'Здоровье' },
  { value: 'fun', label: 'Развлечения' },
  { value: 'home', label: 'Всё для дома' },
  { value: 'technic', label: 'Техника' },
  { value: 'utility and phone', label: 'Коммуналка, связь' },
  { value: 'sport and hobby', label: 'Спорт, хобби' },
  { value: 'education', label: 'Образование' },
  { value: 'other', label: 'Прочее' },
];

const income = [
  { value: 'salary', label: 'ЗП' },
  { value: 'other income', label: 'Доп. доход' },
];

const categoryName = [
  { value: 'products', label: 'Продукты', svg: '#products' },
  { value: 'alcohol', label: 'Алкоголь', svg: '#cocktail' },
  { value: 'fun', label: 'Развлечения', svg: '#kite' },
  { value: 'health', label: 'Здоровье', svg: '#health' },
  { value: 'transport', label: 'Транспорт', svg: '#car' },
  { value: 'home', label: 'Всё для дома', svg: '#couch' },
  { value: 'technic', label: 'Техника', svg: '#tools' },
  { value: 'utility and phone', label: 'Коммуналка, связь', svg: '#invoice' },
  { value: 'sport and hobby', label: 'Спорт, хобби', svg: '#clay' },
  { value: 'education', label: 'Образование', svg: '#book' },
  { value: 'other', label: 'Прочее', svg: '#ufo' },
  { value: 'salary', label: 'ЗП', svg: '#main-salary' },
  { value: 'other income', label: 'Доп. доход', svg: '#add-salary' },
];

const monthNames = [
  { monthId: '01', label: 'January' },
  { monthId: '02', label: 'February' },
  { monthId: '03', label: 'March' },
  { monthId: '04', label: 'April' },
  { monthId: '05', label: 'May' },
  { monthId: '06', label: 'June' },
  { monthId: '07', label: 'July' },
  { monthId: '08', label: 'August' },
  { monthId: '09', label: 'September' },
  { monthId: '10', label: 'October' },
  { monthId: '11', label: 'November' },
  { monthId: '12', label: 'December' },
];

const Constants = {
  googleAuthURL,
  arrMonthName,
  monthArr,
  monthRusName,
  expenses,
  income,
  monthNames,
  categoryName,
};

export default Constants;
