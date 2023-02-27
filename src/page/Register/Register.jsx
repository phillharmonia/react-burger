import styles from './Register.module.css'
import React from 'react'
import { EmailInput, PasswordInput, Input, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link } from "react-router-dom";

export const RegisterPage = () => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const onFormSubmit = (e) => {
        e.preventDefault();
    }
    return (
            <div className={`${styles.container}`}>
                <h2 className={`text text_type_main-medium mb-6`}>Регистрация</h2>
                <form onSubmit={onFormSubmit}>
                <Input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    isIcon={false}
                    extraClass="mb-6"
                    placeholder={'Имя'}
                />
                <EmailInput
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    isIcon={false}
                    extraClass="mb-6"
                />
                <PasswordInput
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    extraClass="mb-6"
                />
                <Button type='primary' size='medium' htmlType={'button'} extraClass="mb-20">Зарегистрироваться</Button>
                <p className={`text text_type_main-default text_color_inactive pb-4`}>Уже зарегистрированы?
                    <Link to="/login" className={styles.link}>Войти</Link>
                </p>
                </form>
            </div>
    )
}