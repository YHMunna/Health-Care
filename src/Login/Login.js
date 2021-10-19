import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../Hook/UseAuth";

const Login = () => {
  //handle sigin
  // const auth = useAuth();
  // console.log(auth);
  const { user, signInWithGoogle } = useAuth();

  return (
    <div>
      <h1 className="text-xl">Please, login</h1>
      <form className="w-2/4 mx-auto py-3">
        <div className="form-group py-6">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
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
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>

        <button type="submit" className="btn btn-primary ">
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
