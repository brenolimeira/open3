import React from "react";
import { Routes as Router, Route } from 'react-router-dom';
import HomePage from "../pages/Home";

export default function Routes() {

    return(
        <Router>
            <Route path='/' Component={HomePage} />
            <Route path='/home' Component={HomePage} />
        </Router>
    )
}