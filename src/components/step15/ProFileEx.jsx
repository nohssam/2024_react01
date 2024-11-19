import React, { useState } from 'react';
import Profile from './Profile';
import './profile.css'

function ProFileEx(props) {
  const users = ['Alice', 'Bob', 'Clark']
  const [user, setUser] = useState(users[0])
  const [status, setStatus] = useState(true)
   
  console.log('Exam Rendered')
  return (
    <>
      <h2>User Profile</h2>
      <button onClick={() => setStatus(!status)}>Toggle Status</button>
      <button onClick={() => setUser(
        users[(users.indexOf(user) +1) % users.length]
      )}>Switch User</button>
      <p>
        {status ? 'Active' : 'Inactive'}
      </p>
      <Profile name={user} />
    </>
  );
}

export default ProFileEx;