import { Link } from 'react-router-dom';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { ShoppingBagIcon, StarIcon } from '@heroicons/react/24/outline';


const cards = [
    {
        id: 1,
        image: "/dashboardFt/Batik 1.png",
        title: "Batik Pekalongan",
        price: "Rp 350.000",
        description: "Pekalongan",
        rating: 4.8,
    },
    {
        id: 2,
        image: "/dashboardFt/Kopi Gayo.png",
        title: "Kopi Gayo",
        price: "Rp 200.000",
        description: "Aceh",
        rating: 4.9,
    },
    {
        id: 3,
        image: "/dashboardFt/Kerajinan Rotan.png",
        title: "Kerajinan Rotan",
        price: "Rp 180.000",
        description: "Cirebon",
        rating: 4.7,
    },
    {
        id: 4,
        image: "/dashboardFt/4.png",
        title: "Tenun Ikat",
        price: "Rp 500.000",
        description: "Sumba",
        rating: 4.9,
    },
   
];

const CardCatalog = () => {
    return (
        <section className="py-16 px-4 bg-[#ffffff]">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {cards.map((card, index) => (
                        <Card
                            key={index}
                            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105"
                        >
                            <CardHeader shadow={false} floated={false} className="h-48 p-0">
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="w-full h-full object-cover"
                                />
                            </CardHeader>
                            <CardBody className="p-4">
                                <Typography
                                    variant="h6"
                                    className="font-bold text-lg mb-1 text-[#5c4933]"
                                >
                                    {card.title}
                                </Typography>
                                <Typography
                                    variant="small"
                                    className="text-[#886b4c] text-md mb-2"
                                >
                                    {card.description}
                                </Typography>
                                <div className="flex justify-between items-center mb-2">
                                    <Typography className="font-bold text-lg text-[#886b4c]">
                                        {card.price}
                                    </Typography>
                                    <div className="flex items-center">
                                        <StarIcon className="w-5 h-5 text-yellow-400" />
                                        <Typography className="ml-1 text-[#5c4933]">
                                            {card.rating}
                                        </Typography>
                                    </div>
                                </div>
                            </CardBody>
                            <CardFooter className="pt-0">
                                <Link to={`/product/${card.id}`}>
                                    <Button
                                        ripple={false}
                                        fullWidth={true}
                                        className="bg-[#886b4c] text-white p-2 rounded-full hover:bg-[#5c4933] transition flex items-center justify-center"
                                    >
                                        <ShoppingBagIcon className="w-5 h-5 mr-2" />
                                        Beli Sekarang
                                    </Button>
                                </Link>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CardCatalog;
