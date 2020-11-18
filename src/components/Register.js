import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import RegisterLoginTemplate from './RegisterLoginTemplate'
import * as auth from '../utils/auth.js'
import { formSelectorsObj } from '../utils/utils'
import { FormValidator } from './FormValidator'

const Register = ({ setRegisterSuccess, infoToolTipOpen }) => {
    const [data, setData] = useState({
        email: '',
        password: '',
    })
    const history = useHistory()
    const [message, setMessage] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const { email, password } = data
        auth.register(email, password).then((res) => {
            if (res.status !== 400) {
                setMessage('')
                setRegisterSuccess(true)
                infoToolTipOpen()
                history.push('/login')
            } else {
                setMessage('Ошибка при регистрации')
                setRegisterSuccess(false)
                infoToolTipOpen()
            }
        })
    }

    return (
        <div className="register">
            <RegisterLoginTemplate
                // name="login"
                title="Регистрация"
                onSubmit={handleSubmit}
            >
                <label className="popup__label">
                    <input
                        type="email"
                        value={data.email}
                        onChange={handleChange}
                        name="email"
                        placeholder="Email"
                        id="email"
                        className="input popup__input popup__input_type_dark"
                        required
                        minLength="2"
                        maxLength="320"
                    />
                    <span className="popup__input-error">{message}</span>
                </label>
                <label className="popup__label">
                    <input
                        type="password"
                        value={data.password}
                        onChange={handleChange}
                        name="password"
                        id="password"
                        placeholder="Пароль"
                        className="input popup__input popup__input_type_dark"
                        required
                        minLength="2"
                        maxLength="200"
                    />
                    <span className="popup__input-error popup__input-error_active">
                        {message}
                    </span>
                </label>
                <button
                    className="link popup__save-button popup__save-button_type_dark"
                    autoFocus
                    type="submit"
                >
                    Зарегистрироваться
                </button>
                <Link to="/sign-in" className="link popup__login-link">
                    Уже зарегистрированны? Войти
                </Link>
            </RegisterLoginTemplate>
        </div>
    )
}

export default Register
