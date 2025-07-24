"use client";
import styles from './TravelPackageCard.module.css';

import { Landmark, Hotel, HeaterIcon as Helicopter, UtensilsCrossed, Mountain } from 'lucide-react';

export function PackageFeatures({ features }) {

  
    function getIcon(iconName, size = 20) {

        switch (iconName) {

            case 'highlights':
                return <Landmark size={size} />;
            case 'hotel':
                return <Hotel size={size} />;
            case 'transport':
                return <Helicopter size={size} />;
            case 'meals':
                return <UtensilsCrossed size={size} />;
            case 'sightseeing':
                return <Mountain size={size} />;
            default:
                return <Landmark size={size} />;
        }
    };



    return (
        <div className={styles.featuresContainer}>
            {
                features.map((feature, index) => (
                    <div key={index} className={styles.featureItem}>
                        <div className={styles.featureIcon}>
                            {getIcon(feature.icon)}
                        </div>
                        <span className={styles.featureLabel}>{feature.label}</span>
                    </div>
                ))
            }
        </div>
    );
}
