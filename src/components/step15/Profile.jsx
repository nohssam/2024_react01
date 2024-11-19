import React, { useState } from 'react';
import './profile.css'

function Profile({name}) {
  const [status, setStatus] = useState('Available')

  console.log('Profile Renderd')
  return (
    <div className='user-profile'>
      <h3>Name : {name}</h3>
      <p>Status : {status}</p>
      <button onClick={
        () => setStatus('Away')
      }>Set Away</button>

      <button onClick={
        () => setStatus('Available')
      }>Set Available</button>
    </div>
  );
}

export default Profile;