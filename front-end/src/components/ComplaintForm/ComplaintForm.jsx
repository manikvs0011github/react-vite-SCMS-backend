import React, { useState } from 'react'
import "./ComplaintForm.css"
import { createBrowserRouter, Link, Navigate, useNavigate } from 'react-router-dom'
import Complaints from '../Complaints/Complaints'
import axios from 'axios'
// import { api } from '../api/client'
function ComplaintForm() {
    const navigate = useNavigate();
    const complaintTemplates = {
        studentName: "",
        collegeName: "",
        complaint: ""
    }

    const [complaint, setComplaint] = useState(complaintTemplates);

    const inputHandler = (e) => {
        const {name, value} = e.target;
        console.log(name, value);
        setComplaint({...complaint, [name]:value})
    };

    const submitForm = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8000/api/complaints", complaint)
        .then((response) => {
            console.log("Complaint Raised Successfully")
            navigate("/complaintsPage");
        })
        .catch((error) => {
            console.log(error.message);
        })
    }

  return (
    <div className='comaplaint-form'>
      <h1>Complaint Form</h1>

        <div>
            <form className='form-container' onSubmit={submitForm}>
                <div className='input-label-container'>
                    <label htmlFor="nameInput" className='form-label'>Student Name: </label>
                    <input onChange={inputHandler} type='text' name='studentName' className='form-input' id='nameInput' placeholder='Enter Your Name'/>
                </div>
                <div className='input-label-container'>
                    <label htmlFor="collegeNameInput" className='form-label'>College Name: </label>
                    <input onChange={inputHandler} type='text' name='collegeName' className='form-input' id='collegeNameInput' placeholder='Enter Your College Name'/>
                </div>
                <div className='input-label-container'>
                    <label htmlFor="complaintPara" className='form-label'>Complaint: </label>
                    <input onChange={inputHandler} type='text' name='complaint' className='form-input' id='complaintPara' placeholder='Enter Your Complaint Here'/>
                </div>
                <button  type="submit" className="btn btn-warning m-2">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default ComplaintForm
