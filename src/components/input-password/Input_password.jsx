/* eslint-disable react/prop-types */

import { useState } from 'react'
import './Input_password.css'
function Input_password({ password, setPassword }) {
    const [toggle_eye, setToggle_eye] = useState(false)
    function handleToggle_eye() {
        setToggle_eye(!toggle_eye)
    }
    return (
        <div className='input-password'>
            <input type={toggle_eye ? 'text' : 'password'} value={password} onChange={setPassword} required />
            <i onClick={handleToggle_eye} className={`fa-solid ${toggle_eye ? 'fa-eye' : 'fa-eye-slash'}`}></i>
        </div>
    )
}

export default Input_password