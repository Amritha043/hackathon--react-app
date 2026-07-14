import axios from 'axios'
import React, { useState } from 'react'

const AddTeam = () => {
    const [input,changeInput]=useState(
        {
            
  team_id: "",
  team_name: "",
  team_leader_name: "",
  leader_email: "",
  leader_phone: "",
  college_name: "",
  no_of_members: "",
  project_title: "",
  problem_statement_track: "",
  technology_stack: "",
  mentor_name: "",
  registration_date: "",
  table: ""
    
        }
    )
    const inputHandler=(event)=>{
        changeInput({...input,[event.target.name]:event.target.value})
    }
    const readValue =()=>{
        console.log(input);
        axios.post("http://localhost:3000/add-team",input).then(
            (response)=>{
                console.log(response.data);
                alert("Team added successfully");
            }
        )
        .catch(
            (error)=>{
                console.error("error adding team",error)
            }
        )
    }
  return (
    <div>
        <div className="team-container">
  <div className="team-card">

    <div className="form-header">
      <h2>
        <i className="bi bi-trophy-fill me-2"></i>
        Hackathon Team Registration
      </h2>
      <p>Register your  team for the competition.</p>
    </div>

    {/* Team Information */}
    <div className="section-title">
      <i className="bi bi-people-fill"></i> Team Information
    </div>

    <div className="row g-3">

      <div className="col-md-6">
        <label>Team ID</label>
        <input
          type="text"
          className="form-control"
          name="team_id"
          value={input.team_id}
          onChange={inputHandler}
        />
      </div>

      <div className="col-md-6">
        <label>Team Name</label>
        <input
          type="text"
          className="form-control"
          name="team_name"
          value={input.team_name}
          onChange={inputHandler}
        />
      </div>

      <div className="col-md-6">
        <label>Leader Name</label>
        <input
          type="text"
          className="form-control"
          name="team_leader_name"
          value={input.team_leader_name}
          onChange={inputHandler}
        />
      </div>

      <div className="col-md-6">
        <label>Leader Email</label>
        <input
          type="email"
          className="form-control"
          name="leader_email"
          value={input.leader_email}
          onChange={inputHandler}
        />
      </div>

      <div className="col-md-6">
        <label>Leader Phone</label>
        <input
          type="text"
          className="form-control"
          name="leader_phone"
          value={input.leader_phone}
          onChange={inputHandler}
        />
      </div>

      <div className="col-md-6">
        <label>College Name</label>
        <input
          type="text"
          className="form-control"
          name="college_name"
          value={input.college_name}
          onChange={inputHandler}
        />
      </div>

    </div>

    {/* Project Details */}

    <div className="section-title mt-4">
      <i className="bi bi-lightbulb-fill"></i> Project Details
    </div>

    <div className="row g-3">

      <div className="col-md-6">
        <label>Members</label>
        <input
          type="number"
          className="form-control"
          name="number_of_members"
          value={input.number_of_members}
          onChange={inputHandler}
        />
      </div>

      <div className="col-md-6">
        <label>Project Title</label>
        <input
          type="text"
          className="form-control"
          name="project_title"
          value={input.project_title}
          onChange={inputHandler}
        />
      </div>

      <div className="col-md-6">
        <label>Problem Statement Track</label>
        <input
          type="text"
          className="form-control"
          name="problem_statement_track"
          value={input.problem_statement_track}
          onChange={inputHandler}
        />
      </div>

      <div className="col-md-6">
        <label>Technology Stack</label>
        <input
          type="text"
          className="form-control"
          name="technology_stack"
          value={input.technology_stack}
          onChange={inputHandler}
        />
      </div>

      <div className="col-md-6">
        <label>Mentor Name</label>
        <input
          type="text"
          className="form-control"
          name="mentor_name"
          value={input.mentor_name}
          onChange={inputHandler}
        />
      </div>

      <div className="col-md-6">
        <label>Registration Date</label>
        <input
          type="date"
          className="form-control"
          name="registration_date"
          value={input.registration_date}
          onChange={inputHandler}
        />
      </div>

      <div className="col-12">
        <label>Station Number</label>
        <input
          type="text"
          className="form-control"
          name="station_number"
          value={input.station_number}
          onChange={inputHandler}
        />
      </div>

    </div>

    <div className="text-center mt-5">
      <button className="register-btn" onClick={readValue}>
        <i className="bi bi-send-fill me-2"></i>
        Register Team
      </button>
    </div>

  </div>
</div>
    </div>
  )
}

export default AddTeam