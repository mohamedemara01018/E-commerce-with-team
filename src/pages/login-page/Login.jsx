import { Link } from 'react-router-dom'
import './Login.css'
import Input_password from '../../components/input-password/Input_password'
function Login() {

    return (

        <div className="login">
            <div className="container">
                <div className="login-content">
                    <form action="">
                        <div className="login-email">
                            <label htmlFor="email">E-mail</label>
                            <input type="email" id='email' required />
                        </div>
                        <Input_password />
                        {/* <div className="login-password">
                            <label htmlFor="password">Password</label>
                            <input type="password" id='password' required/>
                        </div> */}
                        <div className="login-button">
                            <input className='login-btn' type="submit" value={'Log in'} />
                        </div>
                    </form>
                    <div className="not-have-account">
                        Do not have an account? <Link to={'/register'}>Register</Link>
                    </div>
                    <div className="not-have-account">
                        Lost your password?  <Link to={'/register'}>Rest</Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login