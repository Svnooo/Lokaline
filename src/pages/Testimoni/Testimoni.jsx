import { motion } from 'framer-motion';
import { Award, ShoppingBag, Star, ThumbsUp } from 'lucide-react';
import React, { useState } from 'react';

const initialTestimonials = [
  {
    id: 1,
    name: "Andi Pratama",
    role: "Pelanggan Setia",
    content: "Produk UMKM ini luar biasa! Kualitasnya top dan pelayanannya ramah. Saya sudah menjadi pelanggan tetap selama 2 tahun.",
    rating: 5,
    image: "/assets/Bali.png",
    icon: ShoppingBag,
    color: "#FFD700",
    approved: true,
    replies: []
  },
  {
    id: 2,
    name: "Siti Rahma",
    role: "Pembeli Baru",
    content: "Sangat puas dengan pembelian pertama saya. Pengiriman cepat dan produknya sesuai deskripsi. Pasti akan belanja lagi!",
    rating: 4,
    image: "/assets/Ulos.png",
    icon: ThumbsUp,
    color: "#4CAF50",
    approved: true,
    replies: []
  },
  {
    id: 3,
    name: "Budi Santoso",
    role: "Mitra Bisnis",
    content: "Sebagai mitra bisnis, saya sangat terkesan dengan profesionalisme tim UMKM ini. Kerjasama yang sangat menyenangkan!",
    rating: 5,
    image: "/assets/Syal Kalimantan.png",
    icon: Award,
    color: "#2196F3",
    approved: true,
    replies: []
  }
];

// Modal Component
const AddTestimonialModal = ({ isOpen, onClose, onSubmit }) => {
  const [newTestimonial, setNewTestimonial] = useState({
    name: '',
    role: '',
    content: '',
    rating: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTestimonial({
      ...newTestimonial,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if (newTestimonial.name && newTestimonial.content && newTestimonial.role) {
      onSubmit(newTestimonial);
      onClose();
      setNewTestimonial({ name: '', role: '', content: '', rating: 0 }); // Reset form
    } else {
      alert('Mohon isi semua field!');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Tambahkan Testimoni Baru</h2>
        <input
          type="text"
          name="name"
          placeholder="Nama"
          value={newTestimonial.name}
          onChange={handleChange}
          className="w-full mb-3 p-2 border border-gray-300 rounded-md"
        />
        <input
          type="text"
          name="role"
          placeholder="Role (contoh: Pelanggan Setia)"
          value={newTestimonial.role}
          onChange={handleChange}
          className="w-full mb-3 p-2 border border-gray-300 rounded-md"
        />
        <textarea
          name="content"
          placeholder="Testimoni"
          value={newTestimonial.content}
          onChange={handleChange}
          className="w-full mb-3 p-2 border border-gray-300 rounded-md"
        />
        <input
          type="number"
          name="rating"
          placeholder="Rating (1-5)"
          value={newTestimonial.rating}
          onChange={handleChange}
          className="w-full mb-3 p-2 border border-gray-300 rounded-md"
          min="1"
          max="5"
        />
        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-500 text-white rounded-md"
          >
            Batal
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-[#b49b6c] text-white rounded-md"
          >
            Tambahkan
          </button>
        </div>
      </div>
    </div>
  );
};

const TestimonialsPage = () => {
  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState('All');
  const [sortOrder, setSortOrder] = useState('Newest');
  const itemsPerPage = 3;

  const filteredTestimonials = testimonials
    .filter(t => t.approved)
    .filter((testimonial) => filter === 'All' || testimonial.role === filter)
    .sort((a, b) => {
      if (sortOrder === 'Highest Rating') return b.rating - a.rating;
      return b.id - a.id;
    });

  const paginatedTestimonials = filteredTestimonials.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const topTestimonial = testimonials.reduce((top, current) => (current.rating > top.rating ? current : top), testimonials[0]);

  const handleNewTestimonial = (newTestimonial) => {
    const testimonial = { 
      ...newTestimonial, 
      id: testimonials.length + 1, 
      approved: true,  // langsung disetujui untuk contoh
      icon: ThumbsUp,  // Ikon default
      color: "#FFD700", 
      replies: [] 
    };
    setTestimonials([...testimonials, testimonial]);
  };

  const addReply = (testimonialId, replyContent) => {
    setTestimonials(testimonials.map(t => t.id === testimonialId ? { ...t, replies: [...(t.replies || []), { content: replyContent }] } : t));
  };

  return (
    <div className="container mx-auto py-10 px-4 pt-20">
      <br />
      <br />
      <div className="bg-base-100 p-6 mb-10 rounded-xl shadow-lg">
        <center>
          <h3 className="text-3xl font-bold mb-4 text-[#b49b6c] ">Testimoni Terbaik Bulan Ini</h3>
        </center>
        {/* Featured Testimonial */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-2xl overflow-hidden transition-all duration-500"
        >
          <div className="relative">
            <img 
              src={topTestimonial.image} 
              alt={topTestimonial.name} 
              className={`w-full h-auto filter blur-lg`}  // Apply blur to featured testimonial
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#f9f9f9] opacity-90"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <topTestimonial.icon size={64} color={topTestimonial.color} className="drop-shadow-lg" />
            </div>
          </div>
          <div className="p-6">
            <h3 className="font-bold text-2xl mb-2 text-[#886b4c]">{topTestimonial.name}</h3>
            <p className="text-[#5c4933] italic mb-4">{topTestimonial.role}</p>
            <p className="text-[#4a4a4a] mb-4">{topTestimonial.content}</p>
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} fill={i < topTestimonial.rating ? topTestimonial.color : "none"} stroke={i < topTestimonial.rating ? topTestimonial.color : "lightgray"} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Filters and Sorting */}
      <div className="flex justify-between items-center mb-6">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="p-2 border border-gray-300 rounded-md"
        >
          <option value="All">Semua Role</option>
          <option value="Pelanggan Setia">Pelanggan Setia</option>
          <option value="Pembeli Baru">Pembeli Baru</option>
          <option value="Mitra Bisnis">Mitra Bisnis</option>
        </select>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="p-2 border border-gray-300 rounded-md"
        >
          <option value="Newest">Terbaru</option>
          <option value="Highest Rating">Rating Tertinggi</option>
        </select>
      </div>

      {/* Testimonials List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {paginatedTestimonials.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500"
          >
            <div className="relative">
              <img 
                src={testimonial.image} 
                alt={testimonial.name} 
                className="w-full h-auto" 
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <testimonial.icon size={64} color={testimonial.color} className="drop-shadow-lg" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2">{testimonial.name}</h3>
              <p className="text-gray-600 italic mb-4">{testimonial.role}</p>
              <p className="text-gray-800 mb-4">{testimonial.content}</p>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={24} fill={i < testimonial.rating ? testimonial.color : "none"} stroke={i < testimonial.rating ? testimonial.color : "lightgray"} />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Add Testimonial Button */}
      <div className="flex justify-center mt-8">
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-[#b49b6c] text-white rounded-md hover:bg-[#9f8758] focus:outline-none focus:ring-2 focus:ring-[#b49b6c] focus:ring-opacity-50"
        >
          Tambahkan Testimoni
        </button>
      </div>

      {/* Modal for adding new testimonial */}
      <AddTestimonialModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleNewTestimonial}
      />
    </div>
  );
};

export default TestimonialsPage;
