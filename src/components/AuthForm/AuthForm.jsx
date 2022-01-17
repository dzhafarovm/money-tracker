import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { Toaster } from 'react-hot-toast';
import authOperations from 'redux/auth/auth-operations';

import style from './AuthForm.module.css';

const FormSchema = Yup.object().shape({
  email: Yup.string().email().required("Это обязательное поле"),
  password: Yup.string()
    .required("Это обязательное поле")
    .min(4, "Пароль должен состоять как минимум из 4 символов"),
});

const initialValues = {
  email: "",
  password: ""
};

const AuthForm = () => {

 
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

// Регистрация

  const handlerClickRegister = e => {
    // e.preventDefault();
    dispatch(authOperations.register({ email, password }))
    setEmail('');
    setPassword('');
    
  }

  // Логинизация

  const handleSubmit = e => {
    // e.preventDefault();
    dispatch(authOperations.logIn({ email, password } ));
    setEmail('');
    setPassword('');
  };

  return (
    <Formik
      
      initialValues={initialValues}
      validationSchema={FormSchema}
      onSubmit={(values, resetForm) => {
        // console.log(values)
        handleSubmit(values);
        resetForm();
      }}
      
    >
      {(formik) => { 
        const { errors, touched, validateForm, values, handleChange } = formik;
        console.log(values);
        
        return (
          
          <div className={style.container}>
            <h4 className={style.auth}> Вы можете авторизоваться с помощью <br /> Google Account:</h4>
            <button className={style.googleAuthButton}>
              <svg className={style.googleIcon} width="18" height="18">
                <use href="./images/sprite.svg#google"></use></svg><span className={style.googletext}>
              Google</span></button>
            <h4 className={style.auth}> Или зайти с помощью e-mail и пароля,  <br />предварительно зарегистрировавшись:</h4>
            <Form >
              <div className={style.formRow}>
                <label className={style.formRowTitle}>Электронная почта:</label>
                <Field
                 
                  value={ values.email}
                  type="text"
                  name="email"
                  id="email"
                  placeholder="your@email.com"
                  onChange={handleChange}
                  className={ style.email}
                />
                 {errors.email && touched.email ? <div>{errors.email}</div>: null}
                <ErrorMessage name="email" component="span" className={style.error} />
              </div>

              <div className={style.formRow}>
                <label className={style.formRowTitle}>Пароль:</label>
                <Field
                  value={ values.password}
                  type="password"
                  name="password"
                  id="password"
                  className={ style.password}
                  placeholder="Пароль"
                  onChange={handleChange}
                />
                {errors.password && touched.password ?(<div>{errors.password}</div>): null}
                <ErrorMessage
                  name="password"
                  component="span"
                  className="error"
                />
              </div>
              <div className={ style.authButtons}>
              <button
                type="submit"
                className={style.btnSignin}               
              >
                ВOЙТИ
              </button>

               <button
                  type="button"
                  className={style.btnSignup}
                  onClick={() => validateForm().then(() =>
                  { handlerClickRegister(values) }
                  // console.log()
                  )}
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

