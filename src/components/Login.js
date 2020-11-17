import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import RegisterLoginTemplate from './RegisterLoginTemplate'

const Login = ({ handleLogin }) => {
    const [data, setData] = useState({
        username: '',
        password: '',
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

    const handleSubmit = (e) => {
        e.preventDefault()
        const { username, password } = data

        if (!username || !password) {
            return
        }

        //         duckAuth
        //             .authorize(username, password)
        //             .then((data) => {
        //                 if (!data) {
        //                     setMessage('Что-то пошло не так!')
        //                 }

        //                 if (data.jwt) {
        //                     setToken(data.jwt)
        //                     setData({ username: '', password: '' })
        //                     setMessage('')
        //                     handleLogin(data.user)
        //                     history.push('/ducks')
        //                 }
        //             })
        //             .catch((err) => console.log(err))
    }

    return (
        <div className="login">
            <RegisterLoginTemplate
                // name="login"
                title="Вход"
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
                    <span className="popup__input-error"></span>
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
                    <span className="popup__input-error"></span>
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
