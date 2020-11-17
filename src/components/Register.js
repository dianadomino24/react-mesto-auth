import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
// import * as duckAuth from '../duckAuth.js'
// import './styles/Register.css'

const Register = () => {
    const [data, setData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    })
    const [message, setMessage] = useState('')
    const history = useHistory()

    const handleChange = (e) => {
        const { name, value } = e.target
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     const { username, email, password, confirmPassword } = data
    //     if (password === confirmPassword) {
    //         duckAuth.register(username, password, email).then((res) => {
    //             if (res.statusCode !== 400) {
    //                 setMessage('')
    //                 history.push('/login')
    //             } else {
    //                 setMessage('Что-то пошло не так!')
    //             }
    //         })
    //     }
    // }

    return (
        <div className="register">
            {/* <Logo title={'CryptoDucks'} />
            <p className="register__welcome">Пожалуйста, зарегистрируйтесь.</p>
            <p className="register__error">{message}</p>
            <form onSubmit={handleSubmit} className="register__form">
                <label htmlFor="username">Логин:</label>
                <input
                    id="username"
                    name="username"
                    type="text"
                    value={data.username}
                    onChange={handleChange}
                />
                <label htmlFor="email">Email:</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    value={data.email}
                    onChange={handleChange}
                />
                <label htmlFor="password">Пароль:</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    value={data.password}
                    onChange={handleChange}
                />
                <label htmlFor="confirmPassword">Подтвердите пароль:</label>
                <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={data.confirmPassword}
                    onChange={handleChange}
                />
                <div className="register__button-container">
                    <button type="submit" className="register__link">
                        Зарегистрироваться
                    </button>
                </div>
            </form>
            <div className="register__signin">
                <p>Уже зарегистрированы?</p>
                <Link to="login" className="register__login-link">
                    Войти
                </Link>
            </div> */}
        </div>
    )
}

export default Register