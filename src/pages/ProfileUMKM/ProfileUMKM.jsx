import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, TrendingUp, Users, DollarSign, ChevronLeft, ChevronRight, Share2, Award, Globe } from 'lucide-react';

const islands = [
  { name: "Jawa", color: "#ef4444", coords: { x: 60, y: 68 }, umkmCount: 1500000, gdpContribution: 60 },
  { name: "Bali", color: "#f97316", coords: { x: 70, y: 72 }, umkmCount: 300000, gdpContribution: 5 },
  { name: "Kalimantan", color: "#eab308", coords: { x: 50, y: 40 }, umkmCount: 500000, gdpContribution: 8 },
  { name: "Papua", color: "#22c55e", coords: { x: 90, y: 50 }, umkmCount: 200000, gdpContribution: 2 },
  { name: "Sulawesi", color: "#3b82f6", coords: { x: 70, y: 40 }, umkmCount: 400000, gdpContribution: 7 },
  { name: "Sumatera", color: "#6366f1", coords: { x: 30, y: 40 }, umkmCount: 800000, gdpContribution: 15 },
  { name: "NTT", color: "#a855f7", coords: { x: 80, y: 70 }, umkmCount: 150000, gdpContribution: 2 },
  { name: "Maluku", color: "#ec4899", coords: { x: 85, y: 55 }, umkmCount: 100000, gdpContribution: 1 }
];

const products = [
  { 
    name: "Batik Pekalongan", 
    island: "Jawa", 
    description: "Batik tradisional dengan motif khas Pekalongan yang mendunia", 
    image: "/api/placeholder/400/300",
    annualRevenue: 50000000,
    employeeCount: 5000,
    exportDestinations: ["Jepang", "Amerika Serikat", "Eropa"],
    awards: ["UNESCO Intangible Cultural Heritage", "Indonesian Creative Product of the Year 2023"],
    sustainabilityInitiatives: ["Natural dye usage", "Eco-friendly packaging"],
    socialImpact: "Empowers local artisans and preserves cultural heritage"
  },
  // ... (tambahkan produk lainnya sesuai kebutuhan)
];

const UMKMProfile = () => {
  const [selectedIsland, setSelectedIsland] = useState(null);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [islandHover, setIslandHover] = useState(null);
  const [mapZoom, setMapZoom] = useState(1);
  const [showExportChart, setShowExportChart] = useState(false);

  const handleIslandClick = (island) => {
    setSelectedIsland(island);
    setCurrentProductIndex(0);
    setMapZoom(1.2);
    setTimeout(() => setMapZoom(1), 500);
  };

  const handleNextProduct = () => {
    setCurrentProductIndex((prevIndex) => 
      (prevIndex + 1) % products.filter(p => p.island === selectedIsland.name).length
    );
  };

  const handlePrevProduct = () => {
    setCurrentProductIndex((prevIndex) => 
      (prevIndex - 1 + products.filter(p => p.island === selectedIsland.name).length) % 
      products.filter(p => p.island === selectedIsland.name).length
    );
  };

  const exportData = [
    { name: "Jepang", value: 35 },
    { name: "Amerika Serikat", value: 28 },
    { name: "Eropa", value: 22 },
    { name: "Australia", value: 15 }
  ];

  return (
    <div className="container mx-auto p-4 bg-gradient-to-br from-indigo-100 to-purple-100 min-h-screen">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-bold text-center mb-8 text-indigo-800 glow-text"
      >
        Keajaiban UMKM Indonesia
      </motion.h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Interactive Indonesia Map */}
        <motion.div 
          className="lg:w-1/2 relative"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="w-full aspect-[4/3] rounded-xl overflow-hidden relative shadow-lg">
            <motion.div 
              className="w-full h-full"
              style={{
                backgroundImage: "url('/public/peta.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
              animate={{ scale: mapZoom }}
              transition={{ duration: 0.5 }}
            >
              {islands.map((island) => (
                <motion.button
                  key={island.name}
                  className={`absolute rounded-full cursor-pointer transition-all duration-300 border-4 ${selectedIsland?.name === island.name ? 'border-yellow-400' : 'border-white'}`}
                  style={{
                    backgroundColor: island.color,
                    left: `${island.coords.x}%`,
                    top: `${island.coords.y}%`,
                  }}
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.5, boxShadow: "0 0 15px rgba(255,255,255,0.8)" }}
                  onClick={() => handleIslandClick(island)}
                  onMouseEnter={() => setIslandHover(island)}
                  onMouseLeave={() => setIslandHover(null)}
                >
                  <motion.div
                    className="w-6 h-6 flex items-center justify-center text-white font-bold"
                    animate={{ scale: selectedIsland?.name === island.name ? [1, 1.2, 1] : 1 }}
                    transition={{ repeat: Infinity, duration: 1 }}
                  >
                    {island.name.charAt(0)}
                  </motion.div>
                </motion.button>
              ))}
            </motion.div>
          </div>
          <AnimatePresence>
            {islandHover && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="absolute bg-white p-4 rounded-lg shadow-lg"
                style={{ left: `${islandHover.coords.x}%`, top: `${islandHover.coords.y + 8}%` }}
              >
                <h3 className="font-bold text-xl mb-2">{islandHover.name}</h3>
                <p className="flex items-center"><Users className="mr-2" size={16} /> UMKM: {islandHover.umkmCount.toLocaleString()}</p>
                <p className="flex items-center"><DollarSign className="mr-2" size={16} /> Kontribusi PDB: {islandHover.gdpContribution}%</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Product Information and Statistics */}
        <motion.div 
          className="lg:w-1/2"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {selectedIsland ? (
            <Card className="w-full bg-white shadow-xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                <CardTitle className="text-3xl">Keunggulan UMKM {selectedIsland.name}</CardTitle>
                <CardDescription className="text-gray-200 flex items-center">
                  <MapPin className="inline-block mr-2" size={20} />
                  {selectedIsland.name} - Pusat Kreativitas dan Inovasi
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6 relative">
                <AnimatePresence mode="wait">
                  {products.filter(p => p.island === selectedIsland.name).map((product, index) => (
                    index === currentProductIndex && (
                      <motion.div
                        key={product.name}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.5 }}
                      >
                        <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
                        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                        <p className="text-gray-600">{product.description}</p>
                        <p className="text-gray-600 mt-2"><TrendingUp className="inline-block mr-2" size={16} /> Pendapatan Tahunan: Rp {product.annualRevenue.toLocaleString()}</p>
                        <p className="text-gray-600"><Users className="inline-block mr-2" size={16} /> Jumlah Karyawan: {product.employeeCount}</p>
                        <p className="text-gray-600"><Globe className="inline-block mr-2" size={16} /> Tujuan Ekspor: {product.exportDestinations.join(", ")}</p>
                        <div className="mt-4 flex justify-between">
                          <Button onClick={handlePrevProduct} variant="outline" disabled={currentProductIndex === 0}><ChevronLeft /></Button>
                          <Button onClick={handleNextProduct} variant="outline" disabled={currentProductIndex === products.filter(p => p.island === selectedIsland.name).length - 1}><ChevronRight /></Button>
                        </div>
                      </motion.div>
                    )
                  ))}
                </AnimatePresence>
              </CardContent>
            </Card>
          ) : (
            <div className="text-center text-gray-600 mt-10">
              <p>Pilih sebuah pulau untuk melihat detail UMKM.</p>
            </div>
          )}
        </motion.div>
      </div>

      {/* Export Data Visualization */}
      <motion.div 
        className="mt-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Analisis Ekspor UMKM</span>
              <Button 
                onClick={() => setShowExportChart(!showExportChart)}
                variant="outline"
              >
                {showExportChart ? 'Sembunyikan' : 'Tampilkan'} Grafik
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <AnimatePresence>
              {showExportChart && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={exportData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="value" fill="#82ca9d" name="Persentase Ekspor" />
                    </BarChart>
                  </ResponsiveContainer>
                </motion.div>
              )}
            </AnimatePresence>
          </CardContent>
        </Card>
      </motion.div>

      {/* Success Stories Section */}
      <motion.div 
        className="mt-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <h2 className="text-3xl font-bold mb-4 text-center">Kisah Sukses UMKM</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="overflow-hidden">
              <img src={`/api/placeholder/400/${300 + i * 10}`} alt={`Success Story ${i}`} className="w-full h-48 object-cover" />
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold mb-2">UMKM Sukses {i}</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </CardContent>
              <CardFooter className="bg-gray-100 p-4">
                <Button variant="outline" className="w-full">Baca Selengkapnya</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </motion.div>

      {/* Call to Action Section */}
      <motion.div 
        className="mt-12 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <h2 className="text-4xl font-bold mb-4">Bergabunglah dalam Revolusi UMKM Indonesia!</h2>
        <p className="text-xl mb-6">Temukan peluang, tingkatkan bisnis Anda, dan berkontribusi pada ekonomi nasional.</p>
        <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300">
          Mulai Perjalanan UMKM Anda
        </Button>
      </motion.div>

    </div>
  );
};

export default UMKMProfile;
