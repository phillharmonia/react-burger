import React from 'react'
import styles from "./App.module.css"
import Header from "../Header/Header.jsx"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ConstructorPage } from "../../page/Constructor/Constructor";
import { LoginPage}  from "../../page/Login/Login";
import { ForgotPasswordPage } from '../../page/ForgotPassword/ForgotPassword';
import { ResetPasswordPage } from '../../page/ResetPassword/ResetPassword';
import { RegisterPage } from '../../page/Register/Register';
import { ProfilePage } from "../../page/Profile/Profile";

function App() {
    return (
            <BrowserRouter>
            <div className={styles.App}>
            <Header/>
            <Routes>
                <Route path="/" element={<ConstructorPage />} />
                <Route path="/login" element={<LoginPage />}/>
                <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                <Route path="/reset-password" element={<ResetPasswordPage />} />
                <Route path="/register" element={<RegisterPage />}/>
                <Route path="/profile" element={<ProfilePage />}/>
            </Routes>
        </div>
            </BrowserRouter>
    );
}

export default App;
