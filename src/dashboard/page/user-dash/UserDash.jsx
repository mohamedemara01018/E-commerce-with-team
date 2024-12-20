import './userDash.css'
function UserDash() {
  return (
    <div className='user-dash'>
      <div className="container">
        <div className="user-dash-content">
          <div className="user-title">
            Users
          </div>
          <div className="user-table">
            <div className="table-header">
              User List
            </div>
            <table>
              <thead>
                <tr>
                  <th>name</th>
                  <th>email</th>
                  <th>password</th>
                  <th>created at</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>mohamed</td>
                  <td>mohamed@gamil.com</td>
                  <td>12345</td>
                  <td>22/2/2022</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserDash