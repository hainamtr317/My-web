
import React,{ useState,useEffect} from 'react'
import { account } from '../appwriteservice/appwrite'
import { useNavigate } from 'react-router-dom';

const Home = () => {
const navigation = useNavigate();
const [first, setfirst] = useState({});  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const username = await account.get();
        
        setfirst(username); 
        
      } catch (error) {
        console.log(error.message);
      }
     
        
    };
    fetchData();
    }, [first]);
  const HandleLogout = async (e) => {
    try {
      e.preventDefault();
      await account.deleteSession('current');
      navigation('/')
    } catch (error) {
      
    }
  }


if(first){
  return (
        <div className="container-xxl border mt-5 p-3">
        <h3 className="text-center"> Super Auth </h3>
        <h6 className='d-flex justify-content-end' >Welcome, Username </h6>
        <div className="d-flex justify-content-end align-items-center">
          
          <button className="btn btn-danger mx-1" onClick={(e) => HandleLogout(e)}>Logout</button>
          <button className="btn btn-primary mx-1"
          onClick={() =>navigation('/reset-password')}
          >Change Password</button>
        </div>
  
        <div className="my-3">
          <h6>UID :   
              {first.$id}</h6>
          <h6>Name : 
              {first.name} </h6>
          <h6>Email :    
              {first.email} </h6>
          <h6>Email Verified :   
              {first.emailVerification ? "Verified" : "Not-Verified"}
          </h6>
  
          <h6>Registered on  
               {new Date(first.registration * 1000).toDateString()}{" "}
          </h6>
        </div>
        <div className="d-flex justify-content-end align-items-center">
          <button className="btn btn-outline-danger">Delete Account</button>
        </div>
      </div>
    )
}
else{
  return(
    <div className="d-flex justify-content">Please login first </div>
  )
}
}

export default Home