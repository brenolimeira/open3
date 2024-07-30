import React from "react";
import { Routes as Router, Route } from "react-router-dom";
import HomePage from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import SevicesPage from "../pages/ServicesPage";
import ItConsultancy from "../pages/ServicesPage/ItConsultancy";
import HardwareMaintenance from "../pages/ServicesPage/HardwareMaintenance";
import NetworkProjects from "../pages/ServicesPage/NetworkProjects";
import ItSupport from "../pages/ServicesPage/ItSupport";

export default function Routes() {

    return(
        <Router>
            <Route path='/' Component={HomePage} />
            <Route path='/home' Component={HomePage} />
            <Route path='/about' Component={About} />
            <Route path='/services' Component={SevicesPage} />
            <Route path='/contact' Component={Contact} />
            <Route path='/services/it_consultancy' Component={ItConsultancy} />
            <Route path='/services/hardware_maintenance' Component={HardwareMaintenance} />
            <Route path='/services/network_projects' Component={NetworkProjects} />
            <Route path='/services/it_support' Component={ItSupport} />
        </Router>
    )
}