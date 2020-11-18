import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import RegisterLoginTemplate from './RegisterLoginTemplate'
import * as auth from '../utils/auth.js'
import { setToken } from '../utils/token'

const Login = ({ handleLogin }) => {
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

        if (!email || !password) {
            return
        }

        auth.authorize(email, password)
            .then((data) => {
                if (!data) {
                    setMessage('Что-то пошло не так при авторизации в Login!')
                }
                if (data.token) {
                    setToken(data.token)
                    setMessage('')
                    handleLogin(email)
                    history.push('/')
                }
            })
            .then(() => setData({ email: '', password: '' }))
            .catch((err) => console.log(err))
    }

    return (
        <div className="login">
            <RegisterLoginTemplate title="Вход" onSubmit={handleSubmit}>
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
                    <span className="popup__input-error">{message}</span>
                </label>
                <button
                    className="link popup__save-button popup__save-button_type_dark"
                    autoFocus
                    type="submit"
                >
                    Войти
                </button>
            </RegisterLoginTemplate>
        </div>
    )
}

export default Login
