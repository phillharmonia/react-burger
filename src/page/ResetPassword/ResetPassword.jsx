import styles from './ResetPassword.module.css'
import React from 'react'
import {PasswordInput, Button, Input} from '@ya.praktikum/react-developer-burger-ui-components'
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {resetPassword} from "../../services/actions/User";

export const ResetPasswordPage = () => {
    const [password, setPassword] = React.useState('')
    const [code, setCode] = React.useState('')
    const dispatch = useDispatch()
    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(resetPassword({password, token: code}))
    }
    return (
            <div className={`${styles.container}`}>
                <h2 className={`text text_type_main-medium mb-6`}>Восстановление пароля</h2>
                <form onSubmit={onSubmit}>
                <PasswordInput
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    name={'password'}
                    placeholder={'Введите новый пароль'}
                    extraClass="mb-6"
                />
                 <Input
                    onChange={e => setCode(e.target.value)}
                    value={code}
                    name={'code'}
                     placeholder={'Введите код из письма'}
                    extraClass="mb-6"
                />
                <Button type='primary' size='medium' htmlType={'submit'} extraClass="mb-20">Сохранить</Button>
                    </form>
                <p className={`text text_type_main-default text_color_inactive pb-4`}>Вспомнили пароль?
                    <Link to="/login" className={styles.link}>Войти</Link>
                </p>
            </div>
    )
}