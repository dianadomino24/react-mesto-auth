import React from 'react'
import logoPath from '../images/logo.svg'

function Header() {
    return (
        <header className="header page__header section">
            <a href="/" className="logo header__logo">
                <img
                    className="logo__image"
                    src={logoPath}
                    alt="Логотип проекта Mesto"
                />
            </a>
        </header>
    )
}

export default Header
