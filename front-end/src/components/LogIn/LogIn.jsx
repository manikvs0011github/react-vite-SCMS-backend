import React from 'react'
import { Link } from 'react-router-dom'

function LogIn() {
  return (
    <div>
      <h1>This is Log-In Page</h1>
      <div>
          <form className='form-container'>
              <div className='input-label-container'>
                  <label htmlFor="complaintPara" className='form-label'>Username: </label>
                  <input type='text' className='form-input' id='complaintPara' placeholder='Enter Your Complaint Here'/>
              </div>

              <div className='input-label-container'>
                  <label htmlFor="complaintPara" className='form-label'>Password: </label>
                  <input type='text' className='form-input' id='complaintPara' placeholder='Enter Your Complaint Here'/>
              </div>
          </form>
      </div>

      <Link to="/complaintsPage">
        <button type="button" class="btn btn-primary">Log In</button>
      </Link>
    </div>
  )
}

export default LogIn
