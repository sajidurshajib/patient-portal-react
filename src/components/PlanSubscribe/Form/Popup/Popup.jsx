import React, { useState } from 'react'
import LoginPopup from './LoginPopup/LoginPopup'
import RegisterPopup from './RegisterPopup/RegisterPopup'

export default function Popup({ setShow }) {
    const [loginOpen, setLoginOpen] = useState(true)
    const [registerOpen, setRegisterOpen] = useState(false)

    return (
        <div>
            {loginOpen && (
                <LoginPopup setLoginOpen={setLoginOpen} setRegisterOpen={setRegisterOpen} setShow={setShow} />
            )}
            {registerOpen && (
                <RegisterPopup setLoginOpen={setLoginOpen} setRegisterOpen={setRegisterOpen} setShow={setShow} />
            )}
        </div>
    )
}
