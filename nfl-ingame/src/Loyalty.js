import React, { useState } from 'react'
import './Loyalty.css'

function Loyalty() {

  const [loyaltyPoints, setLoyaltyPoints] = useState('');
  const [loyaltyLevel, setLoyaltyLevel] = useState('');

  // Function to calculate loyalty level based on loyalty points
  const calculateLoyaltyLevel = (points) => {
    if (points >= 100) {
      return 4;
    } else if (points >= 50) {
      return 3;
    } else if (points >= 20) {
      return 2;
    } else {
      return 1;
    }
  }

  // Function to handle loyalty points update
  function handleLoyaltyPointsUpdate(points) {
    const newPoints = loyaltyPoints + points;
    setLoyaltyPoints(newPoints);
    const newLevel = calculateLoyaltyLevel(newPoints);
    setLoyaltyLevel(newLevel);
  }


  return (
    <div className="loyalty-container">
      <div className="loyalty-header">
        <h2>Profile</h2>
        <p>Loyalty Points: {loyaltyPoints}</p>
        <p>Loyalty Level: {loyaltyLevel}</p>
      </div>
      <div className="loyalty-rewards">
        <h3>Rewards</h3>
        <p>Redeem your loyalty points for these rewards:</p>
        <ul>
          <li>Exclusive merchandise</li>
          <li>Tickets to games</li>
          <li>Meet-and-greet sessions with players</li>
        </ul>
      </div>
      <div className="loyalty-actions">
        <h3>Earn Loyalty Points</h3>
        <p>Perform these actions to earn loyalty points:</p>
        <ul>
          <li>Attend games (+10 points)</li>
          <li>Buy merchandise (+5 points)</li>
          <li>Participate in contests (+3 points)</li>
        </ul>
        <button onClick={() => handleLoyaltyPointsUpdate(10)}>Attend Game</button>
        <button onClick={() => handleLoyaltyPointsUpdate(5)}>Buy Merchandise</button>
        <button onClick={() => handleLoyaltyPointsUpdate(3)}>Participate in Contest</button>
      </div>
    </div>
  )
}

export default Loyalty
