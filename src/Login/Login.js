import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../Hook/UseAuth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const Login = () => {
  const { user, signInWithGoogle } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  //handle login
  const handlelog = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // Signed in
        const user = result.user;
        // ...
        history.push("/home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  return (
    <div>
      <h1 className="text-xl">Please, login</h1>
      <form className="w-2/4 mx-auto py-3">
        <div className="form-group py-6">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            onBlur={setEmail}
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
            onBlur={setPassword}
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
