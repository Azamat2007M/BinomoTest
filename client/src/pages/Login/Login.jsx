import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import './login.scss'

const Login = () => {
  const API = 'http://localhost:1234';
  const [pass, setPass] = useState(false);
  const navigate = useNavigate();

  const logEnter = async (e) => {
    e.preventDefault();
    await axios
      .post(`${API}/users/login`, {
        email: e.target[0].value,
        password: e.target[1].value,
      })
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem('Access', res.data.token);
          navigate('/introductiondemo');
          window.location.reload()
        } else {
          alert(res.data.message);
        }
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  return (
    <>
      <Nav />
      <div className="profile">
        <div className="a-card">
        <form onSubmit={logEnter}>
          <h1>Sign in</h1>
          <br />
          <br />
          <br />
          <input type="email" placeholder="Email" required /> <br />
          <br />
          <input type="password" placeholder="Password" required />
          <br /> <br />
          <br />
          <button type="submit" className="btnlogin">
            Submit
          </button>
        </form>
        <div className="a-down">
            <b>Not account?</b>
            <Link to={'/register'}>Create</Link>
        </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
