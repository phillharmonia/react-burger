import styles from './Login.module.css'
import React from 'react'
import {EmailInput, PasswordInput, Button} from '@ya.praktikum/react-developer-burger-ui-components'
import {Link} from "react-router-dom";

export const LoginPage = () => {
    const [value, setValue] = React.useState('')
    const onChange = e => {
        setValue(e.target.value)
    }
    return (
            <div className={`${styles.container}`}>
                <h2 className={`text text_type_main-medium mb-6`}>Вход</h2>
                <EmailInput
                    onChange={onChange}
                    value={value}
                    name={'email'}
                    isIcon={false}
                    extraClass="mb-6"
                />
                <PasswordInput
                    onChange={onChange}
                    value={value}
                    name={'password'}
                    extraClass="mb-6"
                />
                <Button type='primary' size='medium' htmlType={'button'} extraClass="mb-20">Войти</Button>
                <p className={`text text_type_main-default text_color_inactive pb-4`}>Вы — новый пользователь?
                    <Link className={styles.link} to="/register">Зарегистрироваться</Link>
                </p>
                <p className={`text text_type_main-default text_color_inactive pb-4`}>Забыли пароль?
                    <Link className={styles.link} to="/forgot-password">Восстановить пароль</Link>
                </p>
            </div>
    )
}