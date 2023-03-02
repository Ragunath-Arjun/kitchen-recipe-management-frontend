import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const Navigate = useNavigate();
  const [Login, setLogin] = useState([]);
  const myFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      let errors = {};
      if (values.email == "") {
        errors.email = "email cannot be blank";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      } else if (values.email.length <= 3) {
        errors.email = "Enter Valid email";
      }
      if (values.password == "") {
        errors.password = "Password cannot be blank";
      } else if (values.password.length <= 5) {
        errors.password = "Password length should be more than 5 characters";
      }
      return errors;
    },
    onSubmit: async (values) => {
      try {
        const login = await axios.post("https://kitchen-recipe-management-backend.onrender.com/login", values, {
          headers: {
            Authorization: `${window.localStorage.getItem("token")}`,
          },
        });
        if (login.data.token) {
          window.localStorage.setItem("token", login.data.token);
          Navigate("/Dashboard");
        }
        else
        {
          alert("Email/password is incorrect");

        }
      } catch (error) {
        alert("Email/password is incorrect");
        console.log("Error", error);
      }
    },
  });
  return (
    <>
      <div className="wrapper">
        <div className="logo1">
          <img
            src={require("./logo1.PNG")}
            alt="Kitchen recipe icon"
          />
        </div>
        <div className="text-center mt-4 name">Kitchen Recipes</div>
        <form className="p-3 mt-3" onSubmit={myFormik.handleSubmit}>
          <div className="form-field d-flex align-items-center">
            <span className="far fa-user"></span>
            <input
              type="email"
              name="email"
              id="userName"
              placeholder="email"
              onChange={myFormik.handleChange}
              value={myFormik.values.email}
            />
          </div>
          <span style={{ color: "red" }}>
            {myFormik.errors.email}
            {Login}
          </span>

          <div className="form-field d-flex align-items-center">
            <span className="fas fa-key"></span>
            <input
              type="password"
              name="password"
              id="pwd"
              placeholder="Password"
              onChange={myFormik.handleChange}
              value={myFormik.values.password}
            />
          </div>
          <span style={{ color: "red" }}>{myFormik.errors.password}</span>

          <button className="btn mt-3" type="Submit">
            Login
          </button>
        </form>
        <div className="text-center fs-6">
          <a href="#">Forget password?</a> or{" "}
          <Link to={"/Register"}>Sign up</Link>
        </div>
      </div>
    </>
  );
}

export default Login;