import React, { Component } from "react";

class PersonalProfile extends Component {
  render() {
    return (
      <>
        <div className="profile-section">
          <div className="ps_1">
            <h2>Personal Profile</h2>
          </div>
          <div className="ps_2">
            <p>{this.props.profileText}</p>
          </div>
        </div>
        <div className="horizontal-line"></div>
      </>
    );
  }
}

export default PersonalProfile;
