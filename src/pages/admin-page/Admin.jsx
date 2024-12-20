import { Link, useNavigate } from 'react-router-dom'
import './Admin.css'
import Input_password from '../../components/input-password/Input_password';
import { useState } from 'react';
import { toast } from 'react-toastify';

function Admin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    console.log(email, password);
    const navigate = useNavigate();
    const [toggle_eye, setToggle_eye] = useState(false)
    function handleToggle_eye() {
        setToggle_eye(!toggle_eye)
    }
    function handleLogin(e) {
        e.preventDefault()
        if (email != 'marhjmal6@gmail.com' && parseInt(password) != 11111111) {
            return toast('Email And Password is not correct')
        }
        else if (email != 'marhjmal6@gmail.com') {
            return toast('Email is not correct')
        } else if (parseInt(password) != 11111111) {
            return toast('Password is not correct')
        }
        else {
            localStorage.setItem('admin', JSON.stringify({ email: email, password: password }))
            return navigate('/admin/dashboard/product/add-edit/add')
        }
    }
    return (
        <div className="admin">
            <div className="container">
                <div className="admin-content">
                    <form action="" onSubmit={handleLogin}>
                        <div className="admin-email">
                            <label htmlFor="email">E-mail</label>
                            <input type="email" id='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="admin-password">
                            <label htmlFor="password">Password</label>
                            <Input_password password={password} setPassword={(e) => setPassword(e.target.value)} toggle_eye={toggle_eye} handleToggle_eye={() => handleToggle_eye()} />
                        </div>
                        <div className="admin-button" onClick={() => handleLogin}>
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