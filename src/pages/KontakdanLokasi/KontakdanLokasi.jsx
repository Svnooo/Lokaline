import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

const customIcon = new Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email, message });
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    
    <form onSubmit={handleSubmit} className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-lg shadow-xl p-8 transition-all duration-300 hover:shadow-2xl border-2 border-yellow-500">
      <h3 className="text-3xl font-bold mb-6 text-gray-800 border-b-2 border-yellow-500 pb-2">Hubungi Kami</h3>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
          Nama
        </label>
        <input
          className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-yellow-500 transition-colors"
          id="name"
          type="text"
          placeholder="Nama Anda"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-yellow-500 transition-colors"
          id="email"
          type="email"
          placeholder="email@contoh.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="message">
          Pesan
        </label>
        <textarea
          className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-yellow-500 transition-colors"
          id="message"
          placeholder="Tulis pesan Anda di sini"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows="4"
        ></textarea>
      </div>
      <button
        className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition-colors duration-300 flex items-center justify-center"
        type="submit"
      >
        <Send className="mr-2" size={18} />
        Kirim Pesan
      </button>
    </form>
  );
};

const LocationInfo = () => (
  <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-lg shadow-xl p-8 transition-all duration-300 hover:shadow-2xl border-2 border-yellow-500">
    <h3 className="text-3xl font-bold mb-6 text-gray-800 border-b-2 border-yellow-500 pb-2">Lokasi Kami</h3>
    <div className="space-y-4">
      <div className="flex items-center">
        <MapPin className="mr-3 text-yellow-600" size={24} />
        <p className="text-gray-700">Jl. Malioboro No. 123, Yogyakarta, 55213</p>
      </div>
      <div className="flex items-center">
        <Phone className="mr-3 text-yellow-600" size={24} />
        <p className="text-gray-700">+62 274 123 4567</p>
      </div>
      <div className="flex items-center">
        <Mail className="mr-3 text-yellow-600" size={24} />
        <p className="text-gray-700">info@umkm-yogya.com</p>
      </div>
      <div className="flex items-center">
        <Clock className="mr-3 text-yellow-600" size={24} />
        <div>
          <p className="text-gray-700">Senin - Jumat: 09:00 - 17:00</p>
          <p className="text-gray-700">Sabtu: 09:00 - 15:00</p>
          <p className="text-gray-700">Minggu: Tutup</p>
        </div>
      </div>
    </div>
  </div>
);

const MapComponent = () => {
  const position = [-7.797068, 110.370529]; // Koordinat Yogyakarta

  return (
    <div className="rounded-lg shadow-xl overflow-hidden border-2 border-yellow-500">
      <MapContainer center={position} zoom={13} style={{ height: '400px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} icon={customIcon}>
          <Popup>UMKM Yogyakarta</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

const BatikBackground = () => (
  <div className="absolute inset-0 z-0 opacity-10">
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs>
        <pattern id="batik" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <circle cx="50" cy="50" r="30" fill="none" stroke="#000000" strokeWidth="2"/>
          <circle cx="50" cy="50" r="20" fill="none" stroke="#000000" strokeWidth="2"/>
          <circle cx="50" cy="50" r="10" fill="#000000"/>
          <circle cx="0" cy="0" r="5" fill="#000000"/>
          <circle cx="100" cy="0" r="5" fill="#000000"/>
          <circle cx="0" cy="100" r="5" fill="#000000"/>
          <circle cx="100" cy="100" r="5" fill="#000000"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#batik)"/>
    </svg>
  </div>
);

const ProductShowcase = () => {
  const products = [
    { name: 'Batik Tulis', image: '/api/placeholder/200/200' },
    { name: 'Kerajinan Perak', image: '/api/placeholder/200/200' },
    { name: 'Bakpia', image: '/api/placeholder/200/200' },
    { name: 'Gudeg Kaleng', image: '/api/placeholder/200/200' },
  ];

  return (
    <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-lg shadow-xl p-8 transition-all duration-300 hover:shadow-2xl border-2 border-yellow-500">
      <h3 className="text-3xl font-bold mb-6 text-gray-800 border-b-2 border-yellow-500 pb-2">Produk Unggulan</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <div key={index} className="text-center">
            <img src={product.image} alt={product.name} className="w-full h-auto rounded-lg mb-2" />
            <p className="text-gray-700 font-semibold">{product.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const ContactLocationPage = () => {
  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    setShowPage(true);
  }, []);

  return (
    <div className="relative min-h-screen py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <BatikBackground />
      <div className={`max-w-7xl mx-auto transition-opacity duration-1000 ${showPage ? 'opacity-100' : 'opacity-0'}`}>
        <h2 className="text-5xl font-extrabold text-center mb-12 text-yellow-600 drop-shadow-lg">
       
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-12 transform hover:scale-105 transition-transform duration-300">
            <ContactForm />
            <ProductShowcase />
          </div>
          <div className="space-y-8 transform hover:scale-105 transition-transform duration-300">
            <MapComponent />
            <LocationInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactLocationPage;