import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from "../Firebase/Firebase.init";
initializeAuthentication();
const Register = () => {
  const auth = getAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  //toggle
  const toggleLogin = (e) => {
    console.log(e.target);
  };
  // handle email change
  const handleEmailChnage = (e) => {
    setEmail(e.target.value);
  };

  // handle email change
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  //handle register
  const handleRegister = (e) => {
    e.preventDefault();
    if (e.target.value < 6) {
      setError("Password Must be 6 Characters");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div>
      <h1 className="text-xl">Welcome Dear</h1>
      <form onSubmit={handleRegister} className="w-2/4 mx-auto py-3">
        <div className="form-group py-6">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            onBlur={handleEmailChnage}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            required
          />
        </div>
        <div className="form-group py-3">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            onBlur={handlePasswordChange}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            required
          />
        </div>
        <div className="text-danger">{error}</div>
        <button type="submit" className="btn btn-primary ">
          Register
        </button>
      </form>

      <Link to="/login">
        <p onChange={toggleLogin} className="text-red-500 my-2">
          Already Registered?
        </p>
      </Link>
    </div>
  );
};

export default Register;
