import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm = ({nickname, handleNickChange, handlePassChange, handleSubmit, errorReason}) => {
  let error = ''

  if (errorReason) {
    error = <p className="error">{errorReason}</p>
  }

  return <form onSubmit={handleSubmit} className="login-form">
    {error}
    <input type="text" value={nickname} onChange={handleNickChange} placeholder="nickname" />
    <input type="password" onChange={handlePassChange} placeholder="password" />
    <button>login</button>
    <p className="message">Not registered? <Link to="/register">Create an account</Link></p>
  </form>
};

export default LoginForm;