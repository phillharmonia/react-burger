import styles from './ForgotPassword.module.css'
import React, {useState} from 'react'
import {EmailInput, Button} from '@ya.praktikum/react-developer-burger-ui-components'
import { Link, Navigate } from "react-router-dom";
import {forgotPassword} from "../../services/actions/Recovery";
import {useDispatch, useSelector} from "react-redux";

export const ForgotPasswordPage = () => {
    const { forgotPasswordSuccess } = useSelector(store => store.recovery)
    const [email, setEmail] = useState('')
    const dispatch = useDispatch()
    const onChange = e => {
        setEmail(e.target.value)
    }
    const onSubmit = e => {
        e.preventDefault()
        dispatch(forgotPassword( {email} ))

    }
    return (
            <div className={`${styles.container}`}>
                <h2 className={`text text_type_main-medium mb-6`}>Восстановление пароля</h2>
                <form onSubmit={onSubmit}>
                <EmailInput
                    onChange={onChange}
                    placeholder='Укажите e-mail'
                    value={email}
                    name={'email'}
                    extraClass="mb-6"
                />
                    <Button type='primary' size='medium' htmlType={'submit'} disabled={!email} extraClass="mb-20">
                        {
                       forgotPasswordSuccess && (<Navigate to="/reset-password" />)
                        }
                        Восстановить
                    </Button>
                    </form>
                <p className={`text text_type_main-default text_color_inactive pb-4`}>Вспомнили пароль?
                    <Link to="/login" className={styles.link}>Войти</Link>
                </p>
            </div>
    )
}