'use client'

import { useState } from 'react';
import styles from './Aarti.module.css';

export default function Aarti({ title,
    description,
    location,
    pricing,
    timings,
    guidelines }) {

    const today = new Date();
    const [currentDate, setCurrentDate] = useState(today);
    const [selectedDate, setSelectedDate] = useState(null);
    const [flipDirection, setFlipDirection] = useState(null);

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

    const handleDateClick = (day) => {
        const clickedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
        if (clickedDate >= today) {
            setSelectedDate(clickedDate);
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

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>{title}</h1>
                <p>{description}</p>
            </header>

            <section className={styles.main}>

                <div className={styles.details}>
                    <h2 className={styles.title}>Ritual Details</h2>

                    <div className={styles.parkInfo}>
                        <p className={styles.description}>{location}</p>
                    </div>

                    <div className={styles.pricing}>
                        <h2>Daily Pricing</h2>
                        <p>Indian: ₹{pricing.daily.indian}</p>
                        <p>Foreigner: ₹{pricing.daily.foreigner}</p>
                    </div>

                    <div className={styles.leftContainer}>
                        <div className={styles.pricing}>
                            <h3>Special Days</h3>
                            <p>Indian: ₹{pricing.specialDays.indian}</p>
                            <p>Foreigner: ₹{pricing.specialDays.foreigner}</p>
                        </div>

                        <div className={styles.pricing}>
                            <h3>Timings</h3>
                            {timings.entry && <p>Entry Starts: {timings.entry}</p>}
                            {timings.ritual && <p>Abhishek Ritual: {timings.ritual}</p>}
                            {timings.aarti && <p>Bhasma Aarti: {timings.aarti}</p>}
                        </div>
                    </div>

                    <div className={styles.pricing}>
                        <h3>Important Guidelines</h3>
                        {guidelines.map((line, index) => (
                            <p key={index}>{line}</p>
                        ))}
                    </div>
                </div>


                <div className={styles.calendarAndForm}>
                    <div className={styles.card}>
                        <div className={styles.calendar}>
                            <h2>Select Your Aarti Date</h2>

                            <div className={styles.monthNavigation}>
                                <button onClick={handlePrevMonth} disabled={isPastMonth(currentDate.getFullYear(), currentDate.getMonth() - 1)}>{"<"}</button>
                                <span>{`${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`}</span>
                                <button onClick={handleNextMonth}>{">"}</button>
                            </div>

                            <div className={`${styles.days} ${flipDirection ? styles[flipDirection] : ''}`}>
                                <div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div><div>Sun</div>
                                {renderCalendar()}
                            </div>

                        </div>
                    </div>
                </div>
            
            </section>
        </div>
    );
}

