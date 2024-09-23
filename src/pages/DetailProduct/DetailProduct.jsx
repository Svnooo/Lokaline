import React, { useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import { CartContext } from '../../components/CartContext';

const ProductDetail = () => {
    const { productId } = useParams();
    const navigate = useNavigate(); // Inisiasi useNavigate
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
            image: 'https://via.placeholder.com/400',
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

    // Fungsi untuk mengubah gambar berdasarkan varian yang dipilih
    const changeImage = (imageUrl) => {
        setSelectedImage(imageUrl);
    };

    // Fungsi untuk menambah produk ke keranjang menggunakan CartContext
    const handleAddToCart = () => {
        addToCart(product, quantity, selectedVariant);  // Panggil fungsi addToCart dari context
        alert(`Menambahkan ${quantity} unit dari ${product.name} (Varian: ${selectedVariant}) ke keranjang.`);
        
        // Arahkan ke halaman Cart setelah produk ditambahkan
        navigate('/cart');
    };

    return (
        <div className="container mx-auto py-10">
            {/* Breadcrumb Navigation */}
            <nav className="text-sm mb-4">
                <a href="/" className="text-blue-600 hover:underline">Home</a> /
                <a href="/Catalog" className="text-blue-600 hover:underline">Catalog</a> /
                <span className="text-gray-500">{product.name}</span>
            </nav>

            {/* Product Detail Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Product Image */}
                <div>
                    <img src={selectedImage} alt={product.name} className="w-full h-auto object-cover" />
                    {/* Variant Images */}
                    <div className="mt-4 flex space-x-2">
                        {product.variants.map((variant, index) => (
                            <img
                                key={index}
                                src={variant.image}
                                alt={variant.name}
                                className="w-16 h-16 cursor-pointer border"
                                onClick={() => changeImage(variant.image)}
                            />
                        ))}
                    </div>
                </div>

                {/* Product Information */}
                <div>
                    <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
                    <p className="text-gray-700 mb-4">{product.shortDescription}</p>
                    <div className="flex items-center mb-4">
                        <span className="text-3xl font-semibold text-red-600">${product.price}</span>
                        <span className="ml-2 text-gray-500 line-through">${product.originalPrice}</span>
                        <span className="ml-2 text-green-600">Save {product.discount}%</span>
                    </div>

                    {/* Product Variants */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Choose Variant:</label>
                        <select
                            value={selectedVariant}
                            onChange={(e) => setSelectedVariant(e.target.value)}
                            className="block w-full border-gray-300 rounded-md shadow-sm"
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
                        <label className="block text-sm font-medium text-gray-700 mr-4">Quantity:</label>
                        <input
                            type="number"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            className="border-gray-300 rounded-md w-20 text-center"
                            min="1"
                        />
                    </div>

                    {/* Add to Cart Button */}
                    <button
                        onClick={handleAddToCart}
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg w-full hover:bg-blue-700 transition"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>

            {/* Product Specifications */}
            <div className="mt-10">
                <h2 className="text-xl font-bold mb-4">Specifications</h2>
                <ul className="list-disc list-inside text-gray-700">
                    {product.specifications.map((spec, index) => (
                        <li key={index}>{spec}</li>
                    ))}
                </ul>
            </div>

            {/* Product Details */}
            <div className="mt-10">
                <h2 className="text-xl font-bold mb-4">Product Details</h2>
                <p className="text-gray-700">{product.fullDescription}</p>
            </div>
        </div>
    );
};

export default ProductDetail;