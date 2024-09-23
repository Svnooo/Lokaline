import React, { useState } from 'react';
import { X } from 'lucide-react';

const MapInteractive = () => {
  const [selectedIsland, setSelectedIsland] = useState(null);

  const handlePulauClick = (pulau) => {
    setSelectedIsland(pulau);
  };

  const closeModal = () => {
    setSelectedIsland(null);
  };

  const islands = [
    { name: 'Jawa', top: '68%', left: '40%', width: '15%', height: '10%' },
    { name: 'Bali', top: '70%', left: '50%', width: '5%', height: '5%' },
    { name: 'Sumatra', top: '50%', left: '22%', width: '15%', height: '20%' },
    { name: 'Kalimantan', top: '50%', left: '42%', width: '15%', height: '15%' },
    { name: 'Sulawesi', top: '54%', left: '57%', width: '10%', height: '15%' },
    { name: 'Papua', top: '60%', left: '90%', width: '10%', height: '15%' },
    { name: 'Maluku', top: '65%', left: '75%', width: '10%', height: '10%' },
    { name: 'NTT', top: '75%', left: '60%', width: '10%', height: '5%' },
  ];

  // Mock UMKM data for each island
  const umkmData = {
    Jawa: [
      { name: 'Batik Pekalongan', type: 'Kerajinan', location: 'Pekalongan' },
      { name: 'Tahu Sumedang', type: 'Kuliner', location: 'Sumedang' },
      { name: 'Keris Surakarta', type: 'Kerajinan', location: 'Surakarta' },
    ],
    Bali: [
      { name: 'Kopi Kintamani', type: 'Pertanian', location: 'Kintamani' },
      { name: 'Tenun Endek', type: 'Kerajinan', location: 'Klungkung' },
    ],
    Sumatra: [
      { name: 'Kopi Gayo', type: 'Pertanian', location: 'Aceh' },
      { name: 'Ulos Batak', type: 'Kerajinan', location: 'Tapanuli' },
    ],
    Kalimantan: [
      { name: 'Amplang', type: 'Kuliner', location: 'Samarinda' },
      { name: 'Manik-manik Dayak', type: 'Kerajinan', location: 'Pontianak' },
    ],
    Sulawesi: [
      { name: 'Kain Sutera', type: 'Kerajinan', location: 'Makassar' },
      { name: 'Kopi Toraja', type: 'Pertanian', location: 'Toraja' },
    ],
    Papua: [
      { name: 'Noken', type: 'Kerajinan', location: 'Jayapura' },
      { name: 'Sagu', type: 'Pertanian', location: 'Merauke' },
    ],
    Maluku: [
      { name: 'Pala', type: 'Pertanian', location: 'Banda' },
      { name: 'Kerajinan Kerang', type: 'Kerajinan', location: 'Ambon' },
    ],
    NTT: [
      { name: 'Tenun Ikat', type: 'Kerajinan', location: 'Sumba' },
      { name: 'Moke', type: 'Minuman', location: 'Flores' },
    ],
  };

  return (
    <div className="relative mx-auto w-full max-w-6xl mt-[-200px] ml-[-30px]">
      <img
        src="/assets/Localine Map.svg"
        alt="Peta Indonesia"
        className="w-full h-auto"
        style={{ transform: 'scale(1.1)', transformOrigin: 'top left' }}
      />
      
      {islands.map((island) => (
        <div
          key={island.name}
          className="absolute cursor-pointer"
          style={{
            top: island.top,
            left: island.left,
            width: island.width,
            height: island.height,
          }}
          onClick={() => handlePulauClick(island.name)}
        />
      ))}

      {selectedIsland && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-[#5c4933]">UMKM di {selectedIsland}</h2>
              <button onClick={closeModal} className="text-[#886b4c] hover:text-[#5c4933]">
                <X size={24} />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {umkmData[selectedIsland].map((umkm, index) => (
                <div key={index} className="card"> {/* Gunakan kelas card */}
                  <h3 className="card-title">{umkm.name}</h3> {/* Judul */}
                  <p className="card-type">Jenis: {umkm.type}</p> {/* Jenis */}
                  <p className="card-location">Lokasi: {umkm.location}</p> {/* Lokasi */}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MapInteractive;
