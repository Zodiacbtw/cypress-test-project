import React, { useState } from 'react';

export default function Login() {
    const [password, setPassword] = useState('');
    const [checkBox, setCheckBox] = useState(false);

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleCheckBoxChange = () => {
        setCheckBox(!checkBox);
    }

    return (
        <>
            <form id='form'>
                <label htmlFor="email">Şifre:</label>
                <input id="email" type="email" />

                <label htmlFor="password"></label>
                <input 
                    id="password" 
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Şifrenizi girin"
                />

                <label htmlFor="">Şartları kabul ediyor musunuz?</label>
                <input 
                    type="checkbox"
                    value={checkBox}
                    onClick={handleCheckBoxChange}
                />
            </form>
        </>
    )
}