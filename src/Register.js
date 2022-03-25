import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [values, setValues] = useState({});
  const navigate = useNavigate();

  const onInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onDataSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: values.name,
      phone: values.phone,
      email: values.email,
      password: values.password,
    };

    axios
      .post("https://beta.wasilonline.net/dashboard/api/register", data)
      .then((res) => {
        if (res.data.status === true) {
          navigate("/login");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <form onSubmit={onDataSubmit} className="login-form">
      <div>
        <input
          type="text"
          name="name"
          onChange={onInputChange}
          value={values.name}
          placeholder="Name"
          required
        />
      </div>
      <div>
        <input
          type="number"
          name="phone"
          onChange={onInputChange}
          value={values.phone}
          placeholder="Phone"
          required
        />
      </div>
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

export default Register;
