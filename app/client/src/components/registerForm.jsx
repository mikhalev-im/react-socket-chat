import React from 'react';
import { Link } from 'react-router-dom';

const RegisterForm = ({nickname, handleNickChange, handlePassChange, handleSubmit, errorReason}) => {
  let error = ''

  if (errorReason) {
    error = <p className="error">{errorReason}</p>
  }

  return <form onSubmit={handleSubmit} className="register-form">
    {error}
    <input type="text" value={nickname} onChange={handleNickChange} placeholder="nickname" />
    <input type="password" onChange={handlePassChange} placeholder="password" />
    <button>create</button>
    <p className="message">Already registered? <Link to="/login">Sign In</Link></p>
  </form>
};

export default RegisterForm;