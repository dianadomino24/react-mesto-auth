import React from 'react'

function RegisterLoginTemplate({ title, children, onSubmit }) {
    return (
        <>
            <section className="popup__register-login">
                <section className="popup__container-register-login">
                    <form
                        className="popup__form"
                        noValidate
                        // name={name}
                        onSubmit={onSubmit}
                    >
                        <h2 className="popup__title popup__title_type_login">
                            {title}
                        </h2>
                        <fieldset className="popup__fieldset">
                            {children}
                        </fieldset>
                    </form>
                </section>
            </section>
        </>
    )
}

export default RegisterLoginTemplate
