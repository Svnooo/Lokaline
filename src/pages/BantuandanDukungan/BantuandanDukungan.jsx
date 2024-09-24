import React from 'react';

const BatikBackground = () => (
  <div className="fixed inset-0 z-0 opacity-10">
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

const HelpAndSupport = () => {
  return (
    <div className="relative min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <BatikBackground />
      <br />
      <br />
      <div className="relative max-w-7xl mx-auto bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-lg shadow-xl p-8 border-2 border-yellow-500">
        <h1 className="text-5xl font-bold text-center text-gray-900 mb-8">Bantuan dan Dukungan</h1>
        <p className="text-lg text-gray-700 text-center mb-10">
          Kami siap membantu Anda! Jika Anda memiliki pertanyaan atau membutuhkan dukungan, silakan lihat informasi di bawah ini.
        </p>

        {/* Tombol Bantuan Langsung */}
        <div className="flex justify-center mb-12">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
            Bantuan Langsung
          </button>
        </div>

        {/* Chatbot */}
        <section className="mb-12 border p-6 rounded-lg shadow-lg bg-gray-50">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Chatbot Bantuan</h2>
          <p className="text-gray-600 mb-4">
            Mulai chat dengan asisten kami untuk mendapatkan jawaban cepat!
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
            Buka Chatbot
          </button>
        </section>

        {/* Pertanyaan Umum */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Pertanyaan Umum</h2>
          <div className="space-y-6">
            {[{
              question: "Bagaimana cara menghubungi customer service?",
              answer: "Anda dapat menghubungi kami melalui email di support@example.com atau melalui telepon di 123-456-7890.",
            }, {
              question: "Apakah ada panduan penggunaan?",
              answer: "Ya, Anda dapat menemukan panduan penggunaan di bagian Dokumentasi di website kami.",
            }, {
              question: "Bagaimana cara mengatasi masalah teknis?",
              answer: "Jika Anda mengalami masalah teknis, silakan hubungi tim dukungan kami untuk mendapatkan bantuan lebih lanjut.",
            }].map((item, index) => (
              <div key={index} className="p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
                <h3 className="font-bold text-xl text-gray-800 mb-2">{index + 1}. {item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonial Pengguna */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Testimonial Pengguna</h2>
          <div className="space-y-6">
            {[{
              name: "Budi Santoso",
              testimonial: "Pelayanan yang sangat cepat dan membantu! Saya mendapatkan jawaban atas pertanyaan saya dalam waktu singkat.",
            }, {
              name: "Siti Nurhaliza",
              testimonial: "Sangat puas dengan dukungan yang diberikan. Tim sangat responsif dan profesional.",
            }].map((item, index) => (
              <div key={index} className="p-6 bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-500 rounded-lg shadow-md">
                <p className="font-semibold text-xl text-gray-800">"{item.testimonial}"</p>
                <p className="text-gray-600 text-right mt-4">- {item.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Kontak Kami */}
        <section>
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Kontak Kami</h2>
          <p className="text-gray-600 mb-4">Jika Anda membutuhkan bantuan lebih lanjut, jangan ragu untuk menghubungi kami:</p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Email: <a href="mailto:support@example.com" className="text-blue-600 underline">support@example.com</a></li>
            <li>Telepon: <span className="text-gray-800">123-456-7890</span></li>
          </ul>
          <p className="text-gray-600">Kami akan berusaha menjawab secepat mungkin. Terima kasih atas kesabaran Anda!</p>
        </section>
      </div>
    </div>
  );
};

export default HelpAndSupport;