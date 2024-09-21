import { motion } from 'framer-motion';
import { ArrowRight, ShoppingBag, Star, Users, Sun, Moon } from 'lucide-react';
import React, { useState, useEffect } from 'react';

const FeatureCard = ({ icon, title, description }) => (
  <motion.div
    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
    whileHover={{ y: -5, boxShadow: '0 10px 30px -15px rgba(0, 0, 0, 0.3)' }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <div className="text-indigo-600 dark:text-indigo-400 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </motion.div>
);

const TestimonialCard = ({ name, role, content }) => (
  <motion.div
    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
    whileHover={{ scale: 1.05 }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <p className="text-gray-600 dark:text-gray-300 mb-4">"{content}"</p>
    <div className="font-semibold text-gray-800 dark:text-white">{name}</div>
    <div className="text-sm text-gray-500 dark:text-gray-400">{role}</div>
  </motion.div>
);

const UMKMLandingPage = () => {
  // State untuk dark mode
  const [darkMode, setDarkMode] = useState(false);

  // Mengatur kelas body berdasarkan mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Fungsi toggle dark mode
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
        <main>
          {/* Beranda Section with Video */}
          <section id="beranda" className="relative py-20 text-white">
            {/* Bagian konten yang berada di atas video */}
            <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center">
              {/* Tombol Dark Mode di atas tulisan */}
              <div className="mb-4">
                <button
                  onClick={toggleDarkMode}
                  className="text-gray-800 dark:text-gray-200 p-2 rounded-full focus:outline-none hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                >
                  {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
                </button>
              </div>

              {/* Teks dan Tombol Mulai Sekarang */}
              <motion.h1
                className="text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Wujudkan Potensi UMKM Anda
              </motion.h1>
              <motion.p
                className="text-xl mb-12 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Dashboard intuitif untuk memantau dan mengembangkan bisnis UMKM Anda dengan mudah dan efisien.
              </motion.p>
              <motion.a
                href="#"
                className="bg-white dark:bg-gray-700 text-indigo-600 dark:text-white px-8 py-3 rounded-full font-semibold text-lg inline-flex items-center hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Mulai Sekarang <ArrowRight className="ml-2" />
              </motion.a>
            </div>

            {/* Video background yang dimodifikasi agar naik ke atas */}
            <div className="relative z-0 w-full h-screen overflow-hidden">
              <video
                className="absolute inset-0 w-full h-full object-cover"
                style={{ transform: 'translateY(-50px)' }}
                autoPlay
                loop
                muted
              >
                <source src="/public/gara2us.mp4" type="video/mp4" />
                Browser Anda tidak mendukung video.
              </video>
            </div>
          </section>

          {/* Section Fitur */}
          <section id="fitur" className="py-20">
            <div className="container mx-auto px-6">
              <motion.h2
                className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Fitur Unggulan
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <FeatureCard
                  icon={<ShoppingBag className="w-10 h-10" />}
                  title="Manajemen Produk"
                  description="Kelola inventaris dan katalog produk Anda dengan mudah dan efisien."
                />
                <FeatureCard
                  icon={<Users className="w-10 h-10" />}
                  title="Analisis Pelanggan"
                  description="Pahami pelanggan Anda lebih baik dengan analisis data yang mendalam."
                />
                <FeatureCard
                  icon={<Star className="w-10 h-10" />}
                  title="Laporan Kinerja"
                  description="Pantau kinerja bisnis Anda dengan laporan visual yang informatif."
                />
              </div>
            </div>
          </section>

          {/* Section Kontak */}
          <section id="kontak" className="py-20">
            <div className="container mx-auto px-6 text-center">
              <motion.h2
                className="text-3xl font-bold mb-8 text-gray-800 dark:text-white"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Siap Memulai?
              </motion.h2>
              <p className="text-xl mb-12 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Bergabunglah dengan ribuan UMKM yang telah merasakan manfaat dari dashboard kami. Hubungi kami sekarang untuk demo gratis!
              </p>
              <motion.a
                href="#"
                className="bg-indigo-600 text-white px-10 py-4 rounded-full font-semibold text-lg inline-flex items-center hover:bg-indigo-700 transition-colors duration-300 shadow-lg transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Mulai Perjalanan Anda Hari Ini! <ArrowRight className="ml-2" />
              </motion.a>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default UMKMLandingPage;
