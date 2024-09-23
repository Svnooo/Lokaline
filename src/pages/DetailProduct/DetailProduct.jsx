import React, { useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CartContext } from '../../components/CartContext';

const ProductDetail = () => {
    const { productId } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useContext(CartContext);

    const products = [
        {
            id: 1,
            name: 'Laptop',
            shortDescription: 'High-performance laptop with Intel i7 processor and 16GB RAM.',
            fullDescription: 'Laptop ini menawarkan performa tinggi...',
            price: 1200,
            originalPrice: 1400,
            discount: 10,
            image: '/assets/download.jpeg',
            specifications: [
                'Layar: 15.6 inch',
                'Prosesor: Intel i7',
                'RAM: 16GB',
            ],
            variants: [
                { name: 'Black', image: 'https://via.placeholder.com/100/000000' },
            ],
        },
        {
            id: 2,
            name: 'Gaming Headset',
            shortDescription: 'Surround sound gaming headset with noise cancellation.',
            fullDescription: 'Gaming Headset ini cocok untuk...',
            price: 150,
            originalPrice: 180,
            discount: 5,
            image: 'https://via.placeholder.com/400',
            specifications: [
                'Kualitas suara: Surround',
                'Noise Cancellation: Ya',
            ],
            variants: [
                { name: 'Black', image: 'https://via.placeholder.com/100/000000' },
            ],
        },
        {
            id: 3,
            name: 'Gaming Headset',
            shortDescription: 'Surround sound gaming headset with noise cancellation.',
            fullDescription: 'Gaming Headset ini cocok untuk...',
            price: 150,
            originalPrice: 180,
            discount: 5,
            image: 'https://via.placeholder.com/400',
            specifications: [
                'Kualitas suara: Surround',
                'Noise Cancellation: Ya',
            ],
            variants: [
                { name: 'Black', image: 'https://via.placeholder.com/100/000000' },
            ],
        },
        {
            id: 4,
            name: 'Gaming Headset',
            shortDescription: 'Surround sound gaming headset with noise cancellation.',
            fullDescription: 'Gaming Headset ini cocok untuk...',
            price: 150,
            originalPrice: 180,
            discount: 5,
            image: 'https://via.placeholder.com/400',
            specifications: [
                'Kualitas suara: Surround',
                'Noise Cancellation: Ya',
            ],
            variants: [
                { name: 'Black', image: 'https://via.placeholder.com/100/000000' },
            ],
        },
        {
            id: 5,
            name: 'Gaming Headset',
            shortDescription: 'Surround sound gaming headset with noise cancellation.',
            fullDescription: 'Gaming Headset ini cocok untuk...',
            price: 150,
            originalPrice: 180,
            discount: 5,
            image: 'https://via.placeholder.com/400',
            specifications: [
                'Kualitas suara: Surround',
                'Noise Cancellation: Ya',
            ],
            variants: [
                { name: 'Black', image: 'https://via.placeholder.com/100/000000' },
            ],
        },
        
    ];

    
    const product = products.find((p) => p.id === parseInt(productId));
    const [selectedImage, setSelectedImage] = useState(product.image);
    const [quantity, setQuantity] = useState(1);
    const [selectedVariant, setSelectedVariant] = useState(product.variants[0].name);

    const changeImage = (imageUrl) => {
        setSelectedImage(imageUrl);
    };

    const handleAddToCart = () => {
        addToCart(product, quantity, selectedVariant);
        alert(`Menambahkan ${quantity} unit dari ${product.name} (Varian: ${selectedVariant}) ke keranjang.`);
        navigate('/cart');
    };

    return (
        <div className="container mx-auto py-10 mt-16 animate-fade-in">
            {/* Breadcrumb Navigation */}
            <nav className="text-sm mb-6">
                <a href="/" className="text-blue-600 hover:underline">Home</a> /
                <a href="/Catalog" className="text-blue-600 hover:underline">Catalog</a> /
                <span className="text-gray-500">{product.name}</span>
            </nav>

            {/* Product Detail Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Product Image with Zoom Effect */}
                <div className="flex flex-col items-center">
                    <div className="overflow-hidden rounded-lg shadow-lg">
                        <img
                            src={selectedImage}
                            alt={product.name}
                            className="w-full h-auto object-cover rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-110"
                        />
                    </div>
                    <div className="mt-4 flex space-x-2">
                        {product.variants.map((variant, index) => (
                            <img
                                key={index}
                                src={variant.image}
                                alt={variant.name}
                                className={`w-16 h-16 cursor-pointer border-2 rounded-lg ${selectedImage === variant.image ? 'border-blue-500' : 'border-gray-300'}`}
                                onClick={() => changeImage(variant.image)}
                            />
                        ))}
                    </div>
                </div>

                {/* Product Information */}
                <div className="p-6 bg-white rounded-lg shadow-lg">
                    <h1 className="text-3xl font-bold mb-4 text-gray-800">{product.name}</h1>
                    <p className="text-gray-600 mb-6">{product.shortDescription}</p>
                    
                    <div className="flex items-center mb-6">
                        <span className="text-4xl font-bold text-red-600">${product.price}</span>
                        <span className="ml-4 text-gray-500 line-through text-lg">${product.originalPrice}</span>
                        <span className="ml-2 px-2 py-1 bg-green-100 text-green-600 rounded-full text-sm font-semibold">
                            Save {product.discount}%
                        </span>
                    </div>

                    {/* Product Variants */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Pilih Varian:</label>
                        <select
                            value={selectedVariant}
                            onChange={(e) => setSelectedVariant(e.target.value)}
                            className="block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        >
                            {product.variants.map((variant, index) => (
                                <option key={index} value={variant.name}>
                                    {variant.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Quantity Selector */}
                    <div className="flex items-center mb-6">
                        <label className="block text-sm font-medium text-gray-700 mr-4">Jumlah:</label>
                        <input
                            type="number"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            className="border border-gray-300 rounded-md w-20 text-center focus:border-blue-500 focus:ring-blue-500"
                            min="1"
                        />
                    </div>

                    {/* Add to Cart Button */}
                    <button
                        onClick={handleAddToCart}
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg w-full hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
                    >
                        Tambah ke Keranjang
                    </button>
                </div>
            </div>

            {/* Product Specifications */}
            <div className="mt-10 bg-gray-100 p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-4">Spesifikasi Produk</h2>
                <ul className="list-disc list-inside text-gray-700">
                    {product.specifications.map((spec, index) => (
                        <li key={index}>{spec}</li>
                    ))}
                </ul>
            </div>

            {/* Product Details */}
            <div className="mt-10 p-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-4">Detail Produk</h2>
                <p className="text-gray-700">{product.fullDescription}</p>
            </div>
        </div>
    );
};

export default ProductDetail;