import { useState } from "react";
import axios from 'axios'
import {toast} from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'
import './login.css'

export default function Login(){
  const navigate = useNavigate()
  const[data,setData] = useState({
    email: '',
    password: '',
  })

  const loginUser = async (e)=>{
    e.preventDefault()
    const{email,password} = data
    try {
      const{data} = await axios.post('/login',{
        email,
        password
      });
      if(data.error){
        toast.error(data.error)
      }else{
        setData({});
        navigate('/dashboard')
      }
    } catch (error) {
      
    }
  }
 
  return (
    <div className="main">
      <div class="container-l" id="container-l">
          <div class="form-container sign-in">
              <form onSubmit={loginUser}>
                  <h1>Sign In</h1>
                  <input type="email" placeholder="Email" value={data.email} onChange={(e) => setData({...data,email: e.target.value})}/>
                  <input type="password" placeholder="Password" value={data.password} onChange={(e) => setData({...data,password: e.target.value})}/>
                  {/* <a href="#">Forget Your Password?</a> */}
                  <button type="submit">Sign In</button>
              </form>
          </div>
          <div class="toggle-container">
              <div class="toggle">
                  <div class="toggle-panel toggle-right">
                      <h1>Welcome Back!</h1>
                      <p>Enter your details</p>
                  </div>
              </div>
          </div>
      </div>
    </div>
    
  )

  
}
