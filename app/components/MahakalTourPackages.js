'use client';
import Link from 'next/link';
import styles from './MahakalTourPackages.module.css';
import { allHotels } from "../Data/allHotelsData";
import Image from 'next/image';
import { MapPin, Star, Sparkles} from 'lucide-react';
import { InternalPageHeading,} from '../MainLayouts';
import TwoButtons from './TwoButtons';

const PackageCard = ({ pkg }) => {
    return (
        <div className={styles.tourCard}>
            <Link href={`enquiry/hotels-in-ujjain/${pkg.slug}`}>

                <div className={styles.cardImageWrapper}>
                    <div className={styles.cardImage}>
                        <Image
                            src={pkg.heroImage}
                            alt={pkg.title}
                            fill
                            className={styles.imageFix}
                            sizes="(max-width: 768px) 100vw, 33vw"
                        />
                    </div>
                    <span className={styles.packageDuration}>{pkg.duration}</span>
                </div>
            </Link>
            <div className={styles.cardContent}>
                <h3 className={styles.packageTitle}>{pkg.title}</h3>
                <div className={styles.packageMeta}>
                    <p className={styles.loc}>
                        <MapPin size={16} style={{ marginRight: 6, display: 'inline' }} />
                        <strong>Location:</strong>{pkg.location}
                    </p>
                    <p>
                        <Star size={16} style={{ marginRight: 6, display: 'inline' }} />
                        <strong>Rating:</strong> {pkg.rating} ({pkg.reviews} reviews)
                    </p>
                </div>

                <div className={styles.packagePrice}>
                    <span className={styles.priceValue}>{pkg.currentPrice}</span>
                    <span className={styles.priceLabel}>per person</span>
                </div>

                <div className={styles.packageDetails}>

                    {
                        pkg.cancellationPolicy?.length > 0 && (
                            <div>
                                <h4>
                                    <Sparkles size={16} style={{ marginRight: 6, display: 'inline' }} />
                                    Highlights:
                                </h4>
                                <ul>
                                    {
                                        pkg.cancellationPolicy.slice(0, 3).map((item, idx) => (
                                            <li className={styles.lines} key={idx}>{item}</li>
                                        ))

                                    }
                                </ul>
                            </div>
                        )
                    }

                </div>

                <TwoButtons path={`enquiry/hotels-in-ujjain/${pkg.slug}`} />

            </div>
        </div>
    );
};

const MahakalTourPackages = () => {


    return (
        <>

            <InternalPageHeading
                title="Mahakal Top Hotels Booking"
            />

            <div className={styles.tourGrid}>
                {
                    allHotels.map((pkg, index) => (
                        <PackageCard key={index} pkg={pkg} />
                    ))
                }
            </div>

        </>
    );
};

export default MahakalTourPackages;