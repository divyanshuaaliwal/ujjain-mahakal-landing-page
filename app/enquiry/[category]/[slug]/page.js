'use client';

import React, { useState } from 'react';
import styles from './page.module.css';
import { InternalPageHeading } from '../../../MainLayouts';
import { useParams } from 'next/navigation';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

export default function UserEnquiryForm() {

        const {category, slug} = useParams();
    
    
        const [formData, setFormData] = useState({
            
        });

        
        useState( () => (
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: '',
                city: '',
                state: '',
                country: '',
                pincode: '',
                packageCategory:  category,
                packageSlug: slug,
            })
        ), []
        )

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const validate = () => {
        const newErrors = {};

        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            newErrors.email = 'Enter a valid email';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone is required';
        } else if (!formData.phone.match(/^[6-9]\d{9}$/)) {
            newErrors.phone = 'Enter a valid 10-digit phone number';
        }

        if (formData.pincode && !/^\d{6}$/.test(formData.pincode)) {
            newErrors.pincode = 'Enter a valid 6-digit pincode';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            setIsSubmitting(true);

            try {
                await new Promise(resolve => setTimeout(resolve, 1000));
                console.log('Form Submitted:', formData);
                setIsSuccess(true);

                setTimeout(() => {
                    setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        subject: '',
                        message: '',
                        city: '',
                        state: '',
                        country: '',
                        pincode: '',
                        setFormData,
                    });
                    setIsSuccess(false);
                }, 10000);
            } catch (error) {
                console.error('Error:', error);
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    const getPackageLabel = (category) => {
        switch (category) {
            case 'taxi-booking':
                return 'Taxi Package';
            case 'madhya-pradesh-tour':
                return 'Madhya Pradesh Tour Package';
            case 'hotels-in-mp':
                return 'Madhya Pradesh Hotel Package';
            case 'pooja-booking':
                return 'Pooja Package';
            case 'tours':
                return 'Full Darshan Package';
            case 'hotels-in-ujjain':
                return 'Ujjain Hotel Package';
            case 'places-near-ujjain':
                return 'Place Package';
            case 'things-to-do':
                return 'Activity Package';
            case 'security-services':
                return 'Security Service Package';
            case 'luxury-cars':
               return 'Luxury Car Package';
            default:
                return 'Package'; // default fallback
        }
    };


    return (
        <>
        
            <Navbar/>
     
        <div className={styles.wrapperContainer}>
            <div className={styles.formContainer}>
                <InternalPageHeading title="Want to Enquire Something ?" />

                {
                    isSuccess ? (
                        <div className={styles.successMessage}>
                            <svg className={styles.checkmark} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                                <circle className={styles.checkmarkCircle} cx="26" cy="26" r="25" fill="none" />
                                <path className={styles.checkmarkCheck} fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                            </svg>
                            <h2>Thank you!</h2>
                            <p>We have received your request.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className={styles.form}>

                            <div className={styles.grid}>
                                <div key={category} className={styles.inputGroup}>
                                        <input
                                            readOnly
                                            disabled
                                            id={category}
                                            name={category}
                                            value={getPackageLabel(category)}
                                            className={styles.fixedInput}
                                        />
                                </div>

                            <div key={slug} className={styles.inputGroup}>
                                <input
                                    readOnly
                                    disabled
                                    id={slug}
                                    name={slug}
                                    value={
                                        slug
                                            .replaceAll('-', ' ')               // replace hyphens with spaces
                                            .split(' ')                        // split into words
                                            .slice(0, -1)                     // remove the last word
                                            .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // capitalize
                                            .join(' ')                       // join back to string
                                    }
                                    className={styles.fixedInput}
                                />
                            </div>
    
                            </div>

                            {
                                ['name', 'email', 'phone', 'subject', 'city', 'state', 'country', 'pincode'].map((field) => (
                                    <div key={field} className={styles.inputGroup}>
                                        <label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                                        <input
                                            id={field}
                                            name={field}
                                            value={formData[field]}
                                            onChange={handleChange}
                                            placeholder={`Enter your ${field}`}
                                            className={errors[field] ? styles.errorInput : ''}
                                        />
                                        {errors[field] && <p className={styles.error}>{errors[field]}</p>}
                                    </div>
                                ))
                            }

                            <div className={styles.inputGroup}>
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    placeholder="Write your message here"
                                />
                            </div>

                            <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
                                {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
                            </button>
                        </form>
                    )
                }
            </div>
        </div>

                <Footer/>
           </>
    );
}