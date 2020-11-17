import React from 'react'
import success from '../images/success-icon.svg'
import fail from '../images/fail-icon.svg'

function InfoTooltip({ isOpen, onClose, isSuccess, name }) {
    return (
        <>
            <section
                className={`popup popup_type_form popup_type_${name} ${
                    isOpen && 'popup_opened'
                }`}
            >
                <div className="popup__container">
                    {isSuccess ? (
                        <>
                            <img
                                src={success}
                                alt="Галочка"
                                className="popup__infotool-img"
                            />
                            <p className="popup__infotool-text">
                                Вы успешно зарегистрировались!
                            </p>
                        </>
                    ) : (
                        <>
                            <img
                                src={fail}
                                alt="Красный крестик"
                                className="popup__infotool-img"
                            />
                            <p className="popup__infotool-text">
                                Что-то пошло не так. Попробуйте ещё раз!
                            </p>
                        </>
                    )}
                    <button
                        className="popup__close-button"
                        onClick={onClose}
                    ></button>
                </div>
            </section>
        </>
    )
}

export default InfoTooltip
