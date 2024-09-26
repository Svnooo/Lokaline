import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, TrendingUp, Users, DollarSign, ChevronLeft, ChevronRight, Globe, Award, Truck } from 'lucide-react';

const islands = [
  { name: "Jawa", coords: { x: 34, y: 60 }, umkmCount: 1500000, gdpContribution: 60 },
  { name: "Bali", coords: { x: 45, y: 64 }, umkmCount: 300000, gdpContribution: 5 },
  { name: "Kalimantan", coords: { x: 40, y: 46 }, umkmCount: 500000, gdpContribution: 8 },
  { name: "Papua", coords: { x: 87, y: 53 }, umkmCount: 200000, gdpContribution: 2 },
  { name: "Sulawesi", coords: { x: 53, y: 48 }, umkmCount: 400000, gdpContribution: 7 },
  { name: "Sumatera", coords: { x: 18, y: 43 }, umkmCount: 800000, gdpContribution: 15 },
  { name: "NTT", coords: { x: 59, y: 67 }, umkmCount: 150000, gdpContribution: 2 },
  { name: "Maluku", coords: { x: 69, y: 55 }, umkmCount: 100000, gdpContribution: 1 }
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
  {
    name: "Wayang Kulit",
    island: "Jawa",
    description: "Seni pertunjukan tradisional dengan boneka bayangan kulit",
    image: "/api/placeholder/400/300",
    annualRevenue: 30000000,
    employeeCount: 3000,
    exportDestinations: ["Malaysia", "Singapura", "Australia"],
  },
  {
    name: "Keris",
    island: "Jawa",
    description: "Senjata tradisional dengan nilai budaya dan spiritual tinggi",
    image: "/api/placeholder/400/300",
    annualRevenue: 25000000,
    employeeCount: 2000,
    exportDestinations: ["Belanda", "Inggris", "Jerman"],
  },
  {
    name: "Furniture Jepara",
    island: "Jawa",
    description: "Mebel ukir berkualitas tinggi dengan desain khas Jepara",
    image: "/api/placeholder/400/300",
    annualRevenue: 80000000,
    employeeCount: 10000,
    exportDestinations: ["Amerika Serikat", "Eropa", "Timur Tengah"],
  },
  {
    name: "Tenun Ikat Bali",
    island: "Bali",
    description: "Kain tradisional dengan motif unik khas Bali",
    image: "/api/placeholder/400/300",
    annualRevenue: 40000000,
    employeeCount: 4000,
    exportDestinations: ["Australia", "Jepang", "Amerika Serikat"],
  },
  {
    name: "Ukiran Kayu Bali",
    island: "Bali",
    description: "Seni ukir kayu dengan motif-motif tradisional Bali",
    image: "/api/placeholder/400/300",
    annualRevenue: 35000000,
    employeeCount: 3500,
    exportDestinations: ["Eropa", "Amerika Serikat", "Jepang"],
  },
  {
    name: "Lukisan Ubud",
    island: "Bali",
    description: "Karya seni lukis dengan gaya khas Ubud",
    image: "/api/placeholder/400/300",
    annualRevenue: 45000000,
    employeeCount: 2000,
    exportDestinations: ["Amerika Serikat", "Eropa", "Australia"],
  },
  {
    name: "Perhiasan Perak Celuk",
    island: "Bali",
    description: "Perhiasan perak dengan desain unik dari desa Celuk",
    image: "/api/placeholder/400/300",
    annualRevenue: 55000000,
    employeeCount: 5000,
    exportDestinations: ["Jepang", "Eropa", "Amerika Serikat"],
  },
  {
    name: "Anyaman Rotan",
    island: "Kalimantan",
    description: "Kerajinan anyaman rotan dengan desain modern dan tradisional",
    image: "/api/placeholder/400/300",
    annualRevenue: 20000000,
    employeeCount: 2500,
    exportDestinations: ["Singapura", "Malaysia", "Jepang"],
  },
  {
    name: "Mandau",
    island: "Kalimantan",
    description: "Senjata tradisional Dayak dengan nilai sejarah tinggi",
    image: "/api/placeholder/400/300",
    annualRevenue: 15000000,
    employeeCount: 1000,
    exportDestinations: ["Eropa", "Amerika Serikat", "Australia"],
  },
  {
    name: "Madu Hutan",
    island: "Kalimantan",
    description: "Madu alami dari lebah liar hutan Kalimantan",
    image: "/api/placeholder/400/300",
    annualRevenue: 25000000,
    employeeCount: 1500,
    exportDestinations: ["Jepang", "Korea Selatan", "Singapura"],
  },
  {
    name: "Kayu Gaharu",
    island: "Kalimantan",
    description: "Kayu aromatik berkualitas tinggi untuk industri parfum",
    image: "/api/placeholder/400/300",
    annualRevenue: 60000000,
    employeeCount: 3000,
    exportDestinations: ["Timur Tengah", "China", "India"],
  },
  {
    name: "Noken",
    island: "Papua",
    description: "Tas tradisional Papua yang dianyam dari serat alami",
    image: "/api/placeholder/400/300",
    annualRevenue: 10000000,
    employeeCount: 1000,
    exportDestinations: ["Australia", "Jepang", "Amerika Serikat"],
  },
  {
    name: "Ukiran Asmat",
    island: "Papua",
    description: "Seni ukir kayu dengan motif khas suku Asmat",
    image: "/api/placeholder/400/300",
    annualRevenue: 15000000,
    employeeCount: 800,
    exportDestinations: ["Eropa", "Amerika Serikat", "Australia"],
  },
  {
    name: "Lukisan Kulit Kayu",
    island: "Papua",
    description: "Karya seni lukis di atas kulit kayu dengan motif tradisional Papua",
    image: "/api/placeholder/400/300",
    annualRevenue: 8000000,
    employeeCount: 500,
    exportDestinations: ["Jepang", "Eropa", "Amerika Serikat"],
  },
  {
    name: "Minyak Buah Merah",
    island: "Papua",
    description: "Minyak dari buah merah Papua dengan khasiat kesehatan",
    image: "/api/placeholder/400/300",
    annualRevenue: 20000000,
    employeeCount: 1200,
    exportDestinations: ["Jepang", "Korea Selatan", "Amerika Serikat"],
  },
  {
    name: "Sutera Bugis",
    island: "Sulawesi",
    description: "Kain sutera halus dengan motif tradisional Bugis",
    image: "/api/placeholder/400/300",
    annualRevenue: 30000000,
    employeeCount: 3000,
    exportDestinations: ["Malaysia", "Singapura", "Jepang"],
  },
  {
    name: "Kopi Toraja",
    island: "Sulawesi",
    description: "Kopi premium dari dataran tinggi Toraja",
    image: "/api/placeholder/400/300",
    annualRevenue: 40000000,
    employeeCount: 5000,
    exportDestinations: ["Amerika Serikat", "Eropa", "Australia"],
  },
  {
    name: "Kerajinan Tanduk",
    island: "Sulawesi",
    description: "Produk kerajinan dari tanduk kerbau dengan desain unik",
    image: "/api/placeholder/400/300",
    annualRevenue: 15000000,
    employeeCount: 1000,
    exportDestinations: ["Jepang", "Korea Selatan", "China"],
  },
  {
    name: "Kayu Hitam",
    island: "Sulawesi",
    description: "Produk furnitur dan kerajinan dari kayu hitam Sulawesi",
    image: "/api/placeholder/400/300",
    annualRevenue: 25000000,
    employeeCount: 2000,
    exportDestinations: ["Eropa", "Amerika Serikat", "Timur Tengah"],
  },
  {
    name: "Songket Palembang",
    island: "Sumatera",
    description: "Kain tenun mewah dengan benang emas khas Palembang",
    image: "/api/placeholder/400/300",
    annualRevenue: 45000000,
    employeeCount: 4000,
    exportDestinations: ["Malaysia", "Singapura", "Brunei"],
  },
  {
    name: "Kopi Gayo",
    island: "Sumatera",
    description: "Kopi Arabika organik dari dataran tinggi Gayo, Aceh",
    image: "/api/placeholder/400/300",
    annualRevenue: 60000000,
    employeeCount: 8000,
    exportDestinations: ["Amerika Serikat", "Eropa", "Jepang"],
  },
  {
    name: "Rendang",
    island: "Sumatera",
    description: "Makanan olahan daging sapi khas Padang dengan rempah-rempah",
    image: "/api/placeholder/400/300",
    annualRevenue: 35000000,
    employeeCount: 3000,
    exportDestinations: ["Malaysia", "Singapura", "Timur Tengah"],
  },
  {
    name: "Kerajinan Rotan Riau",
    island: "Sumatera",
    description: "Produk anyaman rotan dengan desain modern dari Riau",
    image: "/api/placeholder/400/300",
    annualRevenue: 25000000,
    employeeCount: 2500,
    exportDestinations: ["Eropa", "Amerika Serikat", "Australia"],
  },
  {
    name: "Tenun Ikat Sumba",
    island: "NTT",
    description: "Kain tenun tradisional dengan motif khas Sumba",
    image: "/api/placeholder/400/300",
    annualRevenue: 20000000,
    employeeCount: 2000,
    exportDestinations: ["Jepang", "Amerika Serikat", "Eropa"],
  },
  {
    name: "Madu Sumbawa",
    island: "NTT",
    description: "Madu murni berkualitas tinggi dari pulau Sumbawa",
    image: "/api/placeholder/400/300",
    annualRevenue: 15000000,
    employeeCount: 1000,
    exportDestinations: ["Singapura", "Malaysia", "Australia"],
  },
  {
    name: "Kain Tenun Buna",
    island: "NTT",
    description: "Kain tenun tradisional dari Timor dengan motif geometris",
    image: "/api/placeholder/400/300",
    annualRevenue: 10000000,
    employeeCount: 800,
    exportDestinations: ["Eropa", "Amerika Serikat", "Australia"],
  },
  {
    name: "Kerajinan Cangkang Mutiara",
    island: "NTT",
    description: "Produk kerajinan dari cangkang mutiara laut NTT",
    image: "/api/placeholder/400/300",
    annualRevenue: 18000000,
    employeeCount: 1500,
    exportDestinations: ["Jepang", "China", "Korea Selatan"],
  },
  {
    name: "Pala Banda",
    island: "Maluku",
    description: "Rempah-rempah pala berkualitas tinggi dari Kepulauan Banda",
    image: "/api/placeholder/400/300",
    annualRevenue: 25000000,
    employeeCount: 2000,
    exportDestinations: ["Eropa", "Amerika Serikat", "Timur Tengah"],
  },
  {
    name: "Kerajinan Kerang",
    island: "Maluku",
    description: "Produk kerajinan dari kerang laut Maluku",
    image: "/api/placeholder/400/300",
    annualRevenue: 12000000,
    employeeCount: 1000,
    exportDestinations: ["Jepang", "Australia", "Eropa"],
  },
  {
    name: "Ikan Kayu",
    island: "Maluku",
    description: "Produk olahan ikan tradisional khas Maluku",
    image: "/api/placeholder/400/300",
    annualRevenue: 18000000,
    employeeCount: 1500,
    exportDestinations: ["Jepang", "Korea Selatan", "Taiwan"],
  },
  
    {
    name: "Tenun Ikat Tanimbar",
    island: "Maluku",
    description: "Kain tenun tradisional dari Kepulauan Tanimbar",
    image: "/api/placeholder/400/300",
    annualRevenue: 10000000,
    employeeCount: 800,
    exportDestinations: ["Jepang", "Australia", "Eropa"],
  },
  {
    name: "Cengkeh Ternate",
    island: "Maluku",
    description: "Rempah-rempah cengkeh berkualitas tinggi dari Ternate",
    image: "/api/placeholder/400/300",
    annualRevenue: 22000000,
    employeeCount: 1800,
    exportDestinations: ["India", "Timur Tengah", "Eropa"],
  },
];


const UMKMProfile = () => {
  const [selectedIsland, setSelectedIsland] = useState(null);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [islandHover, setIslandHover] = useState(null);
  const [mapZoom, setMapZoom] = useState(1);
  const [showStats, setShowStats] = useState(false);

  useEffect(() => {
    if (selectedIsland) {
      const timer = setTimeout(() => setShowStats(true), 500);
      return () => clearTimeout(timer);
    }
  }, [selectedIsland]);
  
 const getRandomSpotlight = () => {
    const allProducts = products.filter(p => p.island === selectedIsland.name);
    return allProducts[Math.floor(Math.random() * allProducts.length)];
  };
  const handleIslandClick = (island) => {
    setSelectedIsland(island);
    setCurrentProductIndex(0);
    setMapZoom(1.2);
    setShowStats(false);
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

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
    const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);
  
    return (
      <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

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
                  className="absolute cursor-pointer transition-all duration-300"
                  style={{
                    left: `${island.coords.x}%`,
                    top: `${island.coords.y}%`,
                  }}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => handleIslandClick(island)}
                  onMouseEnter={() => setIslandHover(island)}
                  onMouseLeave={() => setIslandHover(null)}
                >
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#b49b6c"
                    stroke="#b49b6c"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    animate={{ 
                      scale: selectedIsland?.name === island.name ? [1, 1.2, 1] : 1,
                      opacity: selectedIsland?.name === island.name ? 1 : 0.7
                    }}
                    transition={{ repeat: selectedIsland?.name === island.name ? Infinity : 0, duration: 1 }}
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </motion.svg>
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
                className="absolute bg-white p-4 rounded-lg shadow-xl z-10"
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

                        {/* New: Product Impact Visualization */}
                        <div className="mt-6">
                          <h3 className="text-xl font-bold mb-4 text-[#7a6640]">Dampak Produk</h3>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <Card className="bg-gradient-to-br from-[#f0e6d2] to-[#e6d8b8]">
                              <CardContent className="flex flex-col items-center justify-center p-4">
                                <Award className="text-[#7a6640] mb-2" size={32} />
                                <p className="text-lg font-bold text-[#7a6640]">Kualitas Tinggi</p>
                              </CardContent>
                            </Card>
                            <Card className="bg-gradient-to-br from-[#f0e6d2] to-[#e6d8b8]">
                              <CardContent className="flex flex-col items-center justify-center p-4">
                                <Truck className="text-[#7a6640] mb-2" size={32} />
                                <p className="text-lg font-bold text-[#7a6640]">Ekspor Global</p>
                              </CardContent>
                            </Card>
                            <Card className="bg-gradient-to-br from-[#f0e6d2] to-[#e6d8b8]">
                              <CardContent className="flex flex-col items-center justify-center p-4">
                                <Users className="text-[#7a6640] mb-2" size={32} />
                                <p className="text-lg font-bold text-[#7a6640]">Pemberdayaan Lokal</p>
                              </CardContent>
                            </Card>
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

          {/* New: Island Statistics */}
          <AnimatePresence>
            {selectedIsland && showStats && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="mt-6"
              >
                <Card className="w-full bg-white shadow-xl overflow-hidden border-2 border-[#b49b6c]">
                  <CardHeader className="bg-gradient-to-r from-[#b49b6c] to-[#9a855d] text-white">
                    <CardTitle className="text-2xl">Statistik UMKM {selectedIsland.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-bold mb-2 text-[#7a6640]">Kontribusi PDB per Sektor</h4>
                        <ResponsiveContainer width="100%" height={200}>
                          <PieChart>
                            <Pie
                              data={[
                                { name: 'Manufaktur', value: 30 },
                                { name: 'Pertanian', value: 25 },
                                { name: 'Jasa', value: 20 },
                                { name: 'Pariwisata', value: 15 },
                                { name: 'Lainnya', value: 10 },
                              ]}
                              cx="50%"
                              cy="50%"
                              labelLine={false}
                              label={renderCustomizedLabel}
                              outerRadius={80}
                              fill="#8884d8"
                              dataKey="value"
                            >
                              {islands.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                              ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                      <div>
                          <h4 className="text-lg font-bold mb-2 text-[#7a6640]">Pertumbuhan UMKM (5 Tahun Terakhir)</h4>
                        <ResponsiveContainer width="100%" height={200}>
                          <BarChart
                            data={[
                              { year: '2019', growth: 5 },
                              { year: '2020', growth: 3 },
                              { year: '2021', growth: 4 },
                              { year: '2022', growth: 6 },
                              { year: '2023', growth: 7 },
                            ]}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                          >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="year" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="growth" fill="#8884d8" />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>

          {/* New: UMKM Success Stories */}
          <AnimatePresence>
            {selectedIsland && showStats && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="mt-6"
              >
                <Card className="w-full bg-white shadow-xl overflow-hidden border-2 border-[#b49b6c]">
                  <CardHeader className="bg-gradient-to-r from-[#b49b6c] to-[#9a855d] text-white">
                    <CardTitle className="text-2xl">Kisah Sukses UMKM {selectedIsland.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card className="bg-gradient-to-br from-[#f0e6d2] to-[#e6d8b8]">
                        <CardContent className="p-4">
                          <h4 className="text-lg font-bold mb-2 text-[#7a6640]">Batik Pekalongan Go International</h4>
                          <p className="text-sm text-[#7a6640]">
                            UMKM Batik Pekalongan berhasil menembus pasar internasional dengan inovasi desain yang memadukan motif tradisional dan modern.
                          </p>
                        </CardContent>
                      </Card>
                      <Card className="bg-gradient-to-br from-[#f0e6d2] to-[#e6d8b8]">
                        <CardContent className="p-4">
                          <h4 className="text-lg font-bold mb-2 text-[#7a6640]">Kopi Gayo Mendunia</h4>
                          <p className="text-sm text-[#7a6640]">
                            Petani kopi Gayo berhasil mengekspor produk mereka ke berbagai negara, meningkatkan pendapatan dan kualitas hidup masyarakat lokal.
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>

          {/* New: Interactive UMKM Quiz */}
       
        </motion.div>
      </div>

      {/* New: Floating Action Button for UMKM Support */}
      <motion.div
        className="fixed bottom-8 right-8"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
      >
        <Button 
          className="bg-[#b49b6c] hover:bg-[#9a855d] text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg"
          onClick={() => alert("Terima kasih atas minat Anda untuk mendukung UMKM Indonesia!")}
        >
          <DollarSign size={24} />
        </Button>
      </motion.div>
    </div>
  );
};

export default UMKMProfile;