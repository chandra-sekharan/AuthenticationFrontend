import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'

const Nav=()=>{
    return(
        <div>
        <AppBar>
        <Toolbar>
          <Typography variant="h6" >
            Welcome
          </Typography>
          <Button className="buttons" color="inherit"><Link to='/register'>Register</Link></Button>
          <Button  color="inherit"><Link to='/login'>Login</Link></Button>
        </Toolbar>
      </AppBar>
        </div>
    )
}

export default Nav