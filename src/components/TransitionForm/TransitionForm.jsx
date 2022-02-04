import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import ru from 'date-fns/locale/ru';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import transOperations from 'redux/transaction/transactions-operation.jsx';
import DropDownList from './DropDownList';
import Constants from 'Constants/';
import sprite from 'components/images/sprite.svg';

import style from './TransitionForm.module.css';

registerLocale('ru', ru);

const FormSchema = Yup.object().shape({
  value: Yup.number().min(1).positive().integer().required('Required'),
  name: Yup.string().required('Required'),
  categories: Yup.string().required('Required'),
});

const TransitionForm = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [placeholderCategories, setPlaceholderCategories] = useState('');
  const dispatch = useDispatch();
  const location = useLocation();
  const nameUrl = location.pathname;
  const typeForm = nameUrl.includes('expenses');
  const type = typeForm ? 'costs' : 'income';
  const options = typeForm ? Constants.expenses : Constants.income;

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(FormSchema),
  });

  const getDate = newdata => {
    setSelectedDate(newdata);
  };

  useEffect(() => {
    getDate(selectedDate);

    setValue('date', selectedDate);
  }, [selectedDate, setValue]);

  useEffect(() => {
    const checkClick = e => {
      if (open) {
        setOpen(false);
      }
    };
    document.addEventListener('click', checkClick);
    return () => {
      document.removeEventListener('click', checkClick);
    };
  }, [open]);

  const onSubmit = async data => {
    const { date, name, value, categories } = data;
    const categoryEng = options.filter(data => data.label === categories);

    const arr = date.toLocaleDateString().split('.');

    const searchMonthArr = Constants.monthNames.filter(
      el => el.monthId === arr[1],
    );

    const newData = {
      type,
      day: arr[0],
      month: searchMonthArr[0].monthId,
      year: arr[2],
      description: name,
      category: categoryEng[0].value,
      sum: value,
    };

    dispatch(transOperations.addTransaction(newData));

    reset({
      name: '',
      categories: '',
      value: '',
    });
  };

  const clearForm = () => {
    reset({
      name: '',
      categories: '',
      value: '',
    });
  };

  const changerPlaceholder = (label, value) => {
    setPlaceholderCategories({ label, value });
    setOpen(false);
  };

  useEffect(() => {
    setValue('categories', placeholderCategories.label);
  }, [placeholderCategories, setValue]);

  return (
    <div className={style.allContainer}>
      <form
        autoComplete="off"
        className={style.form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={style.inputContainer}>
          <div className={style.formContainer}>
            <svg className={style.calendar}>
              <use href={`${sprite}#calendar`}></use>
            </svg>
            <DatePicker
              type="date"
              {...register('date')}
              locale="ru"
              selected={selectedDate}
              onChange={date => setSelectedDate(date)}
              dateFormat="dd.MM.yyyy"
              maxDate={new Date()}
              className={style.inputeDate}
            />
          </div>
          <div className={style.inputWrapper}>
            <input
              placeholder={typeForm ? 'Описание товара' : 'Описание дохода'}
              className={style.input}
              {...register('name', { required: true })}
            />
            {errors.name && <p className={style.errors}>Обязательное поле</p>}
          </div>
          <div className={style.category}>
            <input
              placeholder={typeForm ? 'Категория товара' : 'Категория дохода'}
              className={style.inputCategoty}
              {...register('categories', { required: true })}
              onClick={() => setOpen(!open)}
              readOnly
            />
            {errors.name && <p className={style.errors}>Обязательное поле</p>}
            {open ? (
              <div className={style.icon}>
                <svg className={style.arrowUp}>
                  <use href={`${sprite}#arrow-right`}></use>
                </svg>
              </div>
            ) : (
              <div className={style.icon}>
                <svg className={style.arrowDown}>
                  <use href={`${sprite}#arrow-right`}></use>
                </svg>
              </div>
            )}
            {open && (
              <DropDownList
                typeForm={typeForm}
                changerDescription={changerPlaceholder}
                options={options}
              />
            )}
          </div>
          <div className={style.valueContainer}>
            <input
              placeholder="0,00"
              className={style.inputValue}
              {...register('value', { required: true })}
            />
            {errors.name && <p className={style.errors}>Обязательное поле</p>}
            <svg className={style.calculator}>
              <use href={`${sprite}#calculator`}></use>
            </svg>
          </div>
        </div>
        <div className={style.btnContainer}>
          <button type="submit" className={style.formBtn}>
            Ввод
          </button>
          <button
            type="button"
            className={style.formBtn}
            onClick={handleSubmit(clearForm)}
          >
            Очистить
          </button>
        </div>
      </form>
    </div>
  );
};

export default TransitionForm;
