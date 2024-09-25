import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, TrendingUp, Users, DollarSign, ChevronLeft, ChevronRight, Globe } from 'lucide-react';

const islands = [
  { name: "Jawa", color: "#b49b6c", coords: { x: 60, y: 68 }, umkmCount: 1500000, gdpContribution: 60 },
  { name: "Bali", color: "#b49b6c", coords: { x: 70, y: 72 }, umkmCount: 300000, gdpContribution: 5 },
  { name: "Kalimantan", color: "#b49b6c", coords: { x: 50, y: 40 }, umkmCount: 500000, gdpContribution: 8 },
  { name: "Papua", color: "#b49b6c", coords: { x: 90, y: 50 }, umkmCount: 200000, gdpContribution: 2 },
  { name: "Sulawesi", color: "#b49b6c", coords: { x: 70, y: 40 }, umkmCount: 400000, gdpContribution: 7 },
  { name: "Sumatera", color: "#b49b6c", coords: { x: 30, y: 40 }, umkmCount: 800000, gdpContribution: 15 },
  { name: "NTT", color: "#b49b6c", coords: { x: 80, y: 70 }, umkmCount: 150000, gdpContribution: 2 },
  { name: "Maluku", color: "#b49b6c", coords: { x: 85, y: 55 }, umkmCount: 100000, gdpContribution: 1 }
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
  },
  // ...produk lainnya
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
    <div className="container mx-auto p-6 min-h-screen pt-20">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-bold text-center mb-10 text-[#7a6640] glow-text"
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
                backgroundImage: "url('/public/assets/Localine Map.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
              animate={{ scale: mapZoom }}
              transition={{ duration: 0.5 }}
            >
              {islands.map((island) => (
                <motion.button
                  key={island.name}
                  className={`absolute rounded-full cursor-pointer transition-all duration-300 border-4 ${selectedIsland?.name === island.name ? 'border-[#b49b6c]' : 'border-white'}`}
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
                    className="w-8 h-8 flex items-center justify-center text-white font-bold text-lg"
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
                className="absolute bg-white p-4 rounded-lg shadow-xl"
                style={{ left: `${islandHover.coords.x}%`, top: `${islandHover.coords.y + 8}%` }}
              >
                <h3 className="font-bold text-xl mb-2 text-[#7a6640]">{islandHover.name}</h3>
                <p className="flex items-center text-[#7a6640]"><Users className="mr-2" size={16} /> UMKM: {islandHover.umkmCount.toLocaleString()}</p>
                <p className="flex items-center text-[#7a6640]"><DollarSign className="mr-2" size={16} /> Kontribusi PDB: {islandHover.gdpContribution}%</p>
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
            <Card className="w-full bg-white shadow-xl overflow-hidden border-2 border-[#b49b6c] transition-transform transform hover:scale-105">
              <CardHeader className="bg-gradient-to-r from-[#b49b6c] to-[#9a855d] text-white">
                <CardTitle className="text-3xl">Keunggulan UMKM {selectedIsland.name}</CardTitle>
                <CardDescription className="text-[#f5eeda] flex items-center">
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
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <h2 className="text-2xl font-bold mb-4 text-[#7a6640]">{product.name}</h2>
                        <p className="text-md text-[#7a6640] mb-4">{product.description}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="flex items-center justify-center">
                            <img src={product.image} alt={product.name} className="w-full rounded-lg" />
                          </div>
                          <div className="flex flex-col justify-center">
                            <p className="flex items-center text-[#7a6640] mb-2">
                              <TrendingUp className="mr-2" size={20} /> Pendapatan Tahunan: Rp {product.annualRevenue.toLocaleString()}
                            </p>
                            <p className="flex items-center text-[#7a6640] mb-2">
                              <Users className="mr-2" size={20} /> Jumlah Karyawan: {product.employeeCount.toLocaleString()}
                            </p>
                            <p className="flex items-center text-[#7a6640] mb-2">
                              <Globe className="mr-2" size={20} /> Negara Ekspor: {product.exportDestinations.join(", ")}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )
                  ))}
                </AnimatePresence>
              </CardContent>
              <CardFooter className="bg-[#b49b6c] text-white flex justify-between">
                <Button variant="outline" onClick={handlePrevProduct}>
                  <ChevronLeft size={16} className="mr-2" /> Produk Sebelumnya
                </Button>
                <Button variant="outline" onClick={handleNextProduct}>
                  Produk Berikutnya <ChevronRight size={16} className="ml-2" />
                </Button>
              </CardFooter>
            </Card>
          ) : (
            <p className="text-lg text-center text-[#7a6640]">Klik salah satu pulau untuk melihat informasi UMKM</p>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default UMKMProfile;
