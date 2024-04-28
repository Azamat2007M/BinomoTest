import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import './register.scss'

const Register = () => {
  const API = 'http://localhost:1234';
  const [pass, setPass] = useState(false);
  const navigate = useNavigate();

  const regEnter = async (e) => {
    e.preventDefault();
    await axios
      .post(`${API}/users/register`, {
        name: e.target[1].value,
        email: e.target[0].value,
        password: e.target[2].value,
        image: e.target[3].value,
        wallet: 10000,
        accepted: true,
        typewallet: "dollar",
        useractived: true,
        realwallet: false,
        followers: 0,
        enterConditional: true,
        role: "user",
        level: 1
      })
      .then((res) => {
        if (res.status === 201) {
          navigate('/login')
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
        <form onSubmit={regEnter}>
          <h1>Sign up</h1>
          <br />
          <input type="email" placeholder="Email" required /> <br />
          <br />
          <input type="text" placeholder="Name" required /> <br /> <br />
          <div className="pass">
            <input
              type={pass ? 'text' : 'password'}
              placeholder="Password"
              required
            />
            <h3 onClick={() => setPass(!pass)}>👁️</h3>
          </div>
          <input type="text" placeholder="Image" required /> <br /> <br />
          <br /> <br />
          <button type="submit" className="btnlogin">
            Submit
          </button>
        </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
