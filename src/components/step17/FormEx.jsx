import React, { useState } from 'react';

function FormEx(props) {
  const [username, setUserName] = useState('')
  const [isSubScribed, setSubscribed] = useState(false)
  const [role, setRole] = useState('user')
  const roles = ['user', 'admin', 'guest']
  return (
    <form>
      <p>
        Name :  {username}
        {isSubScribed && ' (Subscribed)'}
      </p>
      <p>Role : {role}</p>
      <input
        type='text' placeholder='UserName'
        value={username}
        onChange={
          (e) => setUserName(e.target.value)
        } />

      <input
        type='checkbox'
        checked={isSubScribed}
        onChange={
          (e) => setSubscribed(
            e.target.checked
          )
        } />

      <label>Subscribe</label>

      <select value={role}
        onChange={
          (e) => setRole(e.target.value)}>
        {roles.map((k) => (
          <option key={k} value={k}>{k}</option>
        ))}
      </select>
    </form>
  );
}

export default FormEx;