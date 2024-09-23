import React from 'react';

const MapInteractive = () => {
  const handlePulauClick = (pulau) => {
    alert(`UMKM di Pulau ${pulau}`);
  };

  return (
    <div className="relative mx-auto w-full max-w-6xl mt-[-200px] ml-[-30px]"> {/* Tambahkan margin negatif untuk menggeser ke kiri */}
      {/* Menampilkan SVG */}
      <img
        src="/assets/Localine Map.svg"
        alt="Peta Indonesia"
        className="w-full h-auto"
        style={{ transform: 'scale(1.1)', transformOrigin: 'top left' }}
      />

      {/* Interaktivitas Pulau */}
      <button
        className="absolute bg-blue-500 text-white px-2 py-1 rounded"
        style={{ top: '68%', left: '40%' }}
        onClick={() => handlePulauClick('Jawa')}
      >
        Jawa
      </button>

      <button
        className="absolute bg-green-500 text-white px-2 py-1 rounded"
        style={{ top: '70%', left: '50%' }}
        onClick={() => handlePulauClick('Bali')}
      >
        Bali
      </button>

      <button
        className="absolute bg-red-500 text-white px-2 py-1 rounded"
        style={{ top: '50%', left: '22%' }}
        onClick={() => handlePulauClick('Sumatra')}
      >
        Sumatra
      </button>

      <button
        className="absolute bg-yellow-500 text-white px-2 py-1 rounded"
        style={{ top: '50%', left: '42%' }}
        onClick={() => handlePulauClick('Kalimantan')}
      >
        Kalimantan
      </button>

      <button
        className="absolute bg-purple-500 text-white px-2 py-1 rounded"
        style={{ top: '54%', left: '57%' }}
        onClick={() => handlePulauClick('Sulawesi')}
      >
        Sulawesi
      </button>

      <button
        className="absolute bg-pink-500 text-white px-2 py-1 rounded"
        style={{ top: '60%', left: '90%' }}
        onClick={() => handlePulauClick('Papua')}
      >
        Papua
      </button>

      <button
        className="absolute bg-indigo-500 text-white px-2 py-1 rounded"
        style={{ top: '65%', left: '75%' }}
        onClick={() => handlePulauClick('Maluku')}
      >
        Maluku
      </button>

      <button
        className="absolute bg-teal-500 text-white px-2 py-1 rounded"
        style={{ top: '75%', left: '60%' }}
        onClick={() => handlePulauClick('NTT')}
      >
        NTT
      </button>
    </div>
  );
};

export default MapInteractive;
