import { useState } from 'react';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth,provider as googleProvider } from '../firebase';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/logout');
      navigate('/home');
    } catch (err) {
      alert(err.message);
    }    
  };


  const loginWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
       navigate('/logout');
      navigate('/home');

    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <form onSubmit={login}>
      <h2>Login</h2>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Login</button>
      <button type="button" onClick={loginWithGoogle}>Login with Google</button>
      <p>Don't have an account? <a href="/signup">Sign up</a></p>
     
    </form>
  );
};
<button>logout</button>
export default Login;