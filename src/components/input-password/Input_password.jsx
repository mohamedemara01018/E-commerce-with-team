/* eslint-disable react/prop-types */

import './Input_password.css'
function Input_password({ password, setPassword, toggle_eye, handleToggle_eye }) {
    return (
        <div className='input-password'>
            <input type={toggle_eye ? 'text' : 'password'} value={password} onChange={setPassword} required />
            <i onClick={handleToggle_eye} className={`fa-solid ${toggle_eye ? 'fa-eye' : 'fa-eye-slash'}`}></i>
        </div>
    )
}

export default Input_password