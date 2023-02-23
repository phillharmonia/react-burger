import styles from './ForgotPassword.module.css'
import React from 'react'
import {EmailInput, Button} from '@ya.praktikum/react-developer-burger-ui-components'
import { Link } from "react-router-dom";

export const ForgotPasswordPage = () => {
    const [value, setValue] = React.useState('')
    const onChange = e => {
        setValue(e.target.value)
    }
    return (
            <div className={`${styles.container}`}>
                <h2 className={`text text_type_main-medium mb-6`}>Восстановление пароля</h2>
                <EmailInput
                    onChange={onChange}
                    value={value}
                    name={'email'}
                    isIcon={false}
                    extraClass="mb-6"
                />
                <Button type='primary' size='medium' htmlType={'button'} extraClass="mb-20">Войти</Button>
                <p className={`text text_type_main-default text_color_inactive pb-4`}>Вспомнили пароль?
                    <Link to="/login" className={styles.link}>Войти</Link>
                </p>
            </div>
    )
}