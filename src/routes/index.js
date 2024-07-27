import React from "react";
import { Routes as Router, Route } from 'react-router-dom';
import HomePage from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";

export default function Routes() {

    return(
        <Router>
            <Route path='/' Component={HomePage} />
            <Route path='/home' Component={HomePage} />
            <Route path='/about' Component={About} />
            <Route path='/contact' Component={Contact} />
        </Router>
    )
}