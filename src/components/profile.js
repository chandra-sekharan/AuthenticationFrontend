import React,{useContext, useEffect, useState} from "react";
import { store } from "./App";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";



const Profile = ()=>{
    const navigate =useNavigate();
    const [data ,setData]=useState('');
    const [token,setToken]=useContext(store);
   

  useEffect(()=>{
   
     axios.get('https://authentication-pan0.onrender.com/myprofile',{
        headers:{
            'x-token':token
        }
     }).then(res =>setData(res.data)).catch((err)=>console.log(err))
    
    },[])
    if(!token)
    {
        navigate('/login')
    }

    const logout=()=>{
        localStorage.setItem('jsontoken' , null);     
        setToken(null)
    }
    return(
    <div className="section">
      <AppBar>
        <Toolbar>
          <Typography variant="h6" >
            Dashboard
          </Typography>
         <Button className="buttons" onClick={logout} color="inherit">Logout</Button>
        </Toolbar>
     </AppBar>
      <div>
       <Card className="card">
          <CardContent>
          <Typography  color="textPrimary" gutterBottom>
            <center><b>User Details</b></center>
            </Typography>
            <Typography  color="textSecondary" gutterBottom>
            <b>Email:</b> {data.email}
            </Typography>
            <Typography  color="textSecondary" gutterBottom>
            <b>First Name:</b> {data.fname}
            </Typography>
            <Typography  color="textSecondary" gutterBottom>
            <b>Last Name:</b> {data.lname}
            </Typography>
            <Typography  color="textSecondary" gutterBottom>
            <b>Phone:</b> {data.phone}
            </Typography>
            <Typography  color="textSecondary" gutterBottom>
            <b>Location:</b> {data.location}
            </Typography>
          </CardContent>
       </Card>
   </div>

</div>
    )
}

export default Profile