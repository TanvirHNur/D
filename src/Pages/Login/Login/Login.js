import { Alert, AlertTitle, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png'

const Login = (e) => {
  const [loginData, setLoginDate] =  useState({});
  const {user, isLoading, authError, logIn} = useAuth();
  const handleOnchange = e =>{
      const field = e.target.name;
      const value= e.target.value;
      const newLoginData = {...loginData};
      newLoginData[field] = value;
      setLoginDate(newLoginData)
  }
  const handleSubmit = e =>{
    logIn(loginData.email, loginData.password)

    e.preventDefault()
  };

    return (
        <Container>
            <Grid container spacing={2}>
  <Grid item xs={12} md={6} sx={{mt:8}}>
  <Typography variant="body1" gutterBottom>
       Login
      </Typography>
    {
      !isLoading && 
      <form onSubmit={handleSubmit}>
      <TextField sx={{width: "75%", m:1}} onChange={handleOnchange}  name="email"
      id="standard-basic" label="Your Email" variant="standard" />
      <TextField sx={{width: "75%", m:1}}  onChange={handleOnchange}  name="password" id="standard-basic" label="Your Email" variant="standard" type="password" />
      <br />
      <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained" style={{backgroundColor: '#5CE7ED'}}>Login</Button>
    <br />
      <NavLink to="/register" style={{textDecoration: 'none'}}>
      <Button variant="text">New to Doctor's Portal?</Button>
      </NavLink>
    </form>
    }
  
    {
       isLoading && <CircularProgress color="secondary" />
    }

    {
      user?.email && <Alert sx={{ width: '75%', m: 1 }} severity="success">Logged in successfully!</Alert>
    }
    {
      authError && <Alert sx={{ width: '75%', m: 1 }} severity="error">
      <AlertTitle>Error</AlertTitle>
      {authError} <strong>check it out!</strong>
    </Alert>
    }

  </Grid>
  <Grid item xs={12} md={6}>
    <img style={{width: '90%'}} src={login} alt="login" />
  </Grid>
  
</Grid>
        </Container>
    );
};

export default Login;