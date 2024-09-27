import React, { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CartContext } from '../../components/CartContext';

const ProductDetail = () => {
    const { productId } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useContext(CartContext);

    const products = [
        {
            id: 1,
            image: "/dashboardFt/Batik 1.png",
            title: "Batik Pekalongan",
            price: 350000,
            description: "Pekalongan",
            rating: 4.8,
            fullDescription: "Batik Pekalongan terkenal dengan coraknya yang beragam dan penggunaan warna yang kaya. Dibuat secara tradisional oleh pengrajin batik di Pekalongan, kain batik ini melambangkan budaya dan sejarah lokal yang mendalam. Cocok digunakan untuk berbagai acara, dari formal hingga kasual.",
            specifications: [
                'Bahan: Katun',
                'Teknik: Tulis',
                'Ukuran: 2 meter'
            ],
            variants: [
                { name: 'Black', image: 'https://via.placeholder.com/100/000000' },
            ],
        },
        {
            id: 2,
            image: "/dashboardFt/Kopi Gayo.png",
            title: "Kopi Gayo",
            price: 200000,
            description: "Aceh",
            rating: 4.9,
            fullDescription: "Kopi Gayo adalah kopi Arabika premium yang ditanam di dataran tinggi Gayo, Aceh. Kopi ini memiliki cita rasa yang khas dengan sentuhan fruity dan sedikit aftertaste cokelat. Proses penanaman dan pengolahannya dilakukan secara organik oleh petani kopi lokal.",
            specifications: [
                'Jenis: Arabika',
                'Berat: 1 kg',
                'Metode Sangrai: Medium Roast'
            ],
            variants: [
                { name: 'Giling Halus', image: '/dashboardFt/Kopi Gayo.png' },
                { name: 'Giling Medium', image: '/dashboardFt/Kopi Gayo.png' },
                { name: 'Giling Kasar', image: '/dashboardFt/Kopi Gayo.png' },
                { name: 'Biji Kopi', image: '/dashboardFt/Kopi Gayo.png' },
            ],
        },
        {
            id: 3,
            image: "/dashboardFt/Kerajinan Rotan.png",
            title: "Kerajinan Rotan",
            price: 180000,
            description: "Cirebon",
            rating: 4.7,
            fullDescription: "Kerajinan rotan asal Cirebon terkenal karena kekuatan dan keindahannya. Dibuat dengan tangan oleh pengrajin berpengalaman, produk rotan ini dapat digunakan sebagai dekorasi rumah atau furnitur fungsional yang tahan lama.",
            specifications: [
                'Bahan: Rotan Alami',
                'Ukuran: 40cm x 40cm x 40cm',
                'Warna: Natural Brown'
            ],
            variants: [
                { name: 'Black', image: 'https://via.placeholder.com/100/000000' },
            ],
        },
        {
            id: 4,
            image: "/dashboardFt/4.png",
            title: "Tenun Ikat",
            price: 500000,
            description: "Sumba",
            rating: 4.9,
            fullDescription: "Tenun Ikat dari Sumba merupakan salah satu warisan budaya Indonesia yang sangat bernilai. Kain ini dibuat dengan teknik pewarnaan tradisional dan ditenun secara manual, menghasilkan motif yang unik dan kaya akan simbolisme budaya lokal. Ideal untuk koleksi fashion atau dekorasi interior.",
            specifications: [
                'Bahan: Benang Katun',
                'Ukuran: 2 meter',
                'Teknik: Pewarnaan Alami'
            ],
            variants: [
                { name: 'Black', image: 'https://via.placeholder.com/100/000000' },
            ],
        },
        {
            id: 5,
            image: "/assets/Kain Songke Manggarai.png",
            title: "Kain Songket",
            price: 500000,
            description: "Manggarai",
            rating: 4.9,
            fullDescription: "Kain Songket dari Manggarai adalah salah satu jenis kain tradisional yang dibuat dengan teknik tenun yang rumit dan menggunakan benang emas atau perak. Motifnya yang indah dan penuh makna sering dipakai pada acara-acara adat atau upacara penting.",
            specifications: [
                'Bahan: Benang Sutra dan Emas',
                'Ukuran: 2.5 meter',
                'Warna: Emas dan Hitam'
            ],
            variants: [
                { name: 'Gold', image: '/assets/Kain Songke Manggarai.png' },
            ],
        },
        {
            id: 6,
            image: "/assets/Bakpia.png",
            title: "Bakpia",
            price: 35000,
            description: "Yogyakarta",
            rating: 4.9,
            fullDescription: "Bakpia adalah kue khas Yogyakarta yang terkenal dengan isian kacang hijau yang lembut dan kulit yang renyah. Cocok untuk dijadikan oleh-oleh saat berkunjung ke Yogyakarta.",
            specifications: [
                'Bahan: Tepung Terigu, Kacang Hijau',
                'Isi: 20 Kue',
                'Penyimpanan: Maksimal 1 Minggu'
            ],
            variants: [
                { name: 'Original', image: '/assets/Bakpia.png' },
            ],
        },
        {
            id: 7,
            image: "/assets/Bali.png",
            title: "Patung",
            price: 350000,
            description: "Bali",
            rating: 4.9,
            fullDescription: "Patung Bali merupakan karya seni yang diukir dengan tangan oleh para pengrajin lokal di Bali. Motif-motifnya terinspirasi dari budaya Hindu Bali dan sering kali digunakan sebagai dekorasi rumah atau pelengkap upacara adat.",
            specifications: [
                'Bahan: Kayu Jati',
                'Ukuran: 30cm x 15cm',
                'Warna: Coklat Tua'
            ],
            variants: [
                { name: 'Natural', image: '/assets/Bali.png' },
            ],
        },
        {
            id: 8,
            image: "/assets/Syal Kalimantan.png",
            title: "Syal Dayak",
            price: 100000,
            description: "Kalimantan Barat",
            rating: 4.9,
            fullDescription: "Syal Dayak adalah aksesori tradisional yang dibuat dengan teknik tenun khas suku Dayak di Kalimantan Barat. Motifnya yang kaya akan simbolisme adat menjadikan syal ini tidak hanya indah tetapi juga bermakna.",
            specifications: [
                'Bahan: Benang Katun',
                'Ukuran: 180cm x 30cm',
                'Warna: Merah dan Hitam'
            ],
            variants: [
                { name: 'Red', image: '/assets/Syal Kalimantan.png' },
            ],
        },
        {
            id: 9,
            image: "/assets/Tas Noken Papua.png",
            title: "Tas Noken",
            price: 150000,
            description: "Papua",
            rating: 4.9,
            fullDescription: "Tas Noken merupakan tas tradisional yang dibuat dari serat kulit kayu oleh suku-suku di Papua. Tas ini tidak hanya digunakan untuk membawa barang tetapi juga memiliki makna simbolis dalam budaya Papua.",
            specifications: [
                'Bahan: Serat Kulit Kayu',
                'Ukuran: 50cm x 40cm',
                'Warna: Coklat Muda'
            ],
            variants: [
                { name: 'Natural', image: '/assets/Tas Noken Papua.png' },
            ],
        },
        {
            id: 10,
            image: "/assets/Ulos.png",
            title: "Ulos",
            price: 600000,
            description: "Sumatera Utara",
            rating: 4.9,
            fullDescription: "Ulos adalah kain tradisional Batak dari Sumatera Utara yang biasanya digunakan dalam upacara adat atau sebagai hadiah dalam acara-acara penting. Kain ini ditenun dengan teknik khusus yang diwariskan turun temurun.",
            specifications: [
                'Bahan: Benang Katun',
                'Ukuran: 2 meter',
                'Warna: Merah dan Hitam'
            ],
            variants: [
                { name: 'Red', image: '/assets/Ulos.png' },
            ],
        }
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
        alert(`Menambahkan ${quantity} unit dari ${product.title} (Varian: ${selectedVariant}) ke keranjang.`);
        navigate('/cart');
    };

    return (
        <div className="container mx-auto py-10 mt-16 animate-fade-in">
            <br />
            <nav className="text-sm mb-6">
                <a href="/" className="text-blue-600 hover:underline">Home</a> /
                <a href="/Catalog" className="text-blue-600 hover:underline">Catalog</a> /
                <span className="text-gray-500">{product.title}</span>
            </nav>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col items-center">
                    <div className="overflow-hidden rounded-lg shadow-lg w-auto h-auto">
                        <img
                            src={selectedImage}
                            alt={product.title}
                            className="w-auto h-auto max-w-full max-h-96" // Ensure real size and limit the max height
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

                <div className="p-6 bg-white rounded-lg shadow-lg">
                    <h1 className="text-3xl font-bold mb-4 text-gray-800">{product.title}</h1>
                    <p className="text-gray-600 mb-6">{product.description}</p>
                    
                    <div className="flex items-center mb-6">
                        <span className="text-4xl font-bold text-red-600">
                            Rp {product.price.toLocaleString('id-ID')}
                        </span>
                    </div>

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

                    <button
                        onClick={handleAddToCart}
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg w-full hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
                    >
                        Tambah ke Keranjang
                    </button>
                </div>
            </div>

            <div className="mt-10 bg-gray-100 p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-4">Spesifikasi Produk</h2>
                <ul className="list-disc list-inside text-gray-700">
                    {product.specifications.map((spec, index) => (
                        <li key={index}>{spec}</li>
                    ))}
                </ul>
            </div>

            <div className="mt-10 p-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-4">Detail Produk</h2>
                <p className="text-gray-700">{product.fullDescription}</p>
            </div>
        </div>
    );
};

export default ProductDetail;
