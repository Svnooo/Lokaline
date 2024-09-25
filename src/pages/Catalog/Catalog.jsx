import React from 'react';
import CardCatalog from "../../components/CardCatalog";
import { Pagination } from "../../components/Pagination";
import SearchForm from "../../components/SearchBar";

const Catalog = () => {
    return (
        <div className="bg-base min-h-screen overflow-hidden">
            <div className="container mx-auto px-4 pt-28 pb-16 relative">
                <br />
                {/* Background gradient */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#B49B6C] via-[#C3B48F] to-[#CCB592] opacity-25 z-0"></div>

                {/* Hero section with search bar */}
                <div className="relative z-10 bg-[#C3B48F] rounded-lg shadow-lg mb-12 p-8 text-center transform transition-all duration-500 hover:scale-105 hover:shadow-2xl border-2 border-[#B49B6C]">
                    <h1 className="text-4xl font-bold text-dark mb-4 animate-fade-in">Temukan Produk Kami</h1>
                    <p className="text-lg text-dark mb-6">Jelajahi katalog kami dan temukan produk yang Anda butuhkan</p>
                    <div className="max-w-2xl mx-auto">
                        <SearchForm />
                    </div>
                </div>

                {/* Catalog section */}
                <div className="relative z-10 bg-white rounded-lg shadow-lg p-8 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                    <h2 className="text-3xl font-semibold mb-6 text-center text-dark">Katalog Produk Kami</h2>
                    <p className="text-center text-dark mb-8">Pilih dari berbagai pilihan produk berkualitas yang kami tawarkan</p>
                    <CardCatalog />
                </div>

                {/* Pagination */}
                <div className="relative z-10 flex justify-center mt-10">
                    <Pagination />
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#C3B48F] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
            <div className="absolute top-10 right-10 w-72 h-72 bg-[#CCB592] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        </div>
    );
};

export default Catalog;