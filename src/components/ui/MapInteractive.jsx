import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

const customMapIcon = new Icon({
  iconUrl: '/public/assets/location-icon.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const MapInteractive = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const locations = [
    { lat: -6.1751, lng: 106.8650, name: 'Jakarta', products: ['Batik', 'Kerajinan Rotan'] },
    { lat: -8.6095, lng: 115.1139, name: 'Bali', products: ['Ukiran Kayu', 'Keramik'] },
    { lat: -7.7958, lng: 110.3695, name: 'Yogyakarta', products: ['Batik', 'Perak'] },
    { lat: 2.9199, lng: 99.0722, name: 'Medan', products: ['Kopi Gayo', 'Ulos'] },
    { lat: -2.5223, lng: 140.7111, name: 'Papua', products: ['Noken', 'Kayu Cendana'] },
    { lat: -5.1443, lng: 119.4213, name: 'Makassar', products: ['Phinisi', 'Tapis'] },
    { lat: -3.6909, lng: 128.1855, name: 'Ambon', products: ['Tenun Ikat', 'Kerajinan Kulit'] },
    { lat: -0.7893, lng: 113.9213, name: 'Palangkaraya', products: ['Anyaman Rotan', 'Kain Sasirangan'] },
    { lat: -5.3464, lng: 105.2551, name: 'Lampung', products: ['Kopi Lampung', 'Keramik Lampung'] },
    { lat: -0.0235, lng: 109.3375, name: 'Pontianak', products: ['Batik Megamendung', 'Tenun Ikat'] },
  ];

  return (
    <div style={{ position: 'relative', height: '400px' }}>
      <MapContainer
        center={[-2.548926, 118.0148634]}
        zoom={5}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {locations.map((location, index) => (
          <Marker
            key={index}
            position={[location.lat, location.lng]}
            icon={customMapIcon}
            eventHandlers={{
              click: () => {
                setSelectedLocation(location);
              },
            }}
          >
            <Popup>
              <div>
                <h3 className="font-bold text-xl text-[#5c4933] mb-2">{location.name}</h3>
                <p className="text-gray-600 mb-4">Produk UMKM:</p>
                <ul className="list-disc pl-4">
                  {location.products.map((product, index) => (
                    <li key={index} className="text-[#886b4c]">
                      {product}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-end mt-4">
                  <button className="bg-[#886b4c] text-white px-4 py-2 rounded-full hover:bg-[#5c4933] transition">
                    Lihat Lebih Banyak
                  </button>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Card untuk menampilkan informasi lokasi yang dipilih */}
      {selectedLocation && (
        <div className="absolute top-4 left-4 bg-white rounded-lg shadow-lg p-4 z-20" style={{ width: '300px' }}>
          <h3 className="font-bold text-xl text-[#5c4933] mb-2">{selectedLocation.name}</h3>
          <p className="text-gray-600 mb-4">Produk UMKM:</p>
          <ul className="list-disc pl-4">
            {selectedLocation.products.map((product, index) => (
              <li key={index} className="text-[#886b4c]">
                {product}
              </li>
            ))}
          </ul>
          <div className="flex justify-end mt-4">
            <button className="bg-[#886b4c] text-white px-4 py-2 rounded-full hover:bg-[#5c4933] transition">
              Lihat Lebih Banyak
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MapInteractive;