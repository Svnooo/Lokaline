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
    <div className="container mx-auto p-4 bg-gradient-to-br from-yellow-50 to-amber-100 min-h-screen pt-20"> {/* Added pt-20 here */}
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-bold text-center mb-8 text-yellow-800 glow-text"
      >
        <br />
        <br />
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
                <h3 className="font-bold text-xl mb-2 text-yellow-800">{islandHover.name}</h3>
                <p className="flex items-center text-yellow-700"><Users className="mr-2" size={16} /> UMKM: {islandHover.umkmCount.toLocaleString()}</p>
                <p className="flex items-center text-yellow-700"><DollarSign className="mr-2" size={16} /> Kontribusi PDB: {islandHover.gdpContribution}%</p>
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
            <Card className="w-full bg-white shadow-xl overflow-hidden border-2 border-yellow-500">
              <CardHeader className="bg-gradient-to-r from-yellow-600 to-amber-600 text-white">
                <CardTitle className="text-3xl">Keunggulan UMKM {selectedIsland.name}</CardTitle>
                <CardDescription className="text-yellow-100 flex items-center">
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
                        <h3 className="text-xl font-semibold mb-2 text-yellow-800">{product.name}</h3>
                        <p className="text-yellow-700">{product.description}</p>
                        <p className="text-yellow-700 mt-2"><TrendingUp className="inline-block mr-2" size={16} /> Pendapatan Tahunan: Rp {product.annualRevenue.toLocaleString()}</p>
                        <p className="text-yellow-700"><Users className="inline-block mr-2" size={16} /> Jumlah Karyawan: {product.employeeCount}</p>
                        <p className="text-yellow-700"><Globe className="inline-block mr-2" size={16} /> Tujuan Ekspor: {product.exportDestinations.join(", ")}</p>
                        <div className="mt-4 flex justify-between">
                          <Button onClick={handlePrevProduct} variant="outline" className="text-yellow-600 border-yellow-600 hover:bg-yellow-100"><ChevronLeft /></Button>
                          <Button onClick={handleNextProduct} variant="outline" className="text-yellow-600 border-yellow-600 hover:bg-yellow-100"><ChevronRight /></Button>
                        </div>
                      </motion.div>
                    )
                  ))}
                </AnimatePresence>
              </CardContent>
            </Card>
          ) : (
            <div className="text-center text-yellow-800 mt-10">
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
        <Card className="border-2 border-yellow-500">
          <CardHeader className="bg-gradient-to-r from-yellow-600 to-amber-600 text-white">
            <CardTitle className="flex items-center justify-between">
              <span>Analisis Ekspor UMKM</span>
              <Button 
                onClick={() => setShowExportChart(!showExportChart)}
                variant="outline"
                className="text-white border-white hover:bg-yellow-500"
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
                      <Bar dataKey="value" fill="#eab308" name="Persentase Ekspor" />
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
        <h2 className="text-3xl font-bold mb-4 text-center text-yellow-800">Kisah Sukses UMKM</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="overflow-hidden border-2 border-yellow-500">
              <img src={`/api/placeholder/400/${300 + i * 10}`} alt={`Success Story ${i}`} className="w-full h-48 object-cover" />
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-yellow-800">UMKM Sukses {i}</h3>
                <p className="text-yellow-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </CardContent>
              <CardFooter className="bg-yellow-100 p-4">
                <Button variant="outline" className="w-full text-yellow-600 border-yellow-600 hover:bg-yellow-200">Baca Selengkapnya</Button>
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
        <h2 className="text-4xl font-bold mb-4 text-yellow-800">Bergabunglah dalam Revolusi UMKM Indonesia!</h2>
        <p className="text-xl mb-6 text-yellow-700">Temukan peluang, tingkatkan bisnis Anda, dan berkontribusi pada ekonomi nasional.</p>
        <Button className="bg-gradient-to-r from-yellow-600 to-amber-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-yellow-700 hover:to-amber-700 transition-all duration-300">
          Mulai Perjalanan UMKM Anda
        </Button>
      </motion.div>

      {/* Batik Pattern Background */}
      <div className="fixed inset-0 z-[-1] opacity-5 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="batik" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="30" fill="none" stroke="#d97706" strokeWidth="2"/>
              <circle cx="50" cy="50" r="20" fill="none" stroke="#d97706" strokeWidth="2"/>
              <circle cx="50" cy="50" r="10" fill="#d97706"/>
              <circle cx="0" cy="0" r="5" fill="#d97706"/>
              <circle cx="100" cy="0" r="5" fill="#d97706"/>
              <circle cx="0" cy="100" r="5" fill="#d97706"/>
              <circle cx="100" cy="100" r="5" fill="#d97706"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#batik)"/>
        </svg>
      </div>
    </div>
  );
};

export default UMKMProfile;