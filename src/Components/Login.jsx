import React, { useState } from 'react';
import './Login.css';

export default function Login() {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [checkBox, setCheckBox] = useState(false);

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleCheckBoxChange = () => {
        setCheckBox(!checkBox);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(
            "Email:", email,
            "Şifre:", password,
            "Koşul:", checkBox, 
        )
    }

    const isEmailValid = (email) => {
        const emailRegex = /^[a-zA-Z0-9._]+@[a-z0-9]+\.(com|net|co)$/;
        return emailRegex.test(email);
    }

    const isPasswordValid = (password) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{4,16}$/;
        return passwordRegex.test(password);
    }

    const isFormValid = isEmailValid && isPasswordValid && checkBox;
    console.log(isFormValid);


    return (
        <>
            <form id='form'>
                <label className='lbl' htmlFor="email">Email:
                    <input 
                        id="email" 
                        type="email" 
                        value={email}
                        onChange={handleEmailChange}
                        placeholder='Emailinizi girin'
                    />
                </label>

                <label className='lbl' htmlFor="password">
                    Şifre:
                    <input 
                        id="password" 
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder="Şifrenizi girin"
                    />
                </label>

                <label className='lbl' htmlFor="checkbox">
                    Şartları kabul ediyorum.
                    <input 
                        id='checkbox'
                        type="checkbox"
                        value={checkBox}
                        onClick={handleCheckBoxChange}
                    />
                </label>

                <button
                    type='submit'
                    disabled={!isFormValid}
                    >
                    Gönder
                </button>
            </form>
        </>
    )
}