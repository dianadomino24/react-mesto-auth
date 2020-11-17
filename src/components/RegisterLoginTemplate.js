import React from 'react'

function RegisterLoginTemplate({
    name,
    title,
    children,
    handleSubmit,
    ...rest
}) {
    return (
        <>
            <section className="popup_type_register-login">
                <section className="popup__container-register-login">
                    <form
                        className={`popup__form popup__form_type_${name}`}
                        noValidate
                        name={name}
                        onSubmit={handleSubmit}
                    >
                        <h2 className="popup__title">{title}</h2>
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
