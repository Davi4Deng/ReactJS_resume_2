import React, { Component } from 'react';
import "./App.css";
import Header from './Header';
import PersonalProfile from './PersonalProfile';
import WorkExperience from './WorkExperience'; 
import Skills from './Skills';
import Education from './Education';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personInfo: {
        name: "Zh Rimel", // Initial name value
        occupation: "Data Scientist"
      },
      contactInfo: {
        email: "abc@gmail.com",
        web: "abc.github.io/abc",
        mobile: "01234567890"
      },
      profileText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",

      experience: [
        {
          title: "Job Title",
          company: "Company",
          period: "August 2022 – December 2023",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
        },
        {
          title: "Job Title 2",
          company: "Company 2",
          period: "August 2020 – December 2021",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
        }
      ],
      skills: ["Skill 1", "Skill 2", "Skill 3", "Skill 4", "Skill 5", "Skill 6", "Skill 7", "Skill 8", "Skill 9"],
      education: [
        {
          degree: "BS in Computer Science",
          institution: "New Jersey Institute of Technology",
          year: "2018 - 2022",
          gpa: "3.9"
        },
        {
          degree: "MS in Data Science",
          institution: "New Jersey Institute of Technology",
          year: "2022 - 2023",
          gpa: "4.0"
        }
      ]
    };
  }


  handleChange = (event) => {
    this.setState({
      personInfo: {
        ...this.state.personInfo, 
        name: event.target.value 
      }
    });
  }

  render() {
    return (
      <div>
        <div>
          <p>Enter your name</p>
          <input
            type="text"
            value={this.state.personInfo.name}
            onChange={this.handleChange}
            placeholder="Type your name..."
          />
        </div>
        <Header personInfo={this.state.personInfo} contactInfo={this.state.contactInfo}></Header>
        <PersonalProfile profileText={this.state.profileText}></PersonalProfile> 
        <WorkExperience experience={this.state.experience}></WorkExperience>
        <Skills skills={this.state.skills}></Skills>
        <Education education={this.state.education}></Education>
      </div>
    );
  }
}

export default App;
