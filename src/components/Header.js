import React from 'react'
import logoPath from '../images/logo.svg'
import { Route, Switch, Link } from 'react-router-dom'

function Header({ onSignOut, userData }) {
    const { email } = userData
    return (
        <header className="header page__header section">
            <a href="/" className="logo header__logo">
                <img
                    className="logo__image"
                    src={logoPath}
                    alt="Логотип проекта Mesto"
                />
            </a>
            <Switch>
                <Route path="/sign-up">
                    <Link to="./sign-in" className="header__link">
                        Вход
                    </Link>
                </Route>
                <Route path="/sign-in">
                    <Link to="./sign-up" className="header__link">
                        Регистрация
                    </Link>
                </Route>
                <Route path="/">
                    <div className="header__user-info">
                        <p className="header__email">{email}</p>
                        <button onClick={onSignOut} className="header__button">
                            Выйти
                        </button>
                    </div>
                </Route>
            </Switch>
        </header>
    )
}

export default Header
