import vehicle1 from "../assets/vehicle1.png";
import vehicle2 from "../assets/vehicle2.png";
import vehicle3 from "../assets/vehicle3.png";
import vehicle4 from "../assets/vehicle4.png";


import internalImage1 from "../assets/internalImage1.png";
import internalImage2 from "../assets/internalImage2.png";
import internalImage3 from "../assets/internalImage3.png";

export const vehiclePackages = [
    {
        id: 1,
        slug: "12-seater-tempo-traveller-ac-rental-1",
        category: "cars",
        gallary: [vehicle1, internalImage1, internalImage2, internalImage3],
        vehicle_type: "Tempo Traveller",
        package_name: "12-Seater Tempo Traveller AC Rental",
        overview: "Spacious and comfortable AC tempo traveller perfect for group outings and family trips with ample legroom and luggage space.",
        pricing: {
            original_price: 3700,
            current_price: 500,
            discount_percentage: 13
        },
        duration: "Per Day",
        features: ["AC", "Comfortable Seats", "Ample Legroom"],
        starting_point: "Ujjain City Limits",
        ending_point: "Ujjain City Limits",
        specifications: {
            model: "2021",
            fuel_type: "Diesel",
            transmission: "Manual",
            air_conditioning: "Yes",
            ac_type: "Dual zone AC"
        },
        km: "100 km included (extra ₹15/km)",
        luggage: "2 medium bags",
        total_person_capacity: 12,
        inclusions: [
            "Professional driver",
            "Fuel charges for included kilometers",
            "Toll taxes and parking",
            "All applicable taxes"
        ],
        exclusions: [
            "Night allowance (₹500 extra)",
            "Interstate permits if applicable",
            "Driver accommodation"
        ],
        contact: {
            phone: "+91-9999999991",
            email: "self-drive@ujjaintour.in",
            whatsapp: "https://api.whatsapp.com/send?phone=919999999991"
        },
        notes: [
            "Ideal for group travel",
            "Child seats available on request"
        ],
        rating: 4.2,
        policies: {
            cancellation_policy: "Free cancellation up to 24 hours before trip.",
            refund_policy: "Full refund if canceled before 24 hrs. 50% after.",
            driver_waiting_policy: "Extra ₹100/hour after 1 hour."
        },
        driver_details: {
            name: "Ramesh Kumar",
            experience: "5 years",
            languages: ["Hindi", "English"],
            license_number: "MP09/DR/123456"
        }
    },
    {
        id: 2,
        slug: "premium-innova-crysta-7-seater-rental-2",
        category: "cars",
        gallary: [vehicle2, internalImage1, internalImage2, internalImage3],
        vehicle_type: "Toyota Innova Crysta",
        package_name: "Premium Innova Crysta 7-Seater Rental",
        overview: "Luxurious and powerful premium SUV with automatic transmission and premium features for a comfortable travel experience.",
        pricing: {
            original_price: 7500,
            current_price: 700,
            discount_percentage: 9
        },
        duration: "Per Day",
        features: ["Automatic Transmission", "Leather Seats", "Touchscreen Infotainment"],
        starting_point: "Ujjain",
        ending_point: "Ujjain",
        specifications: {
            model: "2023",
            fuel_type: "Diesel",
            transmission: "Manual / Automatic",
            air_conditioning: "Yes",
            ac_type: "Automatic Climate Control"
        },
        km: "200 km included (extra ₹18/km)",
        luggage: "4 medium bags",
        total_person_capacity: 6,
        inclusions: [
            "Experienced chauffeur",
            "Complimentary water bottles",
            "24/7 road assistance",
            "Insurance coverage"
        ],
        exclusions: [
            "Airport pickup charges if applicable",
            "Overtime charges beyond 10 hours",
            "State tax if crossing borders"
        ],
        contact: {
            phone: "+91-9999999992",
            email: "support@ujjaintour.in",
            whatsapp: "https://api.whatsapp.com/send?phone=919999999992"
        },
        notes: [
            "Most popular premium rental option",
            "GPS navigation system included"
        ],
        rating: 4.7,
        policies: {
            cancellation_policy: "Free cancellation up to 24 hours before trip.",
            refund_policy: "Full refund if canceled before 24 hrs. 50% after.",
            driver_waiting_policy: "Extra ₹100/hour after 1 hour."
        },
        driver_details: {
            name: "Ramesh Kumar",
            experience: "5 years",
            languages: ["Hindi", "English"],
            license_number: "MP09/DR/123456"
        }
    },
    {
        id: 3,
        slug: "economy-sedan-rental-swift-dzire-3",
        category: "cars",
        gallary: [vehicle3, internalImage1, internalImage2, internalImage3],
        vehicle_type: "Maruti Swift Dzire",
        package_name: "Economy Sedan Rental (Swift Dzire)",
        overview: "Budget-friendly compact sedan offering great fuel efficiency and maneuverability for city travel and short trips.",
        pricing: {
            original_price: 5800,
            current_price: 600,
            discount_percentage: 10
        },
        duration: "Per Day",
        features: ["AC", "Fuel Efficient", "Compact Size"],
        starting_point: "Ujjain",
        ending_point: "Anywhere in Madhya Pradesh",
        specifications: {
            model: "2021",
            fuel_type: "Petrol / CNG",
            transmission: "Manual / Automatic",
            air_conditioning: "Yes",
            ac_type: "Manual AC"
        },
        km: "150 km included (extra ₹12/km)",
        luggage: "2 medium bags",
        total_person_capacity: 4,
        inclusions: [
            "Skilled driver",
            "Basic insurance",
            "24/7 customer support",
            "First aid kit"
        ],
        exclusions: [
            "Night charges (10pm-6am)",
            "Additional driver fees",
            "Damage protection waiver"
        ],
        contact: {
            phone: "+91-9999999993",
            email: "bookings@ujjaintour.in",
            whatsapp: "https://api.whatsapp.com/send?phone=919999999993"
        },
        notes: [
            "Best for budget travelers",
            "Easy maneuverability in city traffic"
        ],
        rating: 4.0,
        policies: {
            cancellation_policy: "Free cancellation up to 24 hours before trip.",
            refund_policy: "Full refund if canceled before 24 hrs. 50% after.",
            driver_waiting_policy: "Extra ₹100/hour after 1 hour."
        },
        driver_details: {
            name: "Ramesh Kumar",
            experience: "5 years",
            languages: ["Hindi", "English"],
            license_number: "MP09/DR/123456"
        }
    },
    {
        id: 4,
        slug: "suv-rental-scorpio-s11-4",
        category: "cars",
        gallary: [vehicle4, internalImage1, internalImage2, internalImage3],
        vehicle_type: "Mahindra Scorpio",
        package_name: "SUV Rental (Scorpio S11)",
        overview: "Rugged and powerful SUV with 4WD capability, perfect for adventurous trips and rough terrain travel.",
        pricing: {
            original_price: 4499,
            current_price: 500,
            discount_percentage: 11
        },
        duration: "Per Day",
        features: ["4WD Capability", "Sunroof", "Premium Audio"],
        starting_point: "Ujjain",
        ending_point: "Ujjain",
        specifications: {
            model: "2024",
            fuel_type: "Diesel",
            transmission: "Manual / Automatic",
            air_conditioning: "Yes",
            ac_type: "Automatic Climate Control"
        },
        km: "120 km included (extra ₹16/km)",
        luggage: "3 medium bags",
        total_person_capacity: 7,
        inclusions: [
            "Professional driver",
            "Off-road assistance",
            "Child seat option",
            "Roadside emergency kit"
        ],
        exclusions: [
            "Hill station charges if applicable",
            "Additional mileage beyond package",
            "Damage security deposit"
        ],
        contact: {
            phone: "+91-9999999994",
            email: "help@ujjaintour.in",
            whatsapp: "https://api.whatsapp.com/send?phone=919999999994"
        },
        notes: [
            "Perfect for adventurous trips",
            "High ground clearance for rough terrain"
        ],
        rating: 4.3,
        policies: {
            cancellation_policy: "Free cancellation up to 24 hours before trip.",
            refund_policy: "Full refund if canceled before 24 hrs. 50% after.",
            driver_waiting_policy: "Extra ₹100/hour after 1 hour."
        },
        driver_details: {
            name: "Ramesh Kumar",
            experience: "5 years",
            languages: ["Hindi", "English"],
            license_number: "MP09/DR/123456"
        }
    },
];