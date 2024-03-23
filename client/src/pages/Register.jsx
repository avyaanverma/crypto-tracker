import { useState } from "react";
import axios from 'axios';
import {toast} from 'react-hot-toast';
import {useNavigate} from 'react-router-dom';
import './login.css';

export default function Register(){
  const navigate = useNavigate()
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  })
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Add isLoggedIn state

  const registerUser = async (e) =>{
      e.preventDefault();
      const {name,email,password} = data;
      try{
        const {data} = await axios.post('/register',{
          name,email,password
        })
        if(data.error){
          toast.error(data.error)
        }else{
          setData({})
          toast.success('Login Successful. Welcome!')
          setIsLoggedIn(true); // Set isLoggedIn to true
          navigate('/login');
        }
      }catch(error){
        console.log(error);
      }

  } 

  return (
    <div className="main">
      {isLoggedIn && <Navbar />} {/* Render the Navbar only if isLoggedIn is true */}
      <div class="container-l active" id="container-l">
        <div class="form-container sign-up">
            <form onSubmit={registerUser}>
                <h1>Create Account</h1>
                <div class="social-icons">
                    {/* <!-- Remove icons -->
                    <!-- <a href="#" class="icon"><i class="fa-brands fa-google-plus-g"></i></a>
                    <a href="#" class="icon"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="#" class="icon"><i class="fa-brands fa-github"></i></a> -->
                    <!-- <a href="#" class="icon"><i class="fa-brands fa-linkedin-in"></i></a> --> */}
                </div>
                {/* <span>or use your email for registeration</span> */}
                <input type="text" placeholder="Name" value={data.name} onChange={(e) => setData({...data,name: e.target.value})}/>
                <input type="email" placeholder="Email" value={data.email} onChange={(e) => setData({...data,email: e.target.value})}/>
                <input type="password" placeholder="Password"value={data.password} onChange={(e) => setData({...data,password: e.target.value})}/>
                <button type='submit'>Sign Up</button>
            </form>
        </div>
        <div class="toggle-container">
            <div class="toggle">
                <div class="toggle-panel toggle-left">
                    <h1>Hello, Friend!</h1>
                    <p>Register with your details</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
