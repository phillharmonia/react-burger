import styles from './Register.module.css';
import React, { useState } from 'react';
import { EmailInput, PasswordInput, Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import {Link, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {register} from '../../services/actions/User';

export const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const {registerSuccess} = useSelector(store => store.user)
    const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password));
  };
  return (
    <div className={`${styles.container}`}>
      <h2 className={`text text_type_main-medium mb-6`}>Регистрация</h2>
      <form onSubmit={handleSubmit}>
        <Input
          onChange={(e) => setName(e.target.value)}
          value={name}
          name="name"
          isIcon={false}
          extraClass="mb-6"
          placeholder="Имя"
        />
        <EmailInput
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          name="email"
          isIcon={false}
          extraClass="mb-6"
        />
        <PasswordInput
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          name="password"
          extraClass="mb-6"
        />
        <Button type="primary" size="medium" htmlType="submit" extraClass="mb-20">
          Зарегистрироваться
        </Button>
      </form>
      <p className={`text text_type_main-default text_color_inactive pb-4`}>
        Уже зарегистрированы? <Link to="/login" className={styles.link}>Войти</Link>
      </p>
    </div>
  );
};
