
import styles from './PoojaBooking.module.css';
import {pujaData} from '../Data/poojaData';
import Image from 'next/image';
import { InternalPageHeading,} from '../MainLayouts';
import Link from 'next/link';
import TwoButtons from '../components/TwoButtons';


const PujaCard = ({ puja }) => {


    
    return (
        <div className={styles.card}>
            <Link href={`enquiry/pooja-booking/${puja.slug}`}>
                <Image src={puja.image} alt={puja.title} className={styles.image} />
             </Link>
            <div className={styles.content}>
                <h3 className={styles.title}>{puja.title}</h3>
                <p className={styles.subtitle}>{puja.subtitle}</p>
                <p className={styles.location}>{puja.location}</p>
               

                <TwoButtons path={`enquiry/pooja-booking/${puja.slug}`} />
            </div>
        </div>
    );
};


export default function PoojaBooking() {

    return (
        <>

            <InternalPageHeading
                title="Puja Booking"
            />

            {
                <div className={styles.grid}>
                    {
                        pujaData.map((puja) => (
                            <PujaCard key={puja.id} puja={puja} />
                        ))
                    }
                </div>
            }
        </>
    );
}
