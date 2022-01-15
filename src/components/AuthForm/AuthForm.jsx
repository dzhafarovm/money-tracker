import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import style from './AuthForm.module.css';

const SignInSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),

  password: Yup.string()
    .required("Password is required")
    .min(4, "Password is too short - should be 4 chars minimum"),
});

const initialValues = {
  email: "",
  password: ""
};

const SignInForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignInSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => {
        const { errors, touched, isValid, dirty } = formik;
        return (
          <div className={style.container}>
            <h4 className={style.auth}> Вы можете авторизоваться с помощью <br /> Google Account:</h4>
            <button className={style.googleAuthButton}>Google</button>
            <h4 className={style.auth}> Или зайти с помощью e-mail и пароля,  <br /> зарегистрировавшись:</h4>
            <Form>
              <div className={style.formRow}>
                <label className={style.formRowTitle}>Электронная почта:</label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  placeholder="your@email.com"
                  className={errors.email && touched.email ? 
                  style.inputError : null}
                />
                <ErrorMessage name="email" component="span" className="error" />
              </div>

              <div className={style.formRow}>
                <label className={style.formRowTitle}>Пароль:</label>
                <Field
                  type="password"
                  name="password"
                  id="password"
                  className={errors.password && touched.password ? 
                    "input-error" : null}
                  placeholder="••••••••"
                />
                <ErrorMessage
                  name="password"
                  component="span"
                  className="error"
                />
              </div>
              <div className={ style.authButtons}>
              <button
                type="submit"
                className={!(dirty && isValid) ? style.disabledBtn : style.btn}
                disabled={!(dirty && isValid)}
              >
                Войти
              </button>

               <button
                type="submit"
                className={!(dirty && isValid) ? "disabled-btn" : ""}
                disabled={!(dirty && isValid)}
              >
                Регистрация
              </button>
              </div>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};
export default SignInForm;