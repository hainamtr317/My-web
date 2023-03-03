import React, { useState } from "react";
import SocialSignin from "./SocialSignin";
import { Link } from "react-router-dom";
import{ account } from "../appwriteservice/appwrite"
import { ID } from "appwrite";
import {useNavigate } from "react-router";

const Signup = () => {
const navigation = useNavigate();

  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
  });

  const signupUser = async(e) => {
    e.preventDefault();
    try {
      const newUser = await account.create(
        ID.unique(),
        userDetails.email,
        userDetails.password,
        userDetails.name
       );
       await account.createEmailSession(userDetails.email, userDetails.password);
       navigation('/Home')
       
      
      }catch(e){
        console.log(e.message);
      }
    
 
  };

  return (
    <div>
      <h2 className="mt-5 text-center">Super Auth</h2>
      <h3 className=" text-center">Signup</h3>

      <form className="container">
        <div className="mb-3">
          <label for="name" className="form-label">
            Name
          </label>
          <input
            onChange={(e) => {
              setUserDetails({
                ...userDetails,
                name: e.target.value,
              });
            }}
            type="text"
            className="form-control"
            id="name"
            required
            aria-describedby="name"
            name="email"
          />
        </div>
        <div className="mb-3">
          <label for="email" className="form-label">
            Email address
          </label>
          <input
            onChange={(e) => {
              setUserDetails({
                ...userDetails,
                email: e.target.value,
              });
            }}
            type="email"
            className="form-control"
            id="email"
            required
            aria-describedby="email"
            name="password"
          />
        </div>
        <div className="mb-3">
          <label for="password" className="form-label">
            Password
          </label>
          <input
            onChange={(e) => {
              setUserDetails({
                ...userDetails,
                password: e.target.value,
              });
            }}
            required
            type="password"
            className="form-control"
            id="password"
            name="password"
          />
        </div>
        <div className="mb-3">
          <span>Already have an account ? </span>{" "}
          <Link to="/login">
            <button className="btn btn-primary">Login</button>
          </Link>
        </div>

        <button
          onClick={(e) => signupUser(e)}
          type="submit"
          className="btn btn-success"
        >
          Signup
        </button>
      </form>

      <SocialSignin />
    
    </div>
  );
};

export default Signup;