import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const Login = () => {
  const [values, setValues] = useState({});
  const navigate = useNavigate();

  const onInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onDataSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: values.email,
      password: values.password,
    };

    axios
      .post("https://beta.wasilonline.net/dashboard/api/login", data)
      .then((res) => {
        if (res.data.status === true) {
          navigate("/");
          localStorage.setItem("user", res.data.token);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <form onSubmit={onDataSubmit} className="login-form">
      <div>
        <input
          type="email"
          name="email"
          onChange={onInputChange}
          value={values.email}
          placeholder="Email"
          required
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          onChange={onInputChange}
          value={values.password}
          placeholder="Password"
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;
