import { useNavigate } from 'react-router-dom'
import './HeaderDash.css'

function HeaderDash() {
  const navigate = useNavigate()
  function handleLogOut() {
    localStorage.removeItem('admin')
    return navigate('/login')
  }
  return (
    <div className='header-dash'>
      <div className="container">
        <div className="header-dash-content">
          <div>
            Admin Dashboard
          </div>
          <div className="btn-logout">
            <button onClick={handleLogOut}>Log Out</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderDash