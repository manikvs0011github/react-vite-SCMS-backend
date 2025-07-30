import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./Complaints.css"
import axios from "axios";

function Complaints() {

  const [complaints, setComplaints] = useState([])

  useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get("http://localhost:8000/api/allComplaints");
          setComplaints(response.data)
          
        } catch (error) {
          console.log("Error while fetching data: ", error)
        }
      }
      fetchData();
  }, [])

  return (
    <div>
      <h1>This is Complaints Page</h1>
      <Link to="/complaintForm">
        <button type="button" className="btn btn-danger">Raise Your Complaint</button>
      </Link>
        <table className="table">
            <thead className='table-head'>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Student Name</th>
                    <th scope="col">College Name</th>
                    <th scope="col">Complaint</th>
                    <th scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                {complaints.map((compl, index) => {
                    return(
                      <tr key={compl._id}>
                          <th scope="row">{index+1}</th>
                          <td>{compl.studentName}</td>
                          <td>{compl.collegeName}</td>
                          <td>{compl.complaint}</td>
                          <td>
                              <button type="button" className="btn btn-success">
                                <i className="icon fa-solid fa-hand-holding-heart fa-2xl"></i>
                              </button>
                          </td>
                      </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}

export default Complaints
