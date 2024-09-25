import React, { useState, useEffect } from 'react';
import { Star, ShoppingBag, Award, ThumbsUp, UserPlus, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const initialTestimonials = [
  {
    id: 1,
    name: "Andi Pratama",
    role: "Pelanggan Setia",
    content: "Produk UMKM ini luar biasa! Kualitasnya top dan pelayanannya ramah. Saya sudah menjadi pelanggan tetap selama 2 tahun.",
    rating: 5,
    image: "/api/placeholder/150/150",
    icon: ShoppingBag,
    color: "#FFD700"
  },
  {
    id: 2,
    name: "Siti Rahma",
    role: "Pembeli Baru",
    content: "Sangat puas dengan pembelian pertama saya. Pengiriman cepat dan produknya sesuai deskripsi. Pasti akan belanja lagi!",
    rating: 4,
    image: "/api/placeholder/150/150",
    icon: ThumbsUp,
    color: "#4CAF50"
  },
  {
    id: 3,
    name: "Budi Santoso",
    role: "Mitra Bisnis",
    content: "Sebagai mitra bisnis, saya sangat terkesan dengan profesionalisme tim UMKM ini. Kerjasama yang sangat menyenangkan!",
    rating: 5,
    image: "/api/placeholder/150/150",
    icon: Award,
    color: "#2196F3"
  }
];

const TestimonialCard = ({ name, role, content, rating, image, icon: Icon, color, isActive }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: isActive ? 1 : 0.6, scale: isActive ? 1 : 0.8 }}
    transition={{ duration: 0.5 }}
    className={`bg-white rounded-xl shadow-2xl overflow-hidden transition-all duration-500 ${isActive ? 'z-10' : 'z-0'}`}
  >
    <div className="relative h-48">
      <img src={image} alt={name} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#f9f9f9] opacity-90"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <Icon size={64} color={color} className="drop-shadow-lg" />
      </div>
    </div>
    <div className="p-6">
      <h3 className="font-bold text-2xl mb-2 text-[#886b4c]">{name}</h3>
      <p className="text-[#5c4933] italic mb-4">{role}</p>
      <p className="text-[#4a4a4a] mb-4">{content}</p>
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={24}
            fill={i < rating ? color : "none"}
            stroke={i < rating ? color : "lightgray"}
          />
        ))}
      </div>
    </div>
  </motion.div>
);

const TestimonialForm = ({ onSubmit, onClose }) => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [content, setContent] = useState('');
  const [rating, setRating] = useState(5);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, role, content, rating });
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center pt-20 p-4 z-50" // Changed from items-center to items-start and added pt-20
    >
      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full">
        <h3 className="text-3xl font-bold mb-6 text-[#886b4c]">Tambahkan Testimoni Anda</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-[#5c4933] text-sm font-bold mb-2" htmlFor="name">Nama</label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#b49b6c]"
              id="name"
              type="text"
              placeholder="Nama Anda"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-[#5c4933] text-sm font-bold mb-2" htmlFor="role">Peran</label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#b49b6c]"
              id="role"
              type="text"
              placeholder="Contoh: Pelanggan Setia"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-[#5c4933] text-sm font-bold mb-2" htmlFor="content">Testimoni</label>
            <textarea
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#b49b6c]"
              id="content"
              placeholder="Bagikan pengalaman Anda"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              rows="4"
            ></textarea>
          </div>
          <div>
            <label className="block text-[#5c4933] text-sm font-bold mb-2">Rating</label>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={24}
                  className="cursor-pointer"
                  fill={star <= rating ? "#FFD700" : "none"}
                  stroke={star <= rating ? "#FFD700" : "gray"}
                  onClick={() => setRating(star)}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-end space-x-4">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
          >
            Batal
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-[#b49b6c] text-white rounded-md hover:bg-[#9f8758] focus:outline-none focus:ring-2 focus:ring-[#b49b6c] focus:ring-opacity-50"
          >
            Kirim Testimoni
          </button>
        </div>
      </form>
    </motion.div>
  );
};

const TestimonialSection = () => {
  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showForm, setShowForm] = useState(false);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleNewTestimonial = (newTestimonial) => {
    const testimonial = {
      ...newTestimonial,
      id: testimonials.length + 1,
      image: "/api/placeholder/150/150",
      icon: UserPlus,
      color: `#${Math.floor(Math.random() * 16777215).toString(16)}`
    };
    setTestimonials([...testimonials, testimonial]);
    setActiveIndex(testimonials.length);
  };

  return (
    <div className="relative bg-gradient-to-br from-[#f0e6dc] via-[#ffffff] to-[#ffffff] min-h-screen flex items-center justify-center py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/public/bg1.png')] bg-cover bg-center opacity-10"></div>
      <div className="max-w-6xl mx-auto relative z-10 px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold text-center mb-16 text-[#886b4c] drop-shadow-lg"
        >
          Kisah Sukses Pelanggan Kami
        </motion.h2>
        <div className="relative flex justify-center items-center min-h-[400px]">
          <button
            onClick={prevTestimonial}
            className="absolute left-0 z-20 bg-white bg-opacity-50 p-2 rounded-full shadow-lg hover:bg-opacity-75 transition-all duration-300"
          >
            <ChevronLeft size={24} color="#886b4c" />
          </button>
          <div className="w-full max-w-xl">
            <AnimatePresence mode="wait">
              <TestimonialCard key={activeIndex} {...testimonials[activeIndex]} isActive={true} />
            </AnimatePresence>
          </div>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 z-20 bg-white bg-opacity-50 p-2 rounded-full shadow-lg hover:bg-opacity-75 transition-all duration-300"
          >
            <ChevronRight size={24} color="#886b4c" />
          </button>
        </div>
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-3 w-3 rounded-full mx-2 transition-all duration-300 ${
                index === activeIndex ? 'bg-[#886b4c] scale-125' : 'bg-gray-400 hover:bg-gray-600'
              }`}
            />
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-12 flex justify-center"
        >
          <button
            onClick={() => setShowForm(true)}
            className="bg-[#b49b6c] text-white font-bold py-3 px-8 rounded-full hover:bg-[#9f8758] transition-all duration-300 shadow-lg transform hover:scale-105"
          >
            Tambah Testimoni
          </button>
        </motion.div>
        <AnimatePresence>
          {showForm && (
            <TestimonialForm onSubmit={handleNewTestimonial} onClose={() => setShowForm(false)} />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TestimonialSection;