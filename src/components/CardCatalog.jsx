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
        image: "https://images.unsplash.com/photo-1513708920014-5e6a27ed98c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGxhYXB0b3B8fDB8fHx8MTY3NjI1OTYwOA&ixlib=rb-4.0.3&q=80&w=400",
        title: "Laptop",
        price: "$1200",
        description: "High-performance laptop with Intel i7 processor and 16GB RAM.",
    },
    {
        image: "https://images.unsplash.com/photo-1574169208507-843761648e97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGxhcHRvcHxlbnwwfHx8fDE2NzYyNTk2MDg&ixlib=rb-4.0.3&q=80&w=400",
        title: "Gaming Headset",
        price: "$150",
        description: "Surround sound gaming headset with noise cancellation.",
    },
    {
        image: "https://images.unsplash.com/photo-1607083207479-b264d95f5d6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDR8fGxhcHRvcHxlbnwwfHx8fDE2NzYyNTk2MDg&ixlib=rb-4.0.3&q=80&w=400",
        title: "Wireless Mouse",
        price: "$30",
        description: "Ergonomic wireless mouse with long battery life.",
    },
    {
        image: "https://images.unsplash.com/photo-1512255430564-960cf3769e17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDZ8fGxhcHRvcHxlbnwwfHx8fDE2NzYyNTk2MDg&ixlib=rb-4.0.3&q=80&w=400",
        title: "Bluetooth Speaker",
        price: "$80",
        description: "Portable Bluetooth speaker with 24-hour battery life.",
    },
    {
        image: "https://images.unsplash.com/photo-1517436073-8d7e7d122101?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDh8fGxhcHRvcHxlbnwwfHx8fDE2NzYyNTk2MDg&ixlib=rb-4.0.3&q=80&w=400",
        title: "Smartwatch",
        price: "$250",
        description: "Smartwatch with heart rate monitor and GPS tracking.",
    },
    {
        image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEwfHx3YXRjaHN8ZW58MHx8fHwxNjc2MjU5NjA4&ixlib=rb-4.0.3&q=80&w=400",
        title: "Smart TV",
        price: "$700",
        description: "50-inch 4K Ultra HD Smart TV with HDR and built-in apps.",
    },
    {
        image: "https://images.unsplash.com/photo-1607083207479-b264d95f5d6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEyfHxsYXB0b3B8ZW58MHx8fHwxNjc2MjU5NjA4&ixlib=rb-4.0.3&q=80&w=400",
        title: "Tablet",
        price: "$300",
        description: "10-inch tablet with stylus support and 64GB storage.",
    },
    {
        image: "https://images.unsplash.com/photo-1593642532871-8b12e02d091c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDIwfHx3YXRjaHN8ZW58MHx8fHwxNjc2MjU5NjA4&ixlib=rb-4.0.3&q=80&w=400",
        title: "External Hard Drive",
        price: "$100",
        description: "1TB external hard drive with fast transfer speeds.",
    },
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
                                <Button
                                    ripple={false}
                                    fullWidth={true}
                                    className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                                >
                                    Add to Cart
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CardCatalog;
