import styles from './Login.module.css'
import React, {useState} from 'react'
import {EmailInput, PasswordInput, Button} from '@ya.praktikum/react-developer-burger-ui-components'
import {Link, Navigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../services/actions/User";

export const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {loginSuccess} = useSelector(store => store.user)

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }

    return (
            <div className={`${styles.container}`}>
                <h2 className={`text text_type_main-medium mb-6`}>Вход</h2>
                <form onSubmit={handleSubmit}>
                <EmailInput
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    name={'email'}
                    extraClass="mb-6"
                />
                <PasswordInput
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    name={'password'}
                    extraClass="mb-6"
                />
                <Button type='primary' size='medium' htmlType={'submit'} extraClass="mb-20">
                    {loginSuccess && <Navigate to="/profile"/>}
                    Войти</Button>
                    </form>
                <p className={`text text_type_main-default text_color_inactive pb-4`}>Вы — новый пользователь?
                    <Link className={styles.link} exact to="/register">Зарегистрироваться</Link>
                </p>
                <p className={`text text_type_main-default text_color_inactive pb-4`}>Забыли пароль?
                    <Link className={styles.link} exact to="/forgot-password">Восстановить пароль</Link>
                </p>
            </div>
    )
}