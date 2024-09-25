import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[url('/public/bg1.png')] bg-center opacity-5" style={{ backgroundSize: '100% 100%' }}></div>
      
      <div className="max-w-7xl mx-auto relative pt-10">
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out">
          <div className="md:flex">
            <div className="md:w-1/2 p-8">
              <h3 className="text-2xl font-bold text-[#886b4c] mb-4">Kirim Pesan</h3>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-[#5c4933] mb-2">Nama</label>
                  <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-[#886b4c] rounded-md focus:outline-none focus:ring-2 focus:ring-[#886b4c]" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-[#5c4933] mb-2">Email</label>
                  <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-[#886b4c] rounded-md focus:outline-none focus:ring-2 focus:ring-[#886b4c]" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-[#5c4933] mb-2">Pesan</label>
                  <textarea id="message" name="message" rows="4" className="w-full px-3 py-2 border border-[#886b4c] rounded-md focus:outline-none focus:ring-2 focus:ring-[#886b4c]" required></textarea>
                </div>
                <button type="submit" className="bg-[#b49b6c] text-white px-6 py-3 rounded-full font-bold hover:bg-[#9f8758] transition-transform transform hover:scale-105">
                  Kirim Pesan
                </button>
              </form>
            </div>
            <div className="md:w-1/2 bg-[#b49b6c] p-8 flex flex-col"> {/* Teak background color #b49b6c */}
              <h3 className="text-2xl font-bold text-white mb-4">Informasi Kontak</h3>
              <div className="mb-4">
                <p className="flex items-center text-white">
                  <MapPin className="mr-2" size={20} />
                  Jl. Malioboro No. 52-58, Suryatmajan, Kec. Danurejan, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55213
                </p>
              </div>
              <div className="mb-4">
                <p className="flex items-center text-white">
                  <Phone className="mr-2" size={20} />
                  +62 274 123456
                </p>
              </div>
              <div className="mb-4">
                <p className="flex items-center text-white">
                  <Mail className="mr-2" size={20} />
                  info@localine-jogja.id
                </p>
              </div>
              <div className="mb-6">
                <h4 className="text-xl font-bold text-white mb-2">Ikuti Kami</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-white hover:text-[#f0e6dc]">
                    <Facebook size={24} />
                  </a>
                  <a href="#" className="text-white hover:text-[#f0e6dc]">
                    <Twitter size={24} />
                  </a>
                  <a href="#" className="text-white hover:text-[#f0e6dc]">
                    <Instagram size={24} />
                  </a>
                  <a href="#" className="text-white hover:text-[#f0e6dc]">
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
              <div className="flex-grow">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.1685047304892!2d110.36323597507241!3d-7.7925382789712615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5825379d8a41%3A0xaaa7b4973f3e3b6d!2sJl.%20Malioboro%2C%20Sosromenduran%2C%20Gedong%20Tengen%2C%20Kota%20Yogyakarta%2C%20Daerah%20Istimewa%20Yogyakarta!5e0!3m2!1sid!2sid!4v1695657554375!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: '8px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;