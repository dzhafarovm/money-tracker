import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import authOperations from 'redux/auth/auth-operations';
import style from './AuthForm.module.css';
import sprite from 'components/images/sprite.svg';

const FormSchema = Yup.object().shape({

  email: Yup.string().email().required('Это обязательное поле'),
  password: Yup.string()
    .required('Это обязательное поле')
    .min(6, 'Пароль должен состоять как минимум из 6 символов'),
});

const initialValues = {
  email: '',
  password: '',
};
console.log(ErrorMessage);

const AuthForm = () => {
  const dispatch = useDispatch();

  // const handleReset = {
    
  // }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={FormSchema}
      onSubmit={({ email, password }) => {
        dispatch(authOperations.logIn({ email, password }));
        // onReset = { handleReset }
      }}
    >
      {formik => {
        const { validateForm, values, handleChange, isValid } = formik;

        return (
          <div className={style.container}>
            <h4 className={style.auth}>
              {' '}
              Вы можете авторизоваться с помощью <br /> Google Account:
            </h4>
            <button className={style.googleAuthButton}>
              <svg className={style.googleIcon} width="18" height="18">
                <use href={`${sprite}#google`}></use>
              </svg>
              <span className={style.googletext}>Google</span>
            </button>
            <h4 className={style.auth}>
              {' '}
              Или зайти с помощью e-mail и пароля, <br />
              предварительно зарегистрировавшись:
            </h4>
            <Form>
              <div className={style.formRow}>
                <label className={style.formRowTitle}> <span className={style.asterisk}>{!isValid &&'*'}</span>Электронная почта:</label>
                <Field
                  value={values.email}
                  type="text"
                  name="email"
                  id="email"
                  placeholder="your@email.com"
                  onChange={handleChange}
                  className={style.email}
                />

                <ErrorMessage
                  name="email"
                  component="span"
                  className={style.error}
                />
              </div>

              <div className={style.formRow}>
                <label className={style.formRowTitle}><span className={style.asterisk}>{!isValid &&'*'}</span>Пароль:</label>
                <Field
                  value={values.password}
                  type="password"
                  name="password"
                  id="password"
                  className={style.password}
                  placeholder="Пароль"
                  onChange={handleChange}
                />

                <ErrorMessage
                  name="password"
                  component="span"
                  className={style.error}
                />
              </div>
              <div className={style.authButtons}>
                <button type="submit" className={style.btn}>
                  ВOЙТИ
                </button>

                <button
                  type="button"
                  className={style.btn}
                  onClick={() =>
                    validateForm().then(() => {
                      dispatch(authOperations.register(values));
                    })
                  }
                >
                  РЕГИСТРАЦИЯ
                </button>
              </div>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};
export default AuthForm;
