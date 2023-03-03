import React, { useState } from "react";
import { Link } from 'react-router-dom';
import SocialSignin from './SocialSignin';
import{ account } from "../appwriteservice/appwrite"
import {useNavigate } from "react-router";
import Toastmes from "../components/Toastmessage"
import Tapbar from "../components/Appbar"

const Login = () => {
  const [show, setShow] = useState(false);
 const navigation= useNavigate();
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });
  const [message, setmessage] = useState('');  

  const HandleLogin = async(e) => {
    e.preventDefault();
    try {
      
      const ses = await account.createEmailSession(userDetails.email, userDetails.password);
      console.log(ses);
      navigation('/Home')
      }catch(e){
        handleshowToast(e);
        console.log(e.message);
      }
    
 
  };
  const handleshowToast = async(e) => {
    setShow(true);
    setmessage(e.message);
    await delay(2000);
    setShow(false);
  }
  const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );

  const ChangePasswork = async(e) => {
    e.preventDefault();
    try {
       await account.createOAuth2Session('google');
      }catch(e){
        console.log(e.message);
      }   
 
  };


    return (
        
        <div>
          <Tapbar/>
          <Toastmes  onClose={() => setShow(false)} message = {message} show = {show} delay={3000} autohide 
          ></Toastmes>
          <h2 className="mt-5 text-center">Super Auth</h2>
          <h3 className=" text-center">Login</h3>
          <form className="container">
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
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
                name="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
               onChange={(e) => {
                setUserDetails({
                  ...userDetails,
                  password: e.target.value,
                });
              }}
                type="password"
                name="password"
                required
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3">
              <span>First time here ? </span>
              <Link to="/signup">
                <button className="btn btn-primary mx-1">Signup</button>
              </Link>
            </div>
  
            <div>
              <span>Forget password ? </span>
              <Link to='/forget-password' >
                <button
                  className="btn btn-danger mx-1"
                
                >
                  Forget Password
                </button>
              </Link>
            </div>
  
            <button
             onClick={(e) => HandleLogin(e)}
              type="submit"
    
              className="btn btn-success"
            >
              Login
            </button>
          </form>
        <SocialSignin/>
         
        </div>
      );
}

export default Login