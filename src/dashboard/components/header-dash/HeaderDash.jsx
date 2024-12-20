import { Link } from 'react-router-dom'
import './HeaderDash.css'

function HeaderDash() {
  return (
    <div className='header-dash'>
      <div className="container">
        <div className="header-dash-content">
          <div>
            Admin Dashboard
          </div>
          <div className="btn-logout">
            <Link to={'/'}>Log Out</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderDash