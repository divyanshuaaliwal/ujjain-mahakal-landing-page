'use client';
import React, { useState } from 'react';
import styles from './Booking.module.css';
import Aarti from './Aarti';
import { abhishekBookingData, bhasmaAartiData } from "../Data/aartiData";
import AbhishekBooking from './AbhishekBookingVideoComponent';

const FlipBooking = () => {
    
    const [active, setActive] = useState("abhishek");

    return (
      
        <section className={styles.flipSection}>

            {/* Toggle Buttons */}
            <div className={styles.buttonContainer}>
                <button 
                    className={`${styles.toggleBtn} ${active === "abhishek" ? styles.active : ""}`} 
                    onClick={() => setActive("abhishek")}
                >
                    Abhishek Booking
                </button>
                <button 
                    className={`${styles.toggleBtn} ${active === "bhasma" ? styles.active : ""}`} 
                    onClick={() => setActive("bhasma")}
                >
                    Bhasma Aarti Booking
                </button>
            </div>

            {/* Conditional Rendering */}
            {
                active === "abhishek" ? (
                    // <Aarti {...abhishekBookingData} />
                    <AbhishekBooking/>
                    
                ) : (
                    // <Aarti {...bhasmaAartiData} />
                     <AbhishekBooking/>
                )
            }
        </section>
    );
};

export default FlipBooking;
