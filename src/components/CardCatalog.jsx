import { Link } from 'react-router-dom';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

const cards = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1513708920014-5e6a27ed98c7",
        title: "Laptop",
        price: "$1200",
        description: "High-performance laptop with Intel i7 processor and 16GB RAM.",
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1574169208507-843761648e97",
        title: "Gaming Headset",
        price: "$150",
        description: "Surround sound gaming headset with noise cancellation.",
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1574169208507-843761648e97",
        title: "Gaming Headset",
        price: "$150",
        description: "Surround sound gaming headset with noise cancellation.",
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1574169208507-843761648e97",
        title: "Gaming Headset",
        price: "$150",
        description: "Surround sound gaming headset with noise cancellation.",
    },
    {
        id: 5,
        image: "https://images.unsplash.com/photo-1574169208507-843761648e97",
        title: "Gaming Headset",
        price: "$150",
        description: "Surround sound gaming headset with noise cancellation.",
    },
    // Tambahkan produk lainnya
];

const CardCatalog = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="container mx-auto max-w-7xl px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-10">
                    {cards.map((card, index) => (
                        <Card className="w-full max-w-xs mx-auto" key={index}>
                            <CardHeader shadow={false} floated={false} className="h-64">
                                <img
                                    src={card.image}
                                    alt={`card-image-${index}`}
                                    className="h-full w-full object-cover"
                                />
                            </CardHeader>
                            <CardBody>
                                <div className="mb-2 flex items-center justify-between">
                                    <Typography color="blue-gray" className="font-medium">
                                        {card.title}
                                    </Typography>
                                    <Typography color="blue-gray" className="font-medium">
                                        {card.price}
                                    </Typography>
                                </div>
                                <Typography
                                    variant="small"
                                    color="gray"
                                    className="font-normal opacity-75"
                                >
                                    {card.description}
                                </Typography>
                            </CardBody>
                            <CardFooter className="pt-0">
                                <Link to={`/product/${card.id}`}>
                                    <Button
                                        ripple={false}
                                        fullWidth={true}
                                        className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                                    >
                                        View Details
                                    </Button>
                                </Link>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CardCatalog;
