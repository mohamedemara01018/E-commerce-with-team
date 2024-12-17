import { Link, useNavigate } from 'react-router-dom'
import './Admin.css'
import Input_password from '../../components/input-password/Input_password';
import { useState } from 'react';

function Admin() {
    const navigate = useNavigate();
    const [toggle_eye, setToggle_eye] = useState(false)
    function handleToggle_eye() {
        setToggle_eye(!toggle_eye)
    }
    return (
        <div className="admin">
            <div className="container">
                <div className="admin-content">
                    <form action="">
                        <div className="admin-email">
                            <label htmlFor="email">E-mail</label>
                            <input type="email" id='email' required />
                        </div>
                        <div className="admin-password">
                            <label htmlFor="password">Password</label>
                            <Input_password toggle_eye={toggle_eye} handleToggle_eye={() => handleToggle_eye()} />
                        </div>
                        <div className="admin-button" onClick={() => navigate('/admin/dashboard/product/insert')}>
                            <input className='admin-btn' type="submit" value={'Log in'} />
                        </div>
                    </form>
                    <div className="not-have-account">
                        Do you want to login as a user? <Link to={'/login'}>Login</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admin