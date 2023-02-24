import { React, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

function CreateAccountPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const submitHandler = async (event) => {
    try {
      event.preventDefault();
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (!re.test(email)) {
        setError('Invalid email address');
        return;
      }

      if (password !== confirmPassword) {
        setError('Password and confirm password do not match');
      }

      await createUserWithEmailAndPassword(getAuth(), email, password);
      navigate('/event-list');
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <h1>Create Account</h1>
      {error && <p className="error">{error}</p>}
      <input
        type="email"
        placeholder="Your email address"
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        required
        placeholder="Your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Re-enter your password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button type="submit">Create Account</button>
      <Link to="/login">Already have an account? Log in here</Link>
    </form>
  );
}

export default CreateAccountPage;
