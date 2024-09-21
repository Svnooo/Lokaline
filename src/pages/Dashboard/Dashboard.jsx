import { motion } from 'framer-motion';
import { ArrowRight, ShoppingBag, Star, Users } from 'lucide-react';
import React from 'react';

const FeatureCard = ({ icon, title, description }) => (
  <motion.div
    className="bg-white p-6 rounded-lg shadow-lg"
    whileHover={{ y: -5, boxShadow: '0 10px 30px -15px rgba(0, 0, 0, 0.3)' }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <div className="text-indigo-600 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const TestimonialCard = ({ name, role, content }) => (
  <motion.div
    className="bg-white p-6 rounded-lg shadow-lg"
    whileHover={{ scale: 1.05 }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <p className="text-gray-600 mb-4">"{content}"</p>
    <div className="font-semibold text-gray-800">{name}</div>
    <div className="text-sm text-gray-500">{role}</div>
  </motion.div>
);

const UMKMLandingPage = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-white shadow-md">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold text-indigo-600">UMKM Dashboard</div>
          </div>
        </header>

        <main>
          <section id="beranda" className="relative py-20 text-white bg-indigo-600">
            <div className="relative z-10 container mx-auto px-6 text-center">
              <div className="p-6 rounded-lg">
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
                  className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold text-lg inline-flex items-center hover:bg-gray-100 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Mulai Sekarang <ArrowRight className="ml-2" />
                </motion.a>
              </div>
            </div>
          </section>

          {/* Section Fitur */}
          <section id="fitur" className="py-20">
            <div className="container mx-auto px-6">
              <motion.h2
                className="text-3xl font-bold mb-12 text-center text-gray-800"
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

          {/* Section Testimoni */}
          <section id="testimoni" className="py-20 bg-gray-200">
            <div className="container mx-auto px-6">
              <motion.h2
                className="text-3xl font-bold mb-12 text-center text-gray-800"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Apa Kata Mereka
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <TestimonialCard
                  name="Rina Wati"
                  role="Pemilik Batik Canting Emas"
                  content="Dashboard UMKM ini sangat membantu saya dalam mengelola penjualan batik online. Sangat mudah digunakan!"
                />
                <TestimonialCard
                  name="Budi Santoso"
                  role="Pengrajin Kayu Jepara"
                  content="Berkat fitur analisis pelanggan, saya bisa memahami tren pasar dan meningkatkan penjualan produk saya."
                />
                <TestimonialCard
                  name="Siti Aminah"
                  role="Pemilik Warung Sambel Mercon"
                  content="Laporan kinerja yang detail membantu saya mengambil keputusan bisnis dengan lebih percaya diri."
                />
              </div>
            </div>
          </section>

          {/* Section Kontak */}
          <section id="kontak" className="py-20">
            <div className="container mx-auto px-6 text-center">
              <motion.h2
                className="text-3xl font-bold mb-8 text-gray-800"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Siap Memulai?
              </motion.h2>
              <p className="text-xl mb-12 text-gray-600 max-w-2xl mx-auto">
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
