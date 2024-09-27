import { AnimatePresence, motion } from 'framer-motion';
import { Award, ShoppingBag, Star, ThumbsUp } from 'lucide-react';
import React, { useState } from 'react';
import { FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton } from 'react-share';

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

// Testimonial Card Component
const TestimonialCard = ({ id, name, role, content, rating, image, icon: Icon, color, isActive, onReply, replies, isBlurred }) => {
  const [replyText, setReplyText] = useState('');

  const handleReply = () => {
    if (replyText) {
      onReply(id, replyText);
      setReplyText('');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: isActive ? 1 : 0.6, scale: isActive ? 1 : 0.8 }}
      transition={{ duration: 0.5 }}
      className={`bg-white rounded-xl shadow-2xl overflow-hidden transition-all duration-500 ${isActive ? 'z-10' : 'z-0'}`}
    >
      <div className="relative">
        {/* Conditionally apply blur to the Testimoni Terbaik image */}
        <img 
          src={image} 
          alt={name} 
          className={`w-full h-auto ${isBlurred ? 'filter blur-lg' : ''}`}  // Apply blur if isBlurred is true
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#f9f9f9] opacity-90"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon size={64} color={color} className="drop-shadow-lg" />
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-bold text-2xl mb-2 text-[#886b4c]">{name}</h3>
        <p className="text-[#5c4933] italic mb-4">{role}</p>
        <p className="text-[#4a4a4a] mb-4">{content}</p>
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={24} fill={i < rating ? color : "none"} stroke={i < rating ? color : "lightgray"} />
          ))}
        </div>
        <div className="flex space-x-2 mt-4">
          <FacebookShareButton url={window.location.href} quote={content}>
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <TwitterShareButton url={window.location.href} title={content}>
            <TwitterIcon size={32} round />
          </TwitterShareButton>
        </div>
        {/* Reply Section */}
        <div className="mt-6">
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#b49b6c]"
            placeholder="Reply to this testimonial"
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
          />
          <button
            onClick={handleReply}
            className="mt-2 px-4 py-2 bg-[#b49b6c] text-white rounded-md hover:bg-[#9f8758] focus:outline-none focus:ring-2 focus:ring-[#b49b6c] focus:ring-opacity-50"
          >
            Balas
          </button>
        </div>
        {/* Display Replies */}
        {replies.map((reply, i) => (
          <div key={i} className="ml-6 p-2 border-t border-gray-300 mt-4">
            <p>{reply.content}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

// Testimonials Page Component
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
    const testimonial = { ...newTestimonial, id: testimonials.length + 1, approved: false, replies: [] };
    setTestimonials([...testimonials, testimonial]);
  };

  const addReply = (testimonialId, replyContent) => {
    setTestimonials(testimonials.map(t => t.id === testimonialId ? { ...t, replies: [...(t.replies || []), { content: replyContent }] } : t));
  };

  return (
    <div className="container mx-auto py-10 px-4 pt-20">
      <br />
      <br />
      {/* Featured Testimonial */}
      <div className="bg-base-100 p-6 mb-10 rounded-xl shadow-lg">
        <center>
          <h3 className="text-3xl font-bold mb-4 text-[#b49b6c] ">Testimoni Terbaik Bulan Ini</h3>
        </center>
        <TestimonialCard {...topTestimonial} isActive={true} isBlurred={true} onReply={addReply} replies={topTestimonial.replies} /> {/* Apply isBlurred */}
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
          <TestimonialCard key={testimonial.id} {...testimonial} isActive={true} isBlurred={false} onReply={addReply} replies={testimonial.replies} /> 
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
    </div>
  );
};

export default TestimonialsPage;
