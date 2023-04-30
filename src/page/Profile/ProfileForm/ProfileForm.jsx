import styles from "../Profile.module.css"
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {EmailInput, Input, PasswordInput, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDispatch, useSelector} from "react-redux";
import {getProfile, patchProfile} from "../../../services/actions/User";



export const ProfileForm = () => {
    const {name, email} = useSelector(store => store.user.user)

    const [state, setState] = useState({
        name: name,
        email: email,
        password: '',
    })
    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    }
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProfile())
    }, [dispatch])

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(patchProfile(state.name, state.email, state.password))
    }

    const handleClearForm = () => {
        setState({...state, name: name, email: email})
    }

    return (
                        <div className={`${styles.forms} pt-30`}>
                            <form onSubmit={handleSubmit}>
                                <Input
                                    onChange={handleChange}
                                    value={state.name}
                                    name="name"
                                    extraClass="mb-6"
                                    placeholder="Имя"
                                    icon={"EditIcon"}
                                />
                                <EmailInput
                                    onChange={handleChange}
                                    value={state.email}
                                    name="email"
                                    extraClass="mb-6"
                                    placeholder={'Логин'}
                                    icon={"EditIcon"}
                                />
                                <PasswordInput
                                    onChange={handleChange}
                                    value={state.password}
                                    name="password"
                                    extraClass="mb-6"
                                    placeholder={'Пароль'}
                                    icon={"EditIcon"}
                                />
                                { state.password !== '' || state.name !== name || state.email !== email ?(
                                    <div className={styles.buttons}>
                                        <Button htmlType="button" type="secondary" size="medium" onClick={handleClearForm} >Отмена</Button>
                                        <Button htmlType="submit" type="primary" size="medium">
                                            Сохранить
                                        </Button>
                                    </div>) : null}
                            </form>
                        </div>
    )
}