// components/Footer.jsx
import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Video, Star, Award } from 'lucide-react';
import styles from './Footer.module.css';

const navLinks = [
    { id: 1, title: 'Home', url: '/' },
    { id: 2, title: 'About Us', url: '/about' },
    { id: 3, title: 'Darshan Booking', url: '/darshan-booking' },
    { id: 4, title: 'Gallery', url: '/gallery' },
    { id: 5, title: 'Contact', url: '/contact' },
];

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* About */}
                    <div className={styles.section}>
                        <h4 className={styles.title}>Mahakaleshwar Guide</h4>
                        <p className={styles.text}>
                            Your comprehensive guide to exploring and experiencing the divine Mahakaleshwar Temple in Ujjain.
                        </p>
                        <div className={styles.socialIcons}>
                            <a href="#" aria-label="Facebook" className={styles.icon}><Facebook size={20} /></a>
                            <a href="#" aria-label="Twitter" className={styles.icon}><Twitter size={20} /></a>
                            <a href="#" aria-label="Instagram" className={styles.icon}><Instagram size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className={styles.section}>
                        <h4 className={styles.title}>Quick Links</h4>
                        <ul className={styles.linkList}>
                            {navLinks.map(link => (
                                <li key={link.id}>
                                    <Link href={link.url} className={styles.link}>
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Customer Center */}
                    <div className={styles.section}>
                        <h4 className={styles.title}>Customer Center</h4>
                        <ul className={styles.infoList}>
                            <li><Video size={18} className={styles.iconInline} /> Customer Video</li>
                            <li><Star size={18} className={styles.iconInline} /> Customer Photos</li>
                            <li><Star size={18} className={styles.iconInline} /> Reviews</li>
                            <li><Award size={18} className={styles.iconInline} /> Awards & Certifications</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className={styles.section}>
                        <h4 className={styles.title}>Contact</h4>
                        <ul className={styles.infoList}>
                            <li><MapPin size={18} className={styles.iconInline} />Skye Earth Corporate Park, 1206 E, opp. Shalimar Township, Indore, Madhya Pradesh 452010</li>
                            <li><Phone size={18} className={styles.iconInline} /> +91 9111452099</li>
                            <li><Mail size={18} className={styles.iconInline} /> info@mahakaleshwarguide.com</li>
                        </ul>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {currentYear} Mahakaleshwar Guide. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
