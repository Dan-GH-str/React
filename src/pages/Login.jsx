import React, { useContext } from "react";
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";
import { AuthContext } from "../context";
import cl from "./styles/Login.module.css"

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    
    // Авторизация пользователя
    const login = event => {
        event.preventDefault()
        setIsAuth(true)
        localStorage.setItem("auth", "true")
    }

    return (
        <main>
            <div>
                <h1 className={cl.header}>Страница для входа</h1>
                <form onSubmit={login}>
                    <MyInput type="text" placeholder="Введите логин"/>
                    <MyInput type="text" placeholder="Введите пароль"/>
                    <MyButton>Войти</MyButton>
                </form>
            </div>
        </main>
    )
}

export default Login;