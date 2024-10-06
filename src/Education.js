import React, { Component } from "react";

class Education extends Component {
  render() {
    return (
      <div className="education-section">
        <div className="edu_1">
          <h2>Education</h2>
        </div>
        <div className="edu_2">
          {this.props.education.map((edu, index) => (
            <div key={index}>
              <h3>{edu.degree}</h3>
              <p>{edu.institution}</p>
              <p>{edu.year}</p>
              <p>GPA: {edu.gpa}</p>
            </div>
          ))}
        </div>
      </div>

    );
  }
}

export default Education;
