import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register({ handleLog }) {
  const [isemail, setemail] = useState([]);
  const Navigate = useNavigate();
  const [isCreating, setCreating] = useState(false);

  const myFormik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
      Confirm_password: "",
    },
    validate: (values) => {
      let errors = {};
      if (values.userName == "") {
        errors.userName = "Username cannot be blank";
      } else if (values.userName.length <= 3) {
        errors.userName = "Enter Valid Username";
      }
      if (values.password == "") {
        errors.password = "Password cannot be blank";
      } else if (values.password.length <= 5) {
        errors.password = "Password length should be more than 5 characters";
      }
      if (values.email == "") {
        errors.email = "email cannot be blank";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      if (values.Confirm_password == "") {
        errors.Confirm_password = "Password cannot be blank";
      } else if (values.Confirm_password.length <= 5) {
        errors.Confirm_password =
          "Password length should be more than 5 characters";
      } else if (values.password != values.Confirm_password) {
        errors.Confirm_password = "Password does not match";
      }

      return errors;
    },
    onSubmit: async (values) => {
      setCreating(true);
      const new_users = await axios.post(
        "https://kitchen-recipe-management-backend.onrender.com/register",
        values
      );
      setemail(new_users?.data?.error);
      console.log(new_users);
      handleLog(true);
      if (!new_users?.data?.error) {
        Navigate("/Dashboard");
      }
    },
  });
  return (
    <>
      <div className="wrapper mt-1">
        <div className="logo1">
          <img src={require("./logo1.PNG")} alt="Kitchen Recipe icon" />
        </div>
        <div className="text-center mt-4 name">Kitchen Recipes</div>
        <form className="p-3 mt-3" onSubmit={myFormik.handleSubmit}>
          <div className="form-field d-flex align-items-center">
            <span className="far fa-user"></span>
            <input
              type="text"
              name="userName"
              id="userName"
              placeholder="Username"
              onChange={myFormik.handleChange}
              value={myFormik.values.userName}
            />
          </div>
          <span style={{ color: "red" }}>{myFormik.errors.userName}</span>

          <div className="form-field d-flex align-items-center">
            <span className="fas fa-envelope"></span>
            <input
              type="email"
              name="email"
              placeholder="email"
              onChange={myFormik.handleChange}
              value={myFormik.values.email}
            />
          </div>
          <span style={{ color: "red" }}>{myFormik.errors.email}</span>
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

          <div className="form-field d-flex align-items-center">
            <span className="fas fa-key"></span>
            <input
              type="password"
              name="Confirm_password"
              id="confirmpwd"
              placeholder="Confirm Password"
              onChange={myFormik.handleChange}
              value={myFormik.values.Confirm_password}
            />
          </div>
          <span style={{ color: "red" }}>
            {myFormik.errors.Confirm_password}
          </span>
          {isemail ? <span style={{ color: "red" }}>{isemail}</span> : null}
          <input
            disabled={isCreating}
            className="btn mt-3"
            value={isCreating ? "Creating User" : "Sign Up!"}
            type="Submit"
          />
        </form>
        <div className="text-center fs-6">
          <Link to={"/"}>Already have an account!</Link>
        </div>
      </div>
    </>
  );
}

export default Register;
