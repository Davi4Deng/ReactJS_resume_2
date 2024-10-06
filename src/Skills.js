import React, { Component } from "react";

class Skills extends Component {
  render() {
    return (
        <>
        <div className="skills-section">
            <div className="skills_1">
            <h2>Key Skills</h2>
            </div>
            <div className="skills_2">
            <ul>
                {this.props.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
                ))}
            </ul>
            </div>
        </div>
        <div className="horizontal-line"></div>
        </>
    );
  }
}

export default Skills;
