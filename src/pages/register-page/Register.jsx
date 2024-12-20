import { Link } from 'react-router-dom'
import './Register.css'
import Input_password from '../../components/input-password/Input_password'


function Register() {

    return (
        <div className="register">
            <div className="container">
                <div className="register-content">
                    <form action="">
                        <div className="register-email">
                            <label htmlFor="email">E-mail</label>
                            <input type="email" id='email' required />
                        </div>
                        <div className="register-name">
                            <label htmlFor="name">Name</label>
                            <input type="text" id='name' required />
                        </div>
                        <div className="register-password">
                            <label htmlFor="password">Password</label>
                            <Input_password />
                        </div>
                        <div className="register-button">
                            <input className='register-btn' type="submit" value={'Register'} />
                        </div>
                    </form>
                    <div className="not-have-account">
                        Do you have an account? <Link to={'/login'}>Login</Link>
                    </div>
                    <div className="not-have-account">
                        Lost your password?  <Link to={'/Login'}>Rest</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register