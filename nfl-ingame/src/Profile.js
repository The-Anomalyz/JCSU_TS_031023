/* eslint-disable no-lone-blocks */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import './Profile.css'
import Loyalty from './Loyalty'
import { updateProfile } from "firebase/auth";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, doc, onSnapshot } from 'firebase/firestore';
import { auth, db } from './firebase';
import { Link, useNavigate } from 'react-router-dom'




function Profile() {
  const [userData, setUserData] = useState([]);
  const [displayName, setDisplayName] = useState('');
  const [profilePictureUrl, setProfilePictureUrl] = useState('');
  const [profilePictureLoaded, setProfilePictureLoaded] = useState(false);
  

  const user = auth.currentUser;
  console.log('User:', user.uid)
  

  useEffect(() => {
    console.log("useEffect called");
    
    if (user) {

      const userDocRef = collection(db, `users/${user?.uid}/info`);

      onSnapshot(userDocRef, (snapshot) => {
        snapshot.docs.forEach((doc) => {
          console.log('Data', doc.data());
          setUserData(doc.data());
          setDisplayName(doc.data().name + ' ' + doc.data().surname)
          // Fetch the profile picture from Firebase Storage
            const storage = getStorage();
            const pictureRef = storageRef(storage, `users/${user.uid}/profilePicture`);
            getDownloadURL(pictureRef).then((url) => {
              setProfilePictureUrl(url);
              setProfilePictureLoaded(true);
            });
          
        });
      });
    
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
    {profilePictureLoaded ? (
          <img src={profilePictureUrl} alt="Profile Pic" />
        ) : (
          <div className="loading-placeholder"></div>
        )}
      <div className="profile-details">
        <p>Name: {displayName}</p>
        <p>Location: {userData && userData.country ? userData.country : ''}</p>
        <p>Sport: {userData && userData.sport ? userData.sport : ''}</p>
        <p>Favorite Team: {userData && userData.favoriteTeam ? userData.favoriteTeam : ''}</p>
      </div>
    </div>
    <div className="profile-stats">
      <div className="stat">
        <p>Followers</p>
        <p>{userData && userData.followers ? userData.followers : 100}</p>
      </div>
      <div className="stat">
        <p>Following</p>
        <p>{userData && userData.following ? userData.following : 50}</p>
      </div>
      <div className="stat">
        <p>Posts</p>
        <p>{userData && userData.posts ? userData.posts : 25}</p>
      </div>
      <div><Link to={'/update-profile'}><button className='prof-btn'>Update Profile</button></Link></div>
    </div>
    <Loyalty loyaltyPoints={loyaltyPoints} />
  </div>
  )
}

export default Profile
