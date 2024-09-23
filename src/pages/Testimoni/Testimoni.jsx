import React, { useState, useEffect } from 'react';
import { Star, ShoppingBag, Award, ThumbsUp, UserPlus } from 'lucide-react';

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

const TestimonialCard = ({ name, role, content, rating, image, icon: Icon, color, isActive, onClick }) => (
  <div
    className={`relative cursor-pointer transition-all duration-500 ${isActive ? 'z-10' : 'z-0 blur-sm scale-75'}`}
    onClick={onClick}
  >
    <div className="bg-white bg-opacity-95 backdrop-filter backdrop-blur-lg rounded-lg shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105">
      <div className="relative h-48">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gray-800 bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon size={64} color={color} />
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-bold text-2xl mb-2 text-gray-800">{name}</h3>
        <p className="text-gray-600 mb-4">{role}</p>
        <p className="text-gray-700 mb-4">{content}</p>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={24}
              fill={i < rating ? color : "none"}
              stroke={i < rating ? color : "gray"}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);

const TestimonialForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [content, setContent] = useState('');
  const [rating, setRating] = useState(5);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, role, content, rating });
    setName('');
    setRole('');
    setContent('');
    setRating(5);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white bg-opacity-95 backdrop-filter backdrop-blur-lg pt-6 rounded-lg shadow-xl">
      <h3 className="text-2xl font-bold mb-4 text-gray-800">Tambahkan Testimoni Anda</h3>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Nama
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Nama Anda"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role">
          Peran
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="role"
          type="text"
          placeholder="Contoh: Pelanggan Setia"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
          Testimoni
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="content"
          placeholder="Bagikan pengalaman Anda"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          rows="4"
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Rating
        </label>
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
      <button
        className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-300"
        type="submit"
      >
        Kirim Testimoni
      </button>
    </form>
  );
};

const TestimonialSection = () => {
  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating && !showForm) {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isAnimating, showForm, testimonials.length]);

  const handleCardClick = (index) => {
    if (index !== activeIndex) {
      setIsAnimating(true);
      setActiveIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const handleNewTestimonial = (newTestimonial) => {
    const testimonial = {
      ...newTestimonial,
      id: testimonials.length + 1,
      image: "/api/placeholder/150/150",
      icon: UserPlus,
      color: `#${Math.floor(Math.random() * 16777215).toString(16)}`
    };
    setTestimonials([...testimonials, testimonial]);
    setShowForm(false);
    setActiveIndex(testimonials.length);
  };

  return (
    <div className="bg-gradient-to-br from-gray-100 via-gray-300 to-gray-500 min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-extrabold text-center mb-12 text-gray-800 drop-shadow-lg">
          Kisah Sukses Pelanggan Kami
        </h2>
        <div className="relative flex justify-center items-center min-h-[400px]">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              {...testimonial}
              isActive={index === activeIndex}
              onClick={() => handleCardClick(index)}
            />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleCardClick(index)}
              className={`h-3 w-3 rounded-full mx-2 transition-all duration-300 ${index === activeIndex ? 'bg-gray-800 scale-125' : 'bg-gray-400 hover:bg-gray-600'
                }`}
            />
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-gray-800 text-white font-bold py-2 px-6 rounded-full hover:bg-gray-900 transition-colors duration-300 shadow-lg"
          >
            {showForm ? 'Tutup Form' : 'Tambah Testimoni'}
          </button>
        </div>
        {showForm && (
          <div className="mt-8">
            <TestimonialForm onSubmit={handleNewTestimonial} />
          </div>
        )}
      </div>
    </div>
  );
};

export default TestimonialSection;