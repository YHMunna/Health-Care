import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from "../Firebase/Firebase.init";
initializeAuthentication();
const Register = () => {
  const auth = getAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});
  // handle email change
  const handleEmailChnage = (e) => {
    setEmail(e.target.value);
  };
  // handle email change
  const handlePasswordChange = (e) => {
    if (e.target.value < 6) {
      console.log("error");
    } else {
      setPassword(e.target.value);
    }
  };
  //handle register
  const handleRegister = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const { email, displayName, photoURL } = result.user;
        const userinfo = {
          Name: displayName,
          email: email,
          picture: photoURL,
        };
        setUser(userinfo);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <h1 className="text-xl">Welcome Dear</h1>
      <form onSubmit={handleRegister} className="w-2/4 mx-auto py-3">
        <div className="form-group py-6">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            onChange={handleEmailChnage}
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
            onChange={handlePasswordChange}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            required
          />
        </div>
      </form>
      <button type="submit" className="btn btn-primary ">
        Register
      </button>
      <Link to="/login">
        <p className="text-red-500 my-2">Already Registered?</p>
      </Link>
    </div>
  );
};

export default Register;
