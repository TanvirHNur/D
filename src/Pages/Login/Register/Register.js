import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import login from '../../../images/login.png'

const Register = (e) => {
  const [loginData, setLoginDate] =  useState({})
  const handleOnchange = e =>{
      const field = e.target.name;
      const value= e.target.value;
      const newLoginData = {...loginData};
      newLoginData[field] = value;
      setLoginDate(newLoginData)
  }
  const handleSubmit = e =>{
    alert('hell0')

    e.preventDefault()
  };

    return (
        <Container>
            <Grid container spacing={2}>
  <Grid item xs={12} md={6} sx={{mt:8}}>
  <Typography variant="body1" gutterBottom>
       Register
      </Typography>
    <form onSubmit={handleSubmit}>
      <TextField sx={{width: "75%", m:1}} onChange={handleOnchange}  name="email"
      id="standard-basic" label="Your Email" variant="standard" />
      <TextField sx={{width: "75%", m:1}}  onChange={handleOnchange}  name="password" id="standard-basic" label="password" variant="standard" type="password" />
      <TextField sx={{width: "75%", m:1}}  onChange={handleOnchange}  name="password2" id="standard-basic" label="Retype Your password" variant="standard" type="password" />
      <br />
      
    <Button type="submit" variant="container" style={{color: '#5CE7ED'}}>
      Register
    </Button>
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