import { Link } from 'react-router-dom'
import './Login.css'
import Input_password from '../../components/input-password/Input_password'
import { useState } from 'react'
function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (

        <div className="login">
            <div className="container">
                <div className="login-content">
                    <form action="">
                        <div className="admin-email">
                            <label htmlFor="email">E-mail</label>
                            <input type="email" id='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>

                        <div className="admin-password">
                            <label htmlFor="password">Password</label>
                            <Input_password password={password} setPassword={(e) => setPassword(e.target.value)} />
                        </div>

                        <div className="login-button">
                            <input className='login-btn' type="submit" value={'Log in'} />
                        </div>
                    </form>
                    <div className="not-have-account">
                        Do not have an account? <Link to={'/register'}>Register</Link>
                    </div>
                    <div className="not-have-account">
                        Lost your password?  <Link to={'/resetpasswrod'}>Rest</Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login