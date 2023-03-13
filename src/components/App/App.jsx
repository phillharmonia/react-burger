import React, {useEffect} from 'react'
import styles from "./App.module.css"
import Header from "../Header/Header.jsx"
import {BrowserRouter, Navigate, Route, Routes, useLocation, useNavigate} from 'react-router-dom'
import { ConstructorPage } from "../../page/Constructor/Constructor";
import { LoginPage}  from "../../page/Login/Login";
import { ForgotPasswordPage } from '../../page/ForgotPassword/ForgotPassword';
import { ResetPasswordPage } from '../../page/ResetPassword/ResetPassword';
import { RegisterPage } from '../../page/Register/Register';
import { ProfilePage } from "../../page/Profile/Profile";
import {ProtectedRoute} from "../ProtectedRoute/ProtectedRoute";
import {IngridientDetailsPage} from "../../page/IngridientDetails/IngridientDetails";
import {useDispatch, useSelector} from "react-redux";
import {getProfile} from "../../services/actions/User";

function App() {
//    const location = useLocation() не работает, при использованни какого либо хука появляется ошибка в консоли
//    const background = location.state && location.state.background
    const {user} = useSelector(store => store.user)
    const dispatch = useDispatch()
    useEffect(() => {
        if (user === null) {
            dispatch(getProfile())
        }
    },[dispatch])
    return (
        <BrowserRouter>
            <div className={styles.App}>
                <Header/>
                <Routes >
                    <Route path="/" element={<ConstructorPage />} />
                    <Route path="/login" element={<LoginPage />}/>
                    <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                    <Route path="/reset-password" element={<ResetPasswordPage />} />
                    <Route path="/register" element={<RegisterPage />}/>
                    <Route
                        path="/profile"
                        element={<ProtectedRoute element={<ProfilePage />} />}
                    />
                    <Route path="/ingridients/:id" element={<IngridientDetailsPage/>} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
