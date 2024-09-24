import React, { useState } from 'react';
import { Newspaper, ArrowRight, Calendar, Search, Bookmark, Share2, ThumbsUp, MessageSquare } from 'lucide-react';

const BeritadanArtikel = () => {
  const [activeTab, setActiveTab] = useState('Semua');
  const [showNewsletter, setShowNewsletter] = useState(false);

  const articles = [
    {
      title: "Revolusi Digital UMKM",
      date: "22 Sept 2024",
      summary: "Transformasi digital membuka peluang besar bagi UMKM Indonesia.",
      category: "Teknologi",
      image: "/api/placeholder/800/600",
      likes: 120,
      comments: 35
    },
    {
      title: "Inovasi Produk Lokal",
      date: "21 Sept 2024",
      summary: "UMKM Indonesia membuktikan daya saing global dengan inovasi produk unik.",
      category: "Inovasi",
      image: "/api/placeholder/800/600",
      likes: 98,
      comments: 22
    },
    {
      title: "Strategi Ekspansi Pasar",
      date: "20 Sept 2024",
      summary: "Tips jitu menembus pasar internasional untuk UMKM.",
      category: "Bisnis",
      image: "/api/placeholder/800/600",
      likes: 156,
      comments: 41
    }
  ];

  const categories = ['Semua', 'Teknologi', 'Inovasi', 'Bisnis', 'Keuangan', 'Pemasaran'];

  const filteredArticles = activeTab === 'Semua' 
    ? articles 
    : articles.filter(article => article.category === activeTab);

  return (
    <div className="bg-gradient-to-br from-yellow-50 to-yellow-200 min-h-screen">
      {/* Header */}
      <header className="relative bg-cover bg-center text-white py-32 px-4 sm:px-6 lg:px-8" style={{ backgroundImage: "url('/assets/Berita dan Artikel.png')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold sm:text-6xl md:text-7xl mb-4">
            Berita & Artikel UMKM
          </h1>
          <p className="mt-6 text-xl sm:text-2xl max-w-3xl mx-auto">
            Temukan inspirasi dan wawasan untuk mengembangkan bisnis UMKM Anda
          </p>
          <div className="mt-10 flex justify-center">
            <input
              type="text"
              placeholder="Cari artikel..."
              className="px-6 py-3 w-full max-w-md text-gray-900 rounded-l-full focus:outline-none focus:ring-2 focus:focus:ring-[#b49b6c]"
            />
            
            <button className="bg-[#b49b6c] hover:bg-[#b49b6c] text-white px-6 py-3 rounded-r-full transition duration-300">

              <Search className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Category Tabs */}
      <div className="bg-yellow-100 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-4 overflow-x-auto py-4" aria-label="Tabs">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-3 py-2 text-sm font-medium rounded-md ${
                  activeTab === category
                    ? 'bg-yellow-500 text-white'
                    : 'text-yellow-700 hover:text-yellow-900'
                }`}
              >
                {category}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Featured Article */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-yellow-600 mb-8">Artikel Unggulan</h2>
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img className="h-96 w-full object-cover md:w-96" src="/api/placeholder/800/600" alt="Featured Article" />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-yellow-500 font-semibold">Teknologi</div>
                <a href="#" className="block mt-1 text-3xl leading-tight font-bold text-gray-900 hover:underline">Revolusi Digital UMKM: Langkah Menuju Kesuksesan Global</a>
                <p className="mt-2 text-gray-600">Pelajari bagaimana transformasi digital dapat membuka peluang besar bagi UMKM Indonesia di era modern ini.</p>
                <div className="mt-6 flex items-center space-x-4">
                  <button className="inline-flex items-center px-4 py-2 bg-yellow-500 text-white font-semibold rounded-lg shadow hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-75 transition duration-300">
                    Baca Selengkapnya
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                  <button className="text-yellow-500 hover:text-yellow-700">
                    <Bookmark className="w-6 h-6" />
                  </button>
                  <button className="text-yellow-500 hover:text-yellow-700">
                    <Share2 className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-yellow-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-yellow-600 mb-8">Artikel Terbaru</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.map((article, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
                <img className="h-48 w-full object-cover" src={article.image} alt={article.title} />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-yellow-700 bg-yellow-200">
                      {article.category}
                    </span>
                    <div className="flex items-center text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span className="text-sm">{article.date}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.summary}</p>
                  <div className="flex items-center justify-between">
                    <button className="inline-flex items-center px-3 py-2 text-sm bg-yellow-500 text-white font-semibold rounded-lg shadow hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-75 transition duration-300">
                      Baca Selengkapnya
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                    <div className="flex items-center space-x-2">
                      <span className="flex items-center text-gray-600">
                        <ThumbsUp className="w-4 h-4 mr-1" />
                        {article.likes}
                      </span>
                      <span className="flex items-center text-gray-600">
                        <MessageSquare className="w-4 h-4 mr-1" />
                        {article.comments}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-yellow-600 to-yellow-700 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Dapatkan Artikel Terbaru</h2>
          <p className="text-lg mb-8">Jangan lewatkan informasi dan inspirasi terbaru untuk mengembangkan UMKM Anda!</p>
          <button
            className="inline-flex items-center px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg shadow hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-75 transition duration-300"
            onClick={() => setShowNewsletter(true)}
          >
            Berlangganan Sekarang
          </button>
        </div>
      </section>
    </div>
  );
};

export default BeritadanArtikel;
