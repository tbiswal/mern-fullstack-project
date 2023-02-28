import { React, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const validateEmpty = (value) => value == null || value.length === 0 || value === undefined;

  const submitHandler = async (event) => {
    event.preventDefault();

    if (validateEmpty(email)) {
      setError('Email required');
      return;
    }

    if (validateEmpty(password)) {
      setError('Password required');
      return;
    }

    try {
      /* 
      getAuth is a function which returns FirebaseAuth object to manage user accounts and
      credentials. signInWithEmailAndPassword signs in using provided email address and password.
      An error is returned if the password is wrong or otherwise not accepted by the server.
      */
      await signInWithEmailAndPassword(getAuth(), email, password);
      navigate('/create-event');
    } catch (e) {
      setError('Invalid user credential');
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <h1>Log In</h1>
      {error && <p className="error">{error}</p>}
      <input
        type="email"
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Log In</button>
      <Link to="/create-account">Don&apos;t have an account? Create one here</Link>
    </form>
  );
}

export default LoginPage;
