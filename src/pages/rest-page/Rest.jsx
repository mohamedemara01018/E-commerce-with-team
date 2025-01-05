
import { useState } from 'react'
import './Rest.css'
function Rest() {
    const [email, setEmail] = useState('')
    return (
        <div className="rest">
            <div className="container">
                <div className="rest-content">
                    <form>
                        <div className="admin-email">
                            <label htmlFor="email">Enter Your Email</label>
                            <input type="email" id='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="rest-button">
                            <input type='button' className="rest-btn" value={'Send Reset Link'} />
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Rest