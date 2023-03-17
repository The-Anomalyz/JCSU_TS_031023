/* eslint-disable no-lone-blocks */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import './UpdateProfile.css'
import Loyalty from './Loyalty'
import { updateProfile } from "firebase/auth";
import { getStorage, ref, storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, doc, onSnapshot, updateDoc, getDocs } from 'firebase/firestore';
import { auth, db } from './firebase';
import {  useNavigate } from 'react-router-dom'

function UpdateProfile() {
    const user = auth.currentUser;
    const userDocRef = collection(db, `users/${user?.uid}/info`);
  const [userData, setUserData] = useState(
    onSnapshot(userDocRef, (snapshot) => {
        snapshot.docs.forEach((doc) => {
          setUserData(doc.data());        
        });
      })
  );
  const [displayName, setDisplayName] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [sport, setSport] = useState('');
  const [favoriteTeam, setFavoriteTeam] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [location, setLocation] = useState('');
  const navigate = useNavigate();

  

const handleProfilePictureUpload = async (event) => {
    const file = event.target.files[0];
    const storage = getStorage();
    const storageRef = ref(storage, `users/${user?.uid}/profilePicture`);
    const snapshot = await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);
    setProfilePicture(downloadURL);
  };

      
      const data = {
        name: firstName || userData?.name,
        surname: lastName || userData?.surname,
        country: location || userData?.country,
        sport: sport || userData?.sport,
        favoriteTeam: favoriteTeam || userData?.favoriteTeam,
        
      }

      console.log('userDocRef', userDocRef.path);
      const handleSave = async () => {
        try {
            const snapshot = await getDocs(userDocRef);
                snapshot.docs.forEach((doc) => {
                updateDoc(doc.ref, data);
                });
            console.log("User data updated successfully");
            navigate('/profile');
          } catch (error) {
            console.error("Error updating user data", error);
          }
      };
  
  if (!user) {
    return <div>Please log in to view your profile.</div>;
  }

  const loyaltyPoints = 100;
  return (
    <div className="up-profile-container">
    <h3>My Profile</h3>
    
    <div className="up-profile-info">
      <img src={profilePicture ? profilePicture : (userData && userData.image) || "https://placehold.it/150x150"} alt="Profile Pic"/>
      <input type="file" accept="image/*" onChange={handleProfilePictureUpload} />
      <div className="up-profile-details">
        <p>FirstName: {' '}</p>
        <input type="text"  value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <p>LastName: {' '}</p>
        <input type="text"  value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <p>Location: {''}</p>
        <input type="text"  value={location} onChange={(e) => setLocation(e.target.value)} />
        <p>Sport: {''}</p>
        <input type="text" value={sport} onChange={(e) => setSport(e.target.value)} />
        <p>Favorite Team: {''}</p>
        <input type="text"  value={favoriteTeam} onChange={(e) => setFavoriteTeam(e.target.value)} />
      </div>
    </div>
    <div className="up-profile-stats">
      <div className="up-stat">
        <p>Followers</p>
        <p>{userData && userData.followers ? userData.followers : 100}</p>
      </div>
      <div className="up-stat">
        <p>Following</p>
        <p>{userData && userData.following ? userData.following : 50}</p>
      </div>
      <div className="up-stat">
        <p>Posts</p>
        <p>{userData && userData.posts ? userData.posts : 25}</p>
      </div>
      <div><button className='up-prof-btn' onClick={handleSave}>Save</button></div>
    </div>

  </div>
  )
}

export default UpdateProfile
