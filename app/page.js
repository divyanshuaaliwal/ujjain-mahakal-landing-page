"use client"

import React from 'react'
import Booking from "./components/Booking";
import style from "./page.module.css";
import Navbar from './components/Navbar';
import MahakalTourPackages from './components/MahakalTourPackages';
import VehiclePackages from './components/VehiclesPackages';
import PoojaBooking from './components/PoojaBooking';
import Awards from './components/Awards';
import Tours from './components/TourPackages';
import Footer from './components/Footer';

const page = () => {
    return (
        
        <div className={style.wrapper}>
            
            <Navbar/>
           
            <div className={style.container}>
                <Booking/>
                <VehiclePackages/>
                <MahakalTourPackages/>
                <Tours/>
                <PoojaBooking/>
                <Awards/>
           </div>

           <Footer/>

        </div>
    )
}

export default page