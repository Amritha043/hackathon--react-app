import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewTeam = () => {
     const [data,changeData]=useState([])
    const fetchData =()=>{
        axios.get("http://localhost:3000/view-team").then(
            (response)=>{
                changeData(response.data)
            }
        ).catch()
    }
    useEffect(
        ()=>{
            fetchData()
        },[]
    )
  return (
    <div>
    <div className="container py-5">
  <h2 className="text-center page-title mb-5">
     Registered Teams
  </h2>

  <div className="row g-4">
    {data.map((value, index) => (
      <div className="col-md-6 col-lg-4" key={index}>
        <div className="team-box">

          <div className="team-top">
            <h5>{value.team_name}</h5>
            <span>ID: {value.team_id}</span>
          </div>

          <div className="team-info">
            <p><strong>Leader</strong> : {value.team_leader_name}</p>
            <p><strong>Email</strong> : {value.leader_email}</p>
            <p><strong>Phone</strong> : {value.leader_phone}</p>
            <p><strong>College</strong> : {value.college_name}</p>
            <p><strong>Members</strong> : {value.no_of_members}</p>
            <p><strong>Project</strong> : {value.project_title}</p>
            <p><strong>Track</strong> : {value.problem_statement_track}</p>
            <p><strong>Technology</strong> : {value.technology_stack}</p>
            <p><strong>Mentor</strong> : {value.mentor_name}</p>
            <p><strong>Date</strong> : {value.registration_date}</p>
            <p><strong>Table</strong> : {value.table}</p>
          </div>

        </div>
      </div>
    ))}
  </div>
</div>
    </div>
  )
}

export default ViewTeam