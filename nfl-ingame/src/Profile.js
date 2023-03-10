import React from 'react'
import './Privacy.css'
import Loyalty from './Loyalty'

function Profile() {

  //const user = { name: 'John Doe', email: 'john.doe@example.com', image: 'user.png' };
  const loyaltyPoints = 100;
  return (
    <div className="profile-container">
      <Loyalty loyaltyPoints={loyaltyPoints} />
      <h3>My Profile</h3>
      <div className="profile-info">
        <img src="https://placehold.it/150x150" alt="Profile Pic" />
        <div className="profile-details">
          <p>Name: John Doe</p>
          <p>Location: New York</p>
          <p>Sport: Football</p>
          <p>Favorite Team: New York Giants</p>
        </div>
      </div>
      <div className="profile-stats">
        <div className="stat">
          <p>Followers</p>
          <p>100</p>
        </div>
        <div className="stat">
          <p>Following</p>
          <p>50</p>
        </div>
        <div className="stat">
          <p>Posts</p>
          <p>25</p>
        </div>
      </div>
    </div>
  )
}

export default Profile
