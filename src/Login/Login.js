import React, { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../Hook/UseAuth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from "../Firebase/Firebase.init";
initializeAuthentication();
const Login = () => {
  const auth = getAuth();
  const { user, setUser, signInWithGoogle } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const location = useLocation();
  // handle email log
  const Emaillog = (e) => {
    setEmail(e.target.value);
  };

  // handle PASS log
  const Passwordlog = (e) => {
    setPassword(e.target.value);
  };
  const redirect_uri = location.state?.from || "/home";
  //handle login
  const handlelog = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);

        history.push(redirect_uri);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div>
      <h1 className="text-xl">Please, login</h1>
      <form className="w-2/4 mx-auto py-3">
        <div className="form-group py-6">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            onBlur={Emaillog}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group py-3">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            onBlur={Passwordlog}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>

        <button onClick={handlelog} type="submit" className="btn btn-primary ">
          Submit
        </button>
        <br />

        <br />
      </form>
      <button
        onClick={signInWithGoogle}
        type="submit"
        className="btn btn-warning "
      >
        Google SignIn
      </button>
      <Link to="/register">
        <p className="my-3 text-red-500">New?Please,Register</p>
      </Link>
    </div>
  );
};

export default Login;
