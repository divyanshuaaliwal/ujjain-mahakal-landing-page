import React from 'react';
import styles from './TourPackages.module.css';

import TravelPackageCard from '../components/TourPackages/TravelPackageCard';
import {Alltours} from "../Data/completeToursData";
import {InternalPageHeading,} from '../MainLayouts';
export default function Tours() {

    return (
        <>
           
            <InternalPageHeading 
                title="Mahakaleshwar Tour Packages" 
            />

            <div className={styles.cardContainer}>
                {
                    Alltours.map((pkg, index) => (
                        <TravelPackageCard key={index} pkg={pkg} />
                    ))
                }
            </div>
        </>
    );
}
