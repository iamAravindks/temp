import React, { useState, useEffect } from "react";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/adminLogin", {
        username,
        password,
      })
      .then(function (response) {
        if (response.data) {
          window.location.assign("/newelection");
        } else {
          alert("Incorrect Username or Password");
        }
      })
      .catch(function (err) {
        console.error(err);
      });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="username"
          name="username"
          onChange={handleUsernameChange}
          required
        />
        <label htmlFor="name">Username</label>
        <br></br>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handlePasswordChange}
          required
        />
        <label htmlFor="name">Password</label>
        <br></br>
        <br></br>
        <button className="btn blue darken-2" type="submit" name="action">
          Submit
          <i className="material-icons right">send</i>
        </button>
      </form>
    </div>
  );
};

export default Login;
