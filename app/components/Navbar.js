import React, { useState, useEffect } from 'react';
import styles from "./Navbar.module.css";
import Link from 'next/link';
import { Menu, X } from "lucide-react"; // Lucide icons

const Navbar = () => {
    
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [animateClose, setAnimateClose] = useState(false);
    
    const websiteLink = "https://ujjainmahakal.com/";
    const navData = ["Temple", "Darshan", "Pujas", "Packages", "Gallery", "Contact"];


    const toggleSidebar = () => {
        if (isSidebarOpen) {
            setAnimateClose(true);
            setTimeout(() => {
                setIsSidebarOpen(false);
                setAnimateClose(false);
                document.body.style.overflow = "auto";
            }, 300); // match CSS transition duration
        } else {
            setIsSidebarOpen(true);
            document.body.style.overflow = "hidden";
        }
    };

    useEffect(() => {
       
        const handleResize = () => {
            if (window.innerWidth > 768 && isSidebarOpen) {
                setIsSidebarOpen(false);
                setAnimateClose(false);
                document.body.style.overflow = "auto";
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [isSidebarOpen]);

   

    return (
        <>
            {/* Navbar */}
            <nav className={styles.nav}>
                
                <Link href={websiteLink} className={styles.logo}>
                    Ujjain Mahakal
                </Link>

                {
                    !isSidebarOpen && (
                        <Menu size={28} className={styles.hamburger} onClick={toggleSidebar} />
                    )
                }

                <div className={styles.links}>
                    {
                        navData.map((item, index) => (
                            <Link href={websiteLink} key={index} target="_blank" rel="noopener noreferrer">
                                {item}
                            </Link>
                        ))
                    }
                </div>

            </nav>

            {/* Overlay */}

            {
                (isSidebarOpen || animateClose) && (
                    <div className={`${styles.overlay} ${isSidebarOpen ? styles.overlayShow : styles.overlayHide}`} onClick={toggleSidebar}>

                    </div>
                )
            }

            {/* Sidebar */}

            {
                (isSidebarOpen || animateClose) && (
                    <div
                        className={`${styles.sidebar} ${
                            isSidebarOpen ? styles.sidebarOpen : styles.sidebarClose
                        }`}
                    >
                        <div className={styles.sidebarHeader}>
                            <div className={styles.logo}>Ujjain Mahakal</div>
                            {/* <button > */}
                                <X className={styles.closeBtn} onClick={toggleSidebar} size={28} />
                            {/* </button> */}
                        </div>

                        <div className={styles.sidebarLinks}>
                            {
                                navData.map((item, index) => (
                                    <Link href={websiteLink}  onClick={toggleSidebar} key={index} target="_blank" rel="noopener noreferrer">
                                        {item}
                                    </Link>
                                ))
                            }
                        </div>
                        
                    </div>
                )
            }
        </>
    );
};

export default Navbar;
