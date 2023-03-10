import React,{useState} from "react";
import { account } from '../appwriteservice/appwrite'

const ResetPassword = () => {
  const [newpass,setnewpass] = useState('');
  const [repass,setrepass] = useState('');
  const Handlechangepass = async () => {
    try {
      if(newpass === repass){
      const changepass = await account.updatePassword(newpass);
      console.log(changepass);}
      else{
        console.log("false");
      } 
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div>
      <div className="container-xl p-3 my-5 border">
        <h2 className="text-center"> Reset your password </h2>
        <form className="container">
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Enter your new password :
            </label>
            <input
              onChange={(e) => {setnewpass(e.target.value)}}
              required
              type="password"
              name="password"
              
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Repeat your new password :
            </label>
            <input
              onChange={(e) => {setrepass(e.target.value)}}
              required
              type="password"
              name="password"
              
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button className="btn btn-success" type="submit">
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;