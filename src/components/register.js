import React, { useState } from 'react'
import axios from  'axios'

const Register = ()=>{
    
    const [data ,setData]=useState({
        fname:'',
        lname:'',
        email:'',
        password:'',
        confirmPassword:'',
        phone:'',
        location:''
    })
   
  const handleChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }  


 const handleSubmit=  (e) =>{
    e.preventDefault();
    axios.post('https://authentication-pan0.onrender.com/registration',data).then(
        res=>alert(res.data)
    ).catch((err)=>alert(err.response.data))

    }
    
    return(
        <div className='section'>
           <form className='register_form' onSubmit={handleSubmit} >
            <center><h2>Registration</h2></center>
            <input type="text" placeholder="First Name"  name="fname"  onChange={handleChange}  /> 
            <input type="text" placeholder="Last Name"  name="lname" onChange={handleChange} />
            <input type="email" placeholder="Email"  name="email" onChange={handleChange} />
            <input type="password" placeholder="Password"  name="password" onChange={handleChange} />
            <input type="password" placeholder="confirm password"  name="confirmPassword" onChange={handleChange} />
            <input type="text" placeholder="Phone" name="phone" onChange={handleChange} />
            <input type="text" placeholder="Location"  name="location"  onChange={handleChange}/><br></br>
            <button>Register</button>
            <br></br>
           </form> 
        </div>
    )

}

export default Register