import React from "react";
import { account } from '../appwriteservice/appwrite'
import { useNavigate } from 'react-router-dom';

const SocialSignin = () => {
  const navigation = useNavigate();
  const GoogleAuth = async(e) => {
    e.preventDefault();
    try {
      
      const ses = await account.createOAuth2Session('google'
      ,'http://localhost:3000/Home','http://localhost:3000/Home');
      console.log(ses);
      
      }catch(e){
        console.log(e.message);
      }
    
 
  };
  return (
    <div className="container-xl my-3">
      <b>OR:</b>
      <br />

      <button className="btn btn-outline-danger my-1 mx-2 " onClick={(e) =>GoogleAuth(e)}>Google</button>

      <button className="btn btn-outline-primary my-1">Facebook</button>
    </div>
  );
};

export default SocialSignin;