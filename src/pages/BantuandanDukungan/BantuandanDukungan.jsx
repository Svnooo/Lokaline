import React, { useState } from 'react';
import { FaRegCommentDots, FaHeadset, FaUsers, FaArrowUp } from 'react-icons/fa';

const HelpAndSupport = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const questions = [
    {
      question: "Bagaimana cara menghubungi customer service?",
      answer: "Anda dapat menghubungi kami melalui email di support@example.com atau melalui telepon di 123-456-7890.",
    },
    {
      question: "Apakah ada panduan penggunaan?",
      answer: "Ya, Anda dapat menemukan panduan penggunaan di bagian Dokumentasi di website kami.",
    },
    {
      question: "Bagaimana cara mengatasi masalah teknis?",
      answer: "Jika Anda mengalami masalah teknis, silakan hubungi tim dukungan kami untuk mendapatkan bantuan lebih lanjut.",
    },
  ];

  const testimonials = [
    {
      name: "Budi Santoso",
      testimonial: "Pelayanan yang sangat cepat dan membantu! Saya mendapatkan jawaban atas pertanyaan saya dalam waktu singkat.",
    },
    {
      name: "Siti Nurhaliza",
      testimonial: "Sangat puas dengan dukungan yang diberikan. Tim sangat responsif dan profesional.",
    },
  ];

  return (
    <div className="relative min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/public/bg1.png')] bg-center opacity-10" style={{ backgroundSize: '100% 100%' }}></div>
      <br />
      <br />
      <div className="relative max-w-7xl mx-auto bg-white bg-opacity-90 rounded-lg shadow-xl p-8 border-2 border-[#b49b6c]">
        <h1 className="text-5xl font-bold text-center text-[#b49b6c] mb-8 flex items-center justify-center">
          <FaHeadset className="mr-2" size={40} /> Bantuan dan Dukungan
        </h1>
        <p className="text-lg text-gray-700 text-center mb-10">
          Kami siap membantu Anda! Jika Anda memiliki pertanyaan atau membutuhkan dukungan, silakan lihat informasi di bawah ini.
        </p>

        {/* Fitur Pencarian */}
        <div className="mb-10">
          <input
            type="text"
            placeholder="Cari pertanyaan..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-3 border border-[#b49b6c] rounded-lg focus:outline-none focus:border-[#a68e55]"
          />
        </div>

        {/* Tombol Bantuan Langsung */}
        <div className="flex justify-center mb-12">
          <button className="bg-[#b49b6c] hover:bg-[#a68e55] text-white px-8 py-3 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
            Bantuan Langsung
          </button>
        </div>

        {/* Chatbot */}
        <section className="mb-12 border p-6 rounded-lg shadow-lg bg-gray-50">
          <h2 className="text-3xl font-semibold text-[#b49b6c] mb-4 flex items-center">
            <FaRegCommentDots className="mr-2" size={30} /> Chatbot Bantuan
          </h2>
          <p className="text-gray-600 mb-4">
            Mulai chat dengan asisten kami untuk mendapatkan jawaban cepat!
          </p>
          <button className="bg-[#b49b6c] hover:bg-[#a68e55] text-white px-6 py-2 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
            Buka Chatbot
          </button>
        </section>

        {/* Pertanyaan Umum */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-[#b49b6c] mb-6 flex items-center">
            <FaUsers className="mr-2" size={30} /> Pertanyaan Umum
          </h2>
          <div className="space-y-6">
            {questions.filter(item => item.question.toLowerCase().includes(searchQuery.toLowerCase())).map((item, index) => (
              <div key={index} className="p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-white cursor-pointer">
                <h3 className="font-bold text-xl text-gray-800 mb-2">{index + 1}. {item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonial Pengguna */}
      
<section className="mb-12">
  <h2 className="text-3xl font-semibold text-[#b49b6c] mb-6">Testimonial Pengguna</h2>
  <div className="space-y-6">
    {testimonials.map((item, index) => (
      <div
        key={index}
        className="p-6 bg-gradient-to-r from-[#f7f0e9] to-[#e7d8c2] border-l-4 border-[#b49b6c] rounded-lg shadow-md transition-transform transform hover:scale-105"
      >
        <p className="font-semibold text-xl text-gray-800">"{item.testimonial}"</p>
        <p className="text-gray-600 text-right mt-4">- {item.name}</p>
      </div>
    ))}
  </div>
</section>


        {/* Kontak Kami */}
        <section>
          <h2 className="text-3xl font-semibold text-[#b49b6c] mb-6">Kontak Kami</h2>
          <p className="text-gray-600 mb-4">Jika Anda membutuhkan bantuan lebih lanjut, jangan ragu untuk menghubungi kami:</p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Email: <a href="mailto:support@example.com" className="text-blue-600 underline">info@localine-jogja.id</a></li>
            <li>Telepon: <span className="text-gray-800">+62 274 123456</span></li>
          </ul>
          <p className="text-gray-600">Kami akan berusaha menjawab secepat mungkin. Terima kasih atas kesabaran Anda!</p>
        </section>
      </div>
    </div>
  );
};

export default HelpAndSupport;
