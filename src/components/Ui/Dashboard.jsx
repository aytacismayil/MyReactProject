import React from 'react';
import { Redirect } from "react-router-dom";

const Dashboard = () => {
    const { user } = useAuth0(); // if we were using auth0

    // if there is not user, redirect to the home page
    if (!user) {
      return <Redirect to="/login" />
    }
    return (
        <div>
             dashboard goes here
        </div>
    )
}

export default Dashboard
