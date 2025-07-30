import React from 'react'
import { Link } from 'react-router-dom'

function SignIn() {

  return (
    <div>
        <h1>This is Sign-In Page</h1>
          <div>
            <form className='form-container'>
                <div className='input-label-container'>
                    <label htmlFor="nameInput" className='form-label'>Name: </label>
                    <input type='text'  className='form-input' id='nameInput' placeholder='Enter Your Name'/>
                </div>
                <div className='input-label-container'>
                    <label htmlFor="collegeNameInput" className='form-label'>Emai: </label>
                    <input type='text' className='form-input' id='collegeNameInput' placeholder='Enter Your College Name'/>
                </div>
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
        <Link to="/login">
            <button  type="submit" className="btn btn-warning m-2">Sign In</button>
        </Link>
    </div>
  )
}

export default SignIn
