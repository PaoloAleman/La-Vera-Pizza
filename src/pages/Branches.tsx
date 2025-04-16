import {Header} from "../components/Header.tsx";
import {Branch} from "../types/types.tsx";
import {BranchCard} from "../components/BranchCard.tsx";
import { motion } from "framer-motion";
import {Footer} from "../components/Footer.tsx";

const branches: Branch[] = [
    {
        id: 1,
        city: 'Ramos Mejía',
        address: 'Av. de Mayo 533',
        cellphone: ['4656-0747', '4658-9095'],
        acceptCard: true,
        hasInflatable: true,
        freeDelivery: true,
        linkGoogleMaps: 'https://www.google.com/maps?q=Av.+de+Mayo+533,+Ramos+Mejía',
        image: '/imageOne.webp',
    },
    {
        id: 2,
        city: 'Morón',
        address: 'Belgrano 1200',
        cellphone: ['4699-1200'],
        acceptCard: true,
        hasInflatable: false,
        freeDelivery: false,
        linkGoogleMaps: 'https://www.google.com/maps?q=Belgrano+1200,+Morón',
        image: '/imageTwo.webp',
    },
    {
        id: 3,
        city: 'San Justo',
        address: 'Juan Manuel de Rosas 3000',
        cellphone: ['4650-3000'],
        acceptCard: true,
        hasInflatable: true,
        freeDelivery: true,
        linkGoogleMaps: 'https://www.google.com/maps?q=Juan+Manuel+de+Rosas+3000,+San+Justo',
        image: '/imageThree.webp',
    },
    {
        id: 4,
        city: 'Lomas del Mirador',
        address: 'Mosconi 450',
        cellphone: ['4643-1450'],
        acceptCard: false,
        hasInflatable: false,
        freeDelivery: true,
        linkGoogleMaps: 'https://www.google.com/maps?q=Mosconi+450,+Lomas+del+Mirador',
        image: '/imageFour.webp',
    },
    {
        id: 5,
        city: 'Villa Luzuriaga',
        address: 'Triunvirato 890',
        cellphone: ['4628-1890'],
        acceptCard: true,
        hasInflatable: false,
        freeDelivery: false,
        linkGoogleMaps: 'https://www.google.com/maps?q=Triunvirato+890,+Villa+Luzuriaga',
        image: '/imageFive.webp',
    },
    {
        id: 6,
        city: 'Haedo',
        address: 'Rivadavia 17000',
        cellphone: ['4650-1700'],
        acceptCard: true,
        hasInflatable: true,
        freeDelivery: true,
        linkGoogleMaps: 'https://www.google.com/maps?q=Rivadavia+17000,+Haedo',
        image: '/imageSix.webp',
    }
];

export const Branches = () => {
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (index: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: index * 0.3,
            },
        }),
        exit: { opacity: 0, scale: 0.9 },
    };

    return (
        <>
            <Header />
            <div className="container mx-auto px-4 pt-16">
                <h1 className="text-5xl font-bold text-[#dc9d25] mb-10 text-center drop-shadow-lg font-viera">
                    Nuestras Sucursales
                </h1>

                <p className="text-center text-white max-w-2xl mx-auto mb-16 text-lg">
                    Vení a visitarnos a cualquiera de nuestras sucursales y disfrutá de la mejor pizza casera, con
                    ingredientes frescos y ese toque especial que nos hace únicos.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-10 pb-20">
                    {branches.map((branch, index) => (
                        <motion.div
                            key={branch.id}
                            custom={index}
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <BranchCard branch={branch} />
                        </motion.div>
                    ))}
                </div>
            </div>
            <Footer />
        </>

    );
};
