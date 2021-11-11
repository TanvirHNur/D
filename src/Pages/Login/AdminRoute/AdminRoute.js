import { CircularProgress } from '@mui/material';
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const {user, isLoading, admin} =useAuth();
    // console.log(user)
    if(isLoading){
        return <CircularProgress/>
    }
    return (
    <Route
            {...rest}
            render={({ location }) =>
                user?.email && admin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/l",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default AdminRoute;