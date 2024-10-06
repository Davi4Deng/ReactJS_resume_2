import React, { Component } from "react";

class WorkExperience extends Component {
  render() {
    return (
        <>
        <div className="experience-section">
            <div className="experience-title">
            <h2>Work Experience</h2>
            </div>
            <div className="experience-details">
            {this.props.experience.map((job, index) => (
                <div key={index} className="job-item">
                <h3>{job.title} at {job.company} ({job.period})</h3>
                <p>{job.description}</p>
                </div>
            ))}
            </div>
        </div>
        <div className="horizontal-line"></div>
      </>
    );
  }
}

export default WorkExperience;
