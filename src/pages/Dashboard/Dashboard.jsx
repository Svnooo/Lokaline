import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import MapInteractive from "../../components/ui/MapInteractive";
import { Search, ShoppingBag, MapPin, TrendingUp, Info, Users, Zap, ChevronDown, Star } from 'lucide-react';

const LandingPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isZoomOut, setIsZoomOut] = useState(false);
  const [showText, setShowText] = useState(false); // State untuk kontrol visibilitas teks

  useEffect(() => {
    setTimeout(() => {
      setIsZoomed(true);
    }, 1000);

    setTimeout(() => {
      setIsZoomOut(true);
    }, 2000);

    // Menampilkan teks setelah video tampak penuh
    setTimeout(() => {
      setShowText(true);
    }, 3000); // Teks muncul setelah 3 detik
  }, []);

  const featuredProducts = [
    { name: 'Batik Pekalongan', origin: 'Pekalongan', price: 'Rp 350.000', image: '/api/placeholder/300x200?text=Batik+Pekalongan', rating: 4.8 },
    { name: 'Kopi Gayo', origin: 'Aceh', price: 'Rp 200.000', image: '/api/placeholder/300x200?text=Kopi+Gayo', rating: 4.9 },
    { name: 'Kerajinan Rotan', origin: 'Cirebon', price: 'Rp 180.000', image: '/api/placeholder/300x200?text=Kerajinan+Rotan', rating: 4.7 },
    { name: 'Tenun Ikat', origin: 'Sumba', price: 'Rp 500.000', image: '/api/placeholder/300x200?text=Tenun+Ikat', rating: 4.9 },
  ];

  return (
    <div className="min-h-screen bg-cover bg-center font-sans">
      <section className="relative text-white h-screen flex items-center">
        <div className="absolute inset-0 z-20 flex">
          <motion.div
            className="bg-white w-1/2 h-full"
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <motion.div
            className="bg-white w-1/2 h-full"
            initial={{ x: 0 }}
            animate={{ x: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </div>

        <div className="relative z-0 w-full h-screen overflow-hidden">
          <motion.video
            className="absolute inset-0 w-full h-full object-cover"
            style={{ transform: 'translateY(-50px)' }}
            autoPlay
            loop
            muted
            animate={
              isZoomOut ? { scale: 1 } : isZoomed ? { scale: 1.2 } : { scale: 1 }
            }
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <source src="/public/assets/Localine Dasboard.mp4" type="video/mp4" />
            Browser Anda tidak mendukung video.
          </motion.video>
        </div>

        {/* Teks di dalam video */}
        {showText && ( // Teks muncul jika showText true
          <div className="absolute inset-0 z-30 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-5xl sm:text-7xl font-extrabold mb-6 drop-shadow-lg shadow-black leading-tight font-serif">
              Sentuhan Nusantara<br />di Ujung Jari Anda
            </h1>
            <p className="text-2xl sm:text-3xl mb-12 drop-shadow-lg shadow-black font-light max-w-3xl mx-auto italic">
              Jelajahi keindahan warisan Indonesia melalui ribuan produk UMKM yang unik dan autentik
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#886b4c] transition-all duration-300 transform hover:scale-105 shadow-lg w-64">
                Mulai Petualangan
              </button>
            </div>
            <div className="mt-16">
              <ChevronDown size={48} className="mx-auto animate-bounce" />
            </div>
          </div>
        )}
      </section>

      {/* UMKM Information Section */}
      <section className="py-16 px-4 bg-[#f0e6dc]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#5c4933] font-serif">Mengenal UMKM Indonesia</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-[#886b4c] text-white mx-auto">
                <Info size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-center text-[#5c4933] font-serif">Apa itu UMKM?</h3>
              <p className="text-[#886b4c] text-center text-lg">
                UMKM adalah Usaha Mikro, Kecil, dan Menengah yang menjadi tulang punggung ekonomi Indonesia. Mereka mencakup berbagai sektor usaha dari kerajinan hingga kuliner.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-[#886b4c] text-white mx-auto">
                <Users size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-center text-[#5c4933] font-serif">UMKM di Indonesia</h3>
              <p className="text-[#886b4c] text-center text-lg">
                Indonesia memiliki lebih dari 64 juta UMKM yang tersebar di seluruh nusantara. Mereka menyumbang lebih dari 60% PDB dan menyerap 97% tenaga kerja.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-[#886b4c] text-white mx-auto">
                <Zap size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-center text-[#5c4933] font-serif">Mengapa Localine?</h3>
              <p className="text-[#886b4c] text-center text-lg">
                Localine menghubungkan UMKM dengan pasar yang lebih luas, membantu meningkatkan visibilitas dan penjualan mereka. Kami mendukung pertumbuhan ekonomi lokal dan pelestarian warisan budaya Indonesia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Peta Interaktif Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 text-[#5c4933] font-serif">Jelajahi UMKM di Peta</h2>
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <MapInteractive />
          </div>
          <div className="mt-8 text-center">
            <p className="text-[#5c4933] mb-4 text-xl">Temukan UMKM terdekat atau jelajahi berbagai daerah di Indonesia</p>
            <button className="bg-[#886b4c] text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-[#5c4933] transition flex items-center mx-auto">
              <MapPin size={24} className="mr-2" />
              Cari di Peta
            </button>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 px-4 bg-[#f0e6dc]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#5c4933] font-serif">Produk UMKM Unggulan</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-bold text-xl mb-1 text-[#5c4933]">{product.name}</h3>
                  <p className="text-[#886b4c] text-md mb-2">{product.origin}</p>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-xl text-[#886b4c]">{product.price}</span>
                    <div className="flex items-center">
                      <Star size={16} className="text-yellow-400 fill-current" />
                      <span className="ml-1 text-[#5c4933]">{product.rating}</span>
                    </div>
                  </div>
                  <button className="w-full bg-[#886b4c] text-white p-2 rounded-full hover:bg-[#5c4933] transition flex items-center justify-center">
                    <ShoppingBag size={20} className="mr-2" />
                    Beli Sekarang
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="bg-[#886b4c] text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-[#5c4933] transition">
              Lihat Semua Produk
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 bg-[#5c4933] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 font-serif">Punya UMKM? Bergabunglah dengan Kami!</h2>
          <p className="text-2xl mb-8">Tingkatkan jangkauan bisnis Anda dan temukan pelanggan baru di seluruh Indonesia</p>
          <button className="bg-white text-[#5c4933] px-10 py-4 rounded-full font-bold text-xl hover:bg-[#f0e6dc] transition flex items-center mx-auto">
            <TrendingUp size={24} className="mr-2" />
            Daftarkan UMKM Anda
          </button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
