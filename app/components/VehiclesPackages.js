import styles from './VehiclesPackages.module.css';
import Image from 'next/image';
import { vehiclePackages } from '../Data/vehiclePackagesData';
import { MapPin, Briefcase, Users } from 'lucide-react';
import { InternalPageHeading,} from '../MainLayouts';
import Link from 'next/link';
import TwoButtons from '../components/TwoButtons';
const Card = ({ tour }) => {
    const {
        slug,
        vehicle_type,
        pricing,
        km,
        luggage,
        total_person_capacity,
        gallary,
    } = tour;

    return (
        <div className={styles.card}>

            <Link href={`enquiry/taxi-booking/${slug}`}>
                <div className={styles.imageWrapper}>
                    <Image
                        src={gallary[0]}
                        alt={vehicle_type}
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
             </Link>
            <div className={styles.cardContent}>
                <h2 className={styles.title}>{vehicle_type}</h2>
               

             <p className={styles.details}>
                        <MapPin size={16} style={{ marginRight: '6px' }} />
                        {km}    
                    </p>
                <div className={styles.innerData}>
                   
                    <p className={styles.details}>
                        <Briefcase size={16} style={{ marginRight: '6px' }} />
                        {luggage}
                    </p>
                    <p className={styles.details}>
                        <Users size={16} style={{ marginRight: '6px' }} />
                        {total_person_capacity} persons
                    </p>
                </div>

                <div className={styles.priceBox}>
                    <span className={styles.currentPrice}>₹{pricing.current_price}</span>
                    <span className={styles.originalPrice}>₹{pricing.original_price}</span>
                    <span className={styles.discount}>{pricing.discount_percentage}% OFF</span>
                </div>
                
                

                <TwoButtons path={`enquiry/taxi-booking/${slug}`} />
            </div>
        </div>
    );
};

export default function Page() {

   
    return (
        <>
            
                <InternalPageHeading
                    title="Vehicle Booking"
                />
                <div className={styles.cardGrid}>
                    {
                        vehiclePackages.map((tour) => (
                            <Card key={tour.id} tour={tour} />
                        ))
                    }
                </div>
            
        </>
    );
}
