'use client';

import { useState } from 'react';
import styles from './AbhishekBookingVideoComponent.module.css';

export default function AbhishekBooking() {
    const today = new Date();
    const [currentDate, setCurrentDate] = useState(today);
    const [selectedDate, setSelectedDate] = useState(null);
    const [flipDirection, setFlipDirection] = useState(null);
    const [isFlipped, setIsFlipped] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        nationality: 'Indian',
        date: '',
    });

    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
    const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

    const isPastMonth = (year, month) => {
        return year < today.getFullYear() || (year === today.getFullYear() && month < today.getMonth());
    };

    const handlePrevMonth = () => {
        const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
        if (!isPastMonth(newDate.getFullYear(), newDate.getMonth())) {
            setFlipDirection('prev');
            setTimeout(() => {
                setCurrentDate(newDate);
                setFlipDirection(null);
            }, 300);
        }
    };

    const handleNextMonth = () => {
        setFlipDirection('next');
        setTimeout(() => {
            setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
            setFlipDirection(null);
        }, 300);
    };

    const formatDateToLocalYYYYMMDD = (date) => {
        const yyyy = date.getFullYear();
        const mm = String(date.getMonth() + 1).padStart(2, '0');
        const dd = String(date.getDate()).padStart(2, '0');
        return `${yyyy}-${mm}-${dd}`;
    };

    const handleDateClick = (day) => {
        const clickedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
        if (clickedDate >= today) {
            setSelectedDate(clickedDate);
            setFormData(prev => ({
                ...prev,
                date: formatDateToLocalYYYYMMDD(clickedDate)
            }));
            setIsFlipped(true);
        }
    };

    const renderCalendar = () => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const daysInMonth = getDaysInMonth(year, month);
        const firstDay = getFirstDayOfMonth(year, month);
        const days = [];

        for (let i = 0; i < firstDay; i++) {
            days.push(<div key={`empty-${i}`} className={styles.empty}></div>);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(year, month, day);
            const isPast = date < today;
            const isSelected = selectedDate &&
                selectedDate.getDate() === day &&
                selectedDate.getMonth() === month &&
                selectedDate.getFullYear() === year;

            days.push(
                <div
                    key={day}
                    className={`${styles.day} ${isPast ? styles.disabled : ''} ${isSelected ? styles.selected : ''}`}
                    onClick={() => !isPast && handleDateClick(day)}
                >
                    {day}
                </div>
            );
        }

        return days;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Booking confirmed for ${formData.name} on ${selectedDate.toDateString()}!`);
        setIsFlipped(false);
        setFormData({ name: '', email: '', phone: '', nationality: 'Indian', date: '' });
    };

    const handleBackToCalendar = () => {
        setIsFlipped(false);
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Abhishek Booking</h1>
                <p>
                    Take part in the sacred Abhishek ritual at Mahakaleshwar Temple, Ujjain. This devotional ceremony involves bathing the Shivling with holy substances like milk, water, honey, and curd, accompanied by Vedic chants. Book your slot online with ease—Indian nationals should book at least 30 days in advance, while foreign nationals are advised to book 90 days ahead.
                </p>
            </header>

            <section className={styles.main}>
                <div className={styles.details}>
                    <h2 className={styles.title}> Abhishek Details</h2>
                    <div className={styles.parkInfo}>
                        <p className={styles.description}>
                            Mahakaleshwar Temple, located in Ujjain, Madhya Pradesh, is one of the twelve Jyotirlingas in India. The Abhishek ritual, where Lord Shiva is bathed with sacred substances like milk, water, and honey, is a deeply spiritual ceremony that draws devotees from across the globe.
                        </p>
                    </div>

                    <div className={styles.pricing}>
                        <h3>Daily Abhishek</h3>
                        <p>Indian: ₹200</p>
                        <p>Foreigner: ₹500</p>
                    </div>

                    <div className={styles.leftContainer}>
                        <div className={styles.pricing}>
                            <h3>Special Days</h3>
                            <p>Indian: ₹300</p>
                            <p>Foreigner: ₹700</p>
                        </div>

                        <div className={styles.pricing}>
                            <h3>Timings</h3>
                            <p>Entry Starts: 5:00 AM</p>
                            <p>Abhishek Ritual: 6:00 AM – 7:30 AM</p>
                        </div>
                    </div>

                    <div className={styles.pricing}>
                        <h3>Important Guidelines</h3>
                        <p>Carry a valid government-issued ID</p>
                        <p>Wear modest traditional attire</p>
                        <p>Arrive early for security and seating</p>
                    </div>
                </div>

                <div className={styles.calendarAndForm}>
                    <div className={`${styles.card} ${isFlipped ? styles.flip : ''}`}>
                        <div className={styles.calendar}>
                            <h2>Select Your Aarti Date</h2>
                            <div className={styles.monthNavigation}>
                                <button onClick={handlePrevMonth} disabled={isPastMonth(currentDate.getFullYear(), currentDate.getMonth() - 1)}> {'<'} </button>
                                <span>{`${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`}</span>
                                <button onClick={handleNextMonth}> {'>'} </button>
                            </div>
                            <div className={`${styles.days} ${flipDirection ? styles[flipDirection] : ''}`}>
                                <div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div><div>Sun</div>
                                {renderCalendar()}
                            </div>
                        </div>

                        <div className={styles.formContainer}>
                            <h2 className={styles.formTitle}>Book Your Aarti</h2>
                            <form onSubmit={handleSubmit}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="name">Full Name</label>
                                    <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="phone">Phone Number</label>
                                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="nationality">Nationality</label>
                                    <select id="nationality" name="nationality" value={formData.nationality} onChange={handleInputChange}>
                                        <option value="Indian">Indian</option>
                                        <option value="Foreigner">Foreigner</option>
                                    </select>
                                </div>
                                <div className={styles.formGroup}>
                                    <label>Selected Date</label>
                                    <input type="text" value={selectedDate ? selectedDate.toDateString() : ''} readOnly />
                                </div>
                                <div className={styles.buttonGroup}>
                                    <button type="button" onClick={handleBackToCalendar} className={styles.backButton}>Back to Calendar</button>
                                    <button type="submit" className={styles.submitButton}>Confirm Booking</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
