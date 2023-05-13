import React, { useState ,useContext} from 'react'
import axios from  'axios'
import { useNavigate } from "react-router-dom";
import { store } from './App'

const Login = ()=>{
 
    const navigate = useNavigate();
    const [token,setToken]=useContext(store)
    const [data ,setData]=useState({
        email:'',
        password:'',
    })
 
    
    

  const handleChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }  
 
 
 const handleSubmit=  (e) =>{
    e.preventDefault();
    axios.post('https://authentication-pan0.onrender.com/login',data).then(
        res=>setToken(res.data.token)
    ).catch((err)=>alert(err.response.data))

    }
    if(token)
    {
     
        navigate('/myprofile');
    }
    
    return(
        <div className='section'>
           <form className='register_form' onSubmit={handleSubmit} >
            <center><h2>Login</h2></center>
            <input type="email" placeholder='Email' name="email" onChange={handleChange} />
            <input type="password" placeholder='password' name="password" onChange={handleChange} />
            <br></br>
            <button>Login</button>
            <br></br>
           </form> 
        </div>
    )

}

export default Login