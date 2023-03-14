/* eslint-disable no-lone-blocks */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import './Profile.css'
import Loyalty from './Loyalty'
import { getAuth, updateProfile } from "firebase/auth";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, doc, onSnapshot } from 'firebase/firestore';


function Profile() {
  const [userData, setUserData] = useState(null);

  const auth = getAuth();
  const user = auth.currentUser;
  console.log('User:', user.uid)
  

  useEffect(() => {
    console.log("useEffect called");
    
    if (user) {
      // Get a reference to the Realtime Database
      
      const db = getFirestore();
      const userRef = collection(db, 'users');
  
      // Listen for changes to the user's data in the Realtime Database
      onSnapshot(collection(userRef, `${user.uid}/info`), (snapshot) => {
        const userData = snapshot.docs.map((doc) => doc.data());
          setUserData(userData);
          
        console.log(userData)
      }, (error) =>{
        console.log('Error fetching user data:', error);
      })
    } else {
      console.log("No user is currently signed in.");
    }
  }, [user]);
  
  if (!user) {
    return <div>Please log in to view your profile.</div>;
  }

  {/*if (user !== null) {
  // The user object has basic properties such as display name, email, etc.
  const displayName = user.displayName;
  const email = user.email;
  const photoURL = user.photoURL;
  const emailVerified = user.emailVerified;
  const uid = user.uid;
  console.log(displayName, email, photoURL, emailVerified, uid)
}*/}

  //const user = { name: 'John Doe', email: 'john.doe@example.com', image: 'user.png' };
  const loyaltyPoints = 100;
  return (
    <div className="profile-container">
      
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
      <Loyalty loyaltyPoints={loyaltyPoints} />
    </div>
  )
}

export default Profile
