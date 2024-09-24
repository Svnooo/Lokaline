import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import MapInteractive from "../../components/ui/MapInteractive";
import { Search, ShoppingBag, MapPin, TrendingUp, Info, Users, Zap, ChevronDown, Star } from 'lucide-react';
import { ArrowRight, Bookmark, Share2 } from 'lucide-react';

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
    { name: 'Batik Pekalongan', origin: 'Pekalongan', price: 'Rp 350.000', image: '/dashboardFt/Batik 1.png', rating: 4.8 },
    { name: 'Kopi Gayo', origin: 'Aceh', price: 'Rp 200.000', image: '/dashboardFt/Kopi Gayo.png', rating: 4.9 },
    { name: 'Kerajinan Rotan', origin: 'Cirebon', price: 'Rp 180.000', image: '/dashboardFt/Kerajinan Rotan.png', rating: 4.7 },
    { name: 'Tenun Ikat', origin: 'Sumba', price: 'Rp 500.000', image: '/dashboardFt/4.png', rating: 4.9 },
];

// Render
featuredProducts.map(product => (
    <div key={product.name}>
        <img src={product.image} alt={product.name} />
        <h2>{product.name}</h2>
        <p>{product.origin}</p>
        <p>{product.price}</p>
        <p>Rating: {product.rating}</p>
    </div>
));


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
       {/* Teks di dalam video */}
{showText && ( // Teks muncul jika showText true
  <div className="absolute inset-0 z-30 flex flex-col items-center justify-center text-center px-4" style={{ paddingTop: '15%' }}>
    <h1 className="text-3xl sm:text-5xl font-extrabold mb-6 drop-shadow-lg shadow-black leading-tight font-serif">
      Sentuhan Nusantara<br />di Ujung Jari Anda
    </h1>
    <p className="text-xl sm:text-2xl mb-12 drop-shadow-lg shadow-black font-light max-w-3xl mx-auto italic">
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

<section className="relative py-16 px-4 sm:px-6 lg:px-8">
  <div className="absolute inset-0 bg-[url('/public/bg1.png')] bg-center opacity-5" style={{ backgroundSize: '100% 100%' }}></div>
  <div className="relative max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-yellow-600 text-center mb-8">Apa Itu UMKM?</h2>
    <div className="bg-white rounded-xl shadow-2xl overflow-hidden transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img className="h-96 w-full object-cover md:w-96" src="/public/dashboardFt/Apa itu UMKM.png" alt="Apa Itu UMKM" />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-yellow-500 font-semibold">Informasi UMKM</div>
          <h3 className="text-2xl font-bold text-gray-900 mt-2">Definisi dan Peran UMKM dalam Ekonomi</h3>
          <p className="mt-2 text-gray-600">
            Usaha Mikro, Kecil, dan Menengah (UMKM) adalah kategori bisnis yang memiliki kontribusi besar dalam perekonomian suatu negara. UMKM mencakup bisnis yang dimiliki dan dioperasikan oleh individu atau kelompok dengan skala usaha kecil hingga menengah. UMKM berperan penting dalam menciptakan lapangan kerja, meningkatkan inovasi, dan mendukung pertumbuhan ekonomi lokal.
          </p>
          <p className="mt-2 text-gray-600">
            UMKM seringkali menjadi tulang punggung ekonomi di banyak negara karena fleksibilitas dan kemampuan mereka untuk beradaptasi dengan perubahan pasar. Selain itu, UMKM juga membantu dalam penyebaran kekayaan dan meratakan kesempatan ekonomi di berbagai wilayah.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="relative py-16 px-4 sm:px-6 lg:px-8">
  <div className="absolute inset-0 bg-[url('/public/bg1.png')] bg-center opacity-5" style={{ backgroundSize: '100% 100%' }}></div>
  
  <div className="max-w-7xl mx-auto relative">
    <h2 className="text-3xl font-bold text-yellow-600 text-center mb-8">UMKM di Indonesia</h2>
    <div className="bg-white rounded-xl shadow-2xl overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out">
      <div className="md:flex">
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-yellow-500 font-semibold">Pentingnya UMKM</div>
          <h3 className="text-2xl font-bold text-gray-900 mt-2">Peran UMKM dalam Perekonomian Indonesia</h3>
          <p className="mt-2 text-gray-600">
            Usaha Mikro, Kecil, dan Menengah (UMKM) memainkan peran yang sangat vital dalam perekonomian Indonesia. Menurut data dari Kementerian Koperasi dan Usaha Kecil dan Menengah (Kemenkop UKM), UMKM menyumbang sekitar 60% dari Produk Domestik Bruto (PDB) Indonesia dan menyerap lebih dari 97% tenaga kerja di sektor non-pertanian.
          </p>
          <p className="mt-2 text-gray-600">
            UMKM di Indonesia tidak hanya berfungsi sebagai penyedia lapangan kerja, tetapi juga sebagai motor penggerak pertumbuhan ekonomi lokal dan regional. Mereka membantu menyebarluaskan kekayaan dan meningkatkan kesejahteraan masyarakat di berbagai daerah.
          </p>
          <p className="mt-2 text-gray-600">
            Pemerintah Indonesia juga telah meluncurkan berbagai program dan kebijakan untuk mendukung perkembangan UMKM, seperti penyediaan akses ke pembiayaan, pelatihan keterampilan, dan pemasaran digital. Dukungan ini bertujuan untuk meningkatkan daya saing UMKM Indonesia di pasar global.
          </p>
        </div>
        <div className="md:flex-shrink-0">
          <img className="h-96 w-full object-cover md:w-96" src="/public/dashboardFt/UMKM Indonesia1.png" alt="UMKM di Indonesia" />
        </div>
      </div>
    </div>
  </div>
</section>
<section className="relative py-16 px-4 sm:px-6 lg:px-8">
  <div className="absolute inset-0 bg-[url('/public/bg1.png')] bg-center opacity-5" style={{ backgroundSize: '100% 100%' }}></div>

  <div className="max-w-7xl mx-auto relative">
    <h2 className="text-3xl font-bold text-yellow-600 text-center mb-8">Mengapa Localine?</h2>
    <div className="bg-white rounded-xl shadow-2xl overflow-hidden transform transition-transform duration-500 hover:scale-105">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img className="h-96 w-full object-cover md:w-96" src="/public/dashboardFt/Mwngapa Localine.png" alt="Mengapa Localine" />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-yellow-500 font-semibold">Solusi Inovatif</div>
          <h3 className="text-2xl font-bold text-gray-900 mt-2">Kenapa Memilih Localine?</h3>
          <p className="mt-2 text-gray-600">
            Localine hadir sebagai solusi inovatif untuk mendukung perkembangan UMKM di Indonesia. Kami memahami tantangan yang dihadapi oleh UMKM dan berkomitmen untuk menyediakan platform yang memudahkan UMKM dalam mengakses informasi, pemasaran, dan peluang bisnis.
          </p>
          <p className="mt-2 text-gray-600">
            Dengan Localine, UMKM dapat memanfaatkan teknologi terkini untuk meningkatkan visibilitas mereka di pasar lokal maupun global. Platform kami menawarkan fitur-fitur yang dirancang untuk membantu UMKM dalam meraih sukses, termasuk alat pemasaran digital, analisis pasar, dan dukungan komunitas.
          </p>
          <p className="mt-2 text-gray-600">
            Kami percaya bahwa dengan memberdayakan UMKM melalui teknologi, kami dapat berkontribusi pada pertumbuhan ekonomi yang berkelanjutan dan kesejahteraan masyarakat Indonesia. Bergabunglah dengan Localine dan bawa bisnis Anda ke tingkat berikutnya!
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


{/* Peta Interaktif Section */}
{/* Peta Interaktif Section */}
<section className="py-16 px-4">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-8 text-[#5c4933] font-serif">Jelajahi UMKM di Peta</h2>
    <div className="bg-white rounded-xl shadow-lg overflow-hidden p-8">
      <div className="md:flex items-center">
        <div className="md:w-1/2 md:pr-8">
          <h3 className="text-2xl font-bold text-[#5c4933] mb-4">Temukan UMKM di Seluruh Nusantara</h3>
          <p className="text-gray-600 mb-6">
            Peta interaktif ini memudahkan Anda menjelajahi ribuan produk UMKM unik yang tersebar di berbagai wilayah Indonesia. Klik pada ikon marker untuk melihat detail produk UMKM di daerah tersebut.
          </p>
          <button className="bg-[#886b4c] text-white px-6 py-3 rounded-full font-bold hover:bg-[#5c4933] transition-transform transform hover:scale-105">
            Lihat Semua Produk
          </button>
        </div>
        <div className="md:w-1/2 md:pl-8">
          <MapInteractive />
        </div>
      </div>
    </div>
  </div>
</section>




      {/* Featured Products Section */}
      <section className="py-16 px-4 bg-[#ffffff]">
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
      <section className="py-16 px-4 bg-[#ffffff] text-black">
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
