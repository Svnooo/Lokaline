import React, { useState } from 'react';
import CardCatalog from "../../components/CardCatalog";
import { Pagination } from "../../components/Pagination";
import SearchForm from "../../components/SearchBar";

const Catalog = () => {
    const [searchTerm, setSearchTerm] = useState(""); // State untuk pencarian
    const [currentPage, setCurrentPage] = useState(1); // State untuk halaman aktif
    const [itemsPerPage] = useState(4); // Jumlah item per halaman

    // Data produk
    const cards = [
        { id: 1, image: "/dashboardFt/Batik 1.png", title: "Batik Pekalongan", price: "Rp 350.000", description: "Pekalongan", rating: 4.8 },
        { id: 2, image: "/dashboardFt/Kopi Gayo.png", title: "Kopi Gayo", price: "Rp 200.000", description: "Aceh", rating: 4.9 },
        { id: 3, image: "/dashboardFt/Kerajinan Rotan.png", title: "Kerajinan Rotan", price: "Rp 180.000", description: "Cirebon", rating: 4.7 },
        { id: 4, image: "/dashboardFt/4.png", title: "Tenun Ikat", price: "Rp 500.000", description: "Sumba", rating: 4.9 },
        { id: 5, image: "/assets/Kain Songke Manggarai.png", title: "Kain Songket", price: "Rp 500.000", description: "Manggarai", rating: 4.9 },
        { id: 6, image: "/assets/Bakpia.png", title: "Bakpia", price: "Rp 35.000", description: "Yogyakarta", rating: 4.9 },
        { id: 7, image: "/assets/Bali.png", title: "Patung", price: "Rp 350.000", description: "Bali", rating: 4.9 },
        { id: 8, image: "/assets/Syal Kalimantan.png", title: "Syal Dayak", price: "Rp 100.000", description: "Kalimantan Barat", rating: 4.9 },
        { id: 9, image: "/assets/Tas Noken Papua.png", title: "Tas Noken", price: "Rp 150.000", description: "Papua", rating: 4.9 },
        { id: 10, image: "/assets/Ulos.png", title: "Ulos", price: "Rp 600.000", description: "Sumatera Utara", rating: 4.9 },
    ];

    // Filter produk berdasarkan pencarian
    const filteredCards = cards.filter(card =>
        card.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Hitung jumlah total halaman
    const totalPages = Math.ceil(filteredCards.length / itemsPerPage);

    // Ambil produk untuk halaman saat ini
    const currentCards = filteredCards.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div className="bg-base min-h-screen overflow-hidden">
            <div className="container mx-auto px-4 pt-28 pb-16 relative">
                <br />
                {/* Background gradient */}
                <div className="absolute top-0 left-0 w-full h-full bg-base-100 opacity-25 z-0"></div>

                {/* Hero section with search bar */}
                <div className="relative z-10 bg-[#C3B48F] rounded-lg shadow-lg mb-12 p-8 text-center transform transition-all duration-500 hover:scale-105 hover:shadow-2xl border-2 border-[#B49B6C]">
                    <h1 className="text-4xl font-bold text-dark mb-4 animate-fade-in">Temukan Produk Kami</h1>
                    <p className="text-lg text-dark mb-6">Jelajahi katalog kami dan temukan produk yang Anda butuhkan</p>
                    <div className="max-w-2xl mx-auto">
                        <SearchForm searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                    </div>
                </div>

                {/* Catalog section */}
                <div className="relative z-10 bg-white rounded-lg shadow-lg p-8 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                    <h2 className="text-3xl font-semibold mb-6 text-center text-dark">Katalog Produk Kami</h2>
                    <p className="text-center text-dark mb-8">Pilih dari berbagai pilihan produk berkualitas yang kami tawarkan</p>
                    <CardCatalog cards={currentCards} />
                </div>

                {/* Pagination */}
                <div className="relative z-10 flex justify-center mt-10">
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                    />
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#C3B48F] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
            <div className="absolute top-10 right-10 w-72 h-72 bg-[#CCB592] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        </div>
    );
};

export default Catalog;
