import React from 'react';
import { Link } from 'react-router-dom';

const RegisterForm = ({nickname, handleNickChange, handlePassChange, handleSubmit}) => (
  <form onSubmit={handleSubmit} className="register-form">
    <input type="text" value={nickname} onChange={handleNickChange} placeholder="nickname" />
    <input type="password" onChange={handlePassChange} placeholder="password" />
    <button>create</button>
    <p className="message">Already registered? <Link to="/login">Sign In</Link></p>
  </form>
);

export default RegisterForm;