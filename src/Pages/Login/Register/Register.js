import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png'

const Register = (e) => {
  const [loginData, setLoginDate] =  useState({});
  const {registerUser} = useAuth();

  const handleOnchange = e =>{
      const field = e.target.name;
      const value= e.target.value;
      const newLoginData = {...loginData};
      newLoginData[field] = value;
      setLoginDate(newLoginData)
  }
  const handleSubmit = e =>{
    e.preventDefault()
      if(loginData.password !== loginData.password2){
          alert('Password did not match')
          return;
      }
      registerUser(loginData.email, loginData.password)
  };

    return (
        <Container>
            <Grid container spacing={2}>
  <Grid item xs={12} md={6} sx={{mt:8}}>
  <Typography variant="body1" gutterBottom>
       Register
      </Typography>
    <form onSubmit={handleSubmit}>
      <TextField sx={{width: "75%", m:1}} onChange={handleOnchange}  name="email" type="email" 
      id="standard-basic" label="Your Email" variant="standard" required />
      <TextField sx={{width: "75%", m:1}}  onChange={handleOnchange}  name="password" id="standard-basic" label="password" variant="standard" type="password" />
      <TextField sx={{width: "75%", m:1}}  onChange={handleOnchange}  name="password2" id="standard-basic" label="Retype Your password" variant="standard" type="password" />
      <br />
      
      <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained" style={{backgroundColor: '#5CE7ED'}}>Register</Button>
    <br />
      <NavLink to="/login" style={{textDecoration: 'none'}}>
      <Button variant="text">Have An Account?</Button>
      </NavLink>
    </form>
  </Grid>
  <Grid item xs={12} md={6}>
    <img style={{width: '90%'}} src={login} alt="login" />
  </Grid>
  
</Grid>
        </Container>
    );
};

export default Register;