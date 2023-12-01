import React, { useContext } from "react";
import cl from "./Navbar.module.css";
import { Link } from "react-router-dom";
import MyButton from "../button/MyButton";
import { AuthContext } from "../../context";

const Navbar = () => {
    const {setIsAuth} = useContext(AuthContext)


    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }

    return (
        <header>
            <nav className={cl.navbar}>
                <MyButton onClick={logout}>Выйти</MyButton>
                <div className={cl.navbar__links}>
                    <Link className={cl.link} to="/about">О сайте</Link>
                    <Link className={cl.link} to="/posts">Посты</Link>
                </div>
            </nav>
        </header>
    )
}

export default Navbar