import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaThumbsUp, FaThumbsDown, FaReply, FaComment } from "react-icons/fa";

const ForumDiskusi = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [newDiscussion, setNewDiscussion] = useState({
    title: '',
    content: '',
    category: 'General',
  });

  const testimonials = [
    {
      name: "Rina Wati",
      role: "Pemilik Batik Canting Emas",
      content:
        "Dashboard UMKM ini sangat membantu saya dalam mengelola penjualan batik online. Sangat mudah digunakan!",
    },
    {
      name: "Budi Santoso",
      role: "Pengrajin Kayu Jepara",
      content:
        "Berkat fitur analisis pelanggan, saya bisa memahami tren pasar dan meningkatkan penjualan produk saya.",
    },
    {
      name: "Siti Aminah",
      role: "Pemilik Warung Sambel Mercon",
      content:
        "Laporan kinerja yang detail membantu saya mengambil keputusan bisnis dengan lebih percaya diri.",
    },
  ];

  const [discussions, setDiscussions] = useState([
    {
      id: 1,
      title: "Bagaimana cara menggunakan fitur X?",
      content: "Saya masih bingung cara menggunakan fitur X, ada yang bisa membantu?",
      category: "General",
      likes: 5,
      dislikes: 1,
      comments: [
        {
          id: 1,
          user: "Rian",
          text: "Anda bisa melihat panduan di halaman dokumentasi.",
          likes: 10,
          dislikes: 2,
          replies: [],
        },
        {
          id: 2,
          user: "Dinda",
          text: "Coba lihat di FAQ, mungkin ada jawabannya.",
          likes: 5,
          dislikes: 1,
          replies: [],
        }
      ],
    },
    {
      id: 2,
      title: "Pengalaman menggunakan fitur Y",
      content: "Saya sangat suka fitur Y, karena memudahkan pekerjaan saya!",
      category: "Tips",
      likes: 8,
      dislikes: 0,
      comments: [
        {
          id: 3,
          user: "Tina",
          text: "Setuju! Fitur ini sangat membantu.",
          likes: 8,
          dislikes: 0,
          replies: [],
        }
      ],
    },
  ]);

  const [reply, setReply] = useState({ discussionId: null, commentId: null, text: '' });
  const [filterCategory, setFilterCategory] = useState("All");
  const [newComments, setNewComments] = useState({});

  const handleNext = () => {
    setCurrentTestimonialIndex(
      (prevIndex) => (prevIndex + 1) % testimonials.length
    );
  };

  const handlePrev = () => {
    setCurrentTestimonialIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newDiscussion.title && newDiscussion.content) {
      const newDiscussionObj = {
        id: discussions.length + 1,
        title: newDiscussion.title,
        content: newDiscussion.content,
        category: newDiscussion.category,
        likes: 0,
        dislikes: 0,
        comments: [],
      };

      setDiscussions([...discussions, newDiscussionObj]);
      setNewDiscussion({ title: '', content: '', category: 'General' });
    }
  };

  const handleLike = (discussionId, commentId, type) => {
    const updatedDiscussions = discussions.map((discussion) => {
      if (discussion.id === discussionId) {
        if (commentId === null) {
          // Like/dislike for the discussion itself
          return {
            ...discussion,
            [type]: discussion[type] + 1
          };
        } else {
          // Like/dislike for a comment
          const updatedComments = discussion.comments.map((comment) => {
            if (comment.id === commentId) {
              return { ...comment, [type]: comment[type] + 1 };
            }
            return comment;
          });
          return { ...discussion, comments: updatedComments };
        }
      }
      return discussion;
    });
    setDiscussions(updatedDiscussions);
  };

  const handleReplySubmit = (e) => {
    e.preventDefault();
    if (reply.text) {
      const updatedDiscussions = discussions.map((discussion) => {
        if (discussion.id === reply.discussionId) {
          const updatedComments = discussion.comments.map((comment) => {
            if (comment.id === reply.commentId) {
              return { ...comment, replies: [...comment.replies, { user: "Anda", text: reply.text }] };
            }
            return comment;
          });
          return { ...discussion, comments: updatedComments };
        }
        return discussion;
      });
      setDiscussions(updatedDiscussions);
      setReply({ discussionId: null, commentId: null, text: '' });
    }
  };

  const handleAddComment = (discussionId) => {
    const commentText = newComments[discussionId];
    if (commentText) {
      const updatedDiscussions = discussions.map((discussion) => {
        if (discussion.id === discussionId) {
          return {
            ...discussion,
            comments: [
              ...discussion.comments,
              {
                id: Date.now(), // Generate a unique ID
                user: "Anda",
                text: commentText,
                likes: 0,
                dislikes: 0,
                replies: [],
              },
            ],
          };
        }
        return discussion;
      });
      setDiscussions(updatedDiscussions);
      setNewComments({ ...newComments, [discussionId]: '' });
    }
  };

  const filteredDiscussions = discussions.filter(discussion => 
    filterCategory === "All" || discussion.category === filterCategory
  );

  const TestimonialCard = ({ name, role, content }) => (
    <motion.div
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-gray-600 dark:text-gray-300 mb-4">"{content}"</p>
      <div className="font-semibold text-gray-800 dark:text-white">{name}</div>
      <div className="text-sm text-gray-500 dark:text-gray-400">{role}</div>
    </motion.div>
  );

  return (
    <section className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-12 pt-20">
        <br />
        <br />
        <h1 className="text-5xl font-bold text-center text-gray-900 mb-12">
          Temukan dan Bertumbuh Bersama Pelaku UMKM seperti Anda
        </h1>
        <h2 className="text-3xl font-semibold text-center text-gray-700 mb-8">
          Terlibatlah dalam forum resmi pelaku UMKM.
        </h2>

        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {[
            { icon: "assets/Tentang Bisnis.png", title: "Tanya tentang bisnis Anda", bgColor: "bg-orange-100" },
            { icon: "assets/Saran.png", title: "Saran untuk ruang usaha Anda", bgColor: "bg-yellow-100" },
            { icon: "assets/Dukungan.png", title: "Dukungan untuk pemesanan", bgColor: "bg-green-100" },
            { icon: "assets/Bantuin.png", title: "Bantuan untuk bisnis Anda", bgColor: "bg-blue-100" },
            { icon: "assets/Lingkaran UMKM.png", title: "Lingkaran UMKM", bgColor: "bg-purple-100" },
          ].map((item, index) => (
            <div
              key={index}
              className={`${item.bgColor} p-6 rounded-xl shadow-md w-48 text-center transition-transform duration-300 hover:scale-105`}
            >
              <img src={item.icon} alt={item.title} className="w-16 h-16 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-800">{item.title}</h3>
            </div>
          ))}
        </div>

        <section className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
            Percakapan Unggulan
          </h2>
          <div className="relative">
            <TestimonialCard
              name={testimonials[currentTestimonialIndex].name}
              role={testimonials[currentTestimonialIndex].role}
              content={testimonials[currentTestimonialIndex].content}
            />
            <div className="absolute top-1/2 -left-4 transform -translate-y-1/2">
              <button onClick={handlePrev} className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100">
                <FaArrowLeft className="text-gray-600" />
              </button>
            </div>
            <div className="absolute top-1/2 -right-4 transform -translate-y-1/2">
              <button onClick={handleNext} className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100">
                <FaArrowRight className="text-gray-600" />
              </button>
            </div>
          </div>
        </section>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">Forum Diskusi</h2>

          <div className="mb-8">
            <label className="text-lg font-medium text-gray-800 mr-4">Filter Kategori:</label>
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="All">Semua</option>
              <option value="General">Umum</option>
              <option value="Tips">Tips</option>
            </select>
          </div>

          <section className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Topik Diskusi</h3>
            <div className="space-y-8">
              {filteredDiscussions.map((discussion) => (
                <div key={discussion.id} className="bg-gray-50 rounded-lg shadow-md p-6">
                  <h4 className="font-bold text-2xl text-gray-900 mb-3">{discussion.title}</h4>
                  <p className="text-gray-700 mb-4">{discussion.content}</p>
                  <p className="text-sm text-gray-600 mb-4">Kategori: {discussion.category}</p>
                  <div className="flex items-center space-x-4 mb-4">
                    <button
                      className="text-blue-500 hover:text-blue-700 flex items-center"
                      onClick={() => handleLike(discussion.id, null, 'likes')}
                    >
                      <FaThumbsUp className="mr-1" /> {discussion.likes}
                    </button>
                    <button
                      className="text-red-500 hover:text-red-700 flex items-center"
                      onClick={() => handleLike(discussion.id, null, 'dislikes')}
                    >
                      <FaThumbsDown className="mr-1" /> {discussion.dislikes}
                    </button>
                  </div>
                  <h5 className="font-semibold text-lg text-gray-800 mb-3">Komentar:</h5>
                  <div className="space-y-4">
                    {discussion.comments.length > 0 ? (
                      discussion.comments.map((comment) => (
                        <div key={comment.id} className="bg-white p-4 rounded-lg shadow">
                          <div className="flex justify-between items-center mb-2">
                            <p className="font-semibold text-gray-900">{comment.user}</p>
                            <div className="flex items-center space-x-4">
                              <button
                                className="text-blue-500 hover:text-blue-700 flex items-center"
                                onClick={() => handleLike(discussion.id, comment.id, 'likes')}
                              >
                                <FaThumbsUp className="mr-1" /> {comment.likes}
                              </button>
                              <button
                                className="text-red-500 hover:text-red-700 flex items-center"
                                onClick={() => handleLike(discussion.id, comment.id, 'dislikes')}
                              >
                                <FaThumbsDown className="mr-1" /> {comment.dislikes}
                              </button>
                              <button
                                className="text-green-500 hover:text-green-700 flex items-center"
                                onClick={() => setReply({ discussionId: discussion.id, commentId: comment.id, text: '' })}
                              >
                                <FaReply className="mr-1" /> Balas
                              </button>
                            </div>
                          </div>
                          <p className="text-gray-700">{comment.text}</p>
                          {comment.replies.length > 0 && (
                            <div className="mt-4 space-y-2 pl-6 border-l-2 border-blue-300">
                              {comment.replies.map((reply, i) => (
                                <p key={i} className="text-gray-600">
                                  <span className="font-semibold">{reply.user}:</span> {reply.text}
                                </p>
                              ))}
                            </div>
                          )}
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-600">Belum ada komentar.</p>
                    )}
                  </div>
                  <div className="mt-4">
                    <textarea
                      className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Tambahkan komentar..."
                      rows="3"
                      value={newComments[discussion.id] || ''}
                      onChange={(e) => setNewComments({ ...newComments, [discussion.id]: e.target.value })}
                    ></textarea>
                    <button
                      className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                      onClick={() => handleAddComment(discussion.id)}
                    >
                      Kirim Komentar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {reply.discussionId && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Balas Komentar</h3>
                <form onSubmit={handleReplySubmit}>
                  <textarea
                    value={reply.text}
                    onChange={(e) => setReply({ ...reply, text: e.target.value })}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="4"
                    placeholder="Tulis balasan..."
                    required
                  />
                  <div className="mt-4 flex justify-end space-x-4">
                    <button
                      type="button"
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
                      onClick={() => setReply({ discussionId: null, commentId: null, text: '' })}
                    >
                      Batal
                    </button>
                    <button
                      type="submit"
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                      Balas
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          <section className="mt-12">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Mulai Diskusi Baru</h3>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-6">
                <label htmlFor="title" className="block text-lg font-medium text-gray-800 mb-2">
                  Judul Diskusi
                </label>
                <input
                  type="text"
                  id="title"
                  value={newDiscussion.title}
                  onChange={(e) => setNewDiscussion({ ...newDiscussion, title: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Masukkan judul diskusi"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="category" className="block text-lg font-medium text-gray-800 mb-2">
                  Kategori
                </label>
                <select
                  id="category"
                  value={newDiscussion.category}
                  onChange={(e) => setNewDiscussion({ ...newDiscussion, category: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="General">Umum</option>
                  <option value="Tips">Tips</option>
                </select>
              </div>
              <div className="mb-6">
                <label htmlFor="content" className="block text-lg font-medium text-gray-800 mb-2">
                  Isi Diskusi
                </label>
                <textarea
                  id="content"
                  value={newDiscussion.content}
                  onChange={(e) => setNewDiscussion({ ...newDiscussion, content: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="5"
                  placeholder="Tuliskan isi diskusi"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-3 rounded-lg shadow-lg hover:from-blue-400 hover:to-blue-600 transition duration-300 transform hover:scale-105"
              >
                Buat Diskusi
              </button>
            </form>
          </section>
        </div>
      </div>
    </section>
  );
};

export default ForumDiskusi;