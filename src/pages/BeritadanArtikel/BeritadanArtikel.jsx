import React, { useState } from "react";
import {
  Newspaper,
  ArrowRight,
  Calendar,
  Search,
  Bookmark,
  Share2,
  ThumbsUp,
  MessageSquare,
} from "lucide-react";

const BeritadanArtikel = () => {
  const [activeTab, setActiveTab] = useState("Semua");
  const [searchTerm, setSearchTerm] = useState("");
  const [showNewsletter, setShowNewsletter] = useState(false);


  const articles = [
    {
      title:
        "Pengaruh Literasi Keuangan, Inklusi Keuangan dan Digital Payment Terhadap Kinerja UMKM Makanan & Minuman di Kota Padang",
      date: "17 Juli 2024",
      summary:
        "Fokus dari penelitian ini adalah untuk mengetahui bagaimana literasi keuangan, inklusi keuangan, dan digital payment mempengaruhi kinerja usaha kecil dan menengah (UMKM) makanan dan minuman di Kota Padang. Dalam analisis ini  menggunakan sampel sebesar 87 partisipan. ",
      category: "Keuangan",
      image: "public/assets/Pengaruh Literasi Keuangan.png",
      href: "https://doi.org/10.37366/ekomabis.v5i02.1403",
    },

    {
      title:
        "Inovasi lingkungan dan dampak pandemi: Studi kasus pada UMKM makanan dan minuman",
      date: "06 Juni 2022",
      summary:
        "Tujuan artikel berbasis pengabdian pada masyarakat ini adalah untuk memahami inovasi lingkungan dan dampak pandemi COVID-19 terhadap UMKM. Mitra yang dipilih yaitu UMKM yang bergerak di bidang makanan dan minuman di Kota Bandung, Jawa Barat, Indonesia.",
      category: "Inovasi",
      image: "public/assets/Inovasi lingkungan.png",
      href: "https://riset.unisma.ac.id/index.php/jipemas/article/view/14147",
    },
    {
      title:
        "Literature Review: Pengaruh E-Commerce Terhadap UMKM Pada Era New Normal",
      date: "29 Februari 2024",
      summary:
        "Pandemi covid-19 memberikan dampak signifikan pada sektor ekonomi. Selain itu, pandemi telah mengubah persepsi masyarakat dalam bertahan hidup dan beradaptasi dalam penerapan pola hidup baru atau dikenal dengan era new normal. Perubahan tersebut berpengaruh dari segi perilaku dan kebiasaan guna terpenuhinya kebutuhan hidup. ",
      category: "Bisnis",
      image: "public/assets/Literature Review.png",
      href: "https://jurnal.uym.ac.id/index.php/JEDBUS/article/view/339",
    },
    {
      title:
        "Pemberdayaan UMKM Simuley dalam Pemasaran Digital Melalui Pelatihan Menulis Copywriting yang SEO-Friendly",
      date: "03 Agustus 2023",
      summary:
        "Pengembangan UKM perlu diperkuat dengan promosi digital seperti penggunaan jargon promosi digital, caption, dan artikel konten digital yang disebarkan pada platform digital yaitu media sosial, marketplace, dan website. Artikel yang menarik akan membangun citra merek yang positif bagi UKM. Upaya optimalisasi untuk membantu pemasaran digital bagi UKM dapat dilakukan dengan copywriting artikel dan caption yang memiliki kategori SEO friendly yang dimuat pada platform digital karena muncul pada halaman mesin pencari (Google) ketika orang memasukkan kata atau frasa yang dicari.",
      category: "Pemasaran",
      image: "public/assets/Pemberdayaan UMKM Simuley.png",
      href: "https://jurnal.darmajaya.ac.id/index.php/PSND/article/view/3807",
    },
    {
      title:
        "Studi Literatur Digitalisasi UMKM (Usaha Mikro, Kecil, dan Menengah) di EraMasyarakat 5.0: Strategi dan Faktor",
      date: "03 Januari 2024",
      summary:
        "Era masyarakat 5.0 adalah era di mana individu ditempatkansebagai pusat dan teknologi berfungsi sebagai fondasi untuk menangani masalah global. Era ini berkaitan dengankeseimbangan antara kemajuan teknologi dan kemanusiaan.Manfaat proses digitalisasi bagi pengelola UMKM adalah hasil terukur, tidak dibatasi oleh geografi, dan waktu, biaya lebih rendah, meningkatkan komunikasi dua arah, dapat menjangkaupengunjung lebih luas.",
      category: "Teknologi",
      image: "public/assets/Studi Literatur Digitalisasi UMKM.png",
      href: "https://jurnal.untan.ac.id/index.php/MBIC/article/view/77151",
    },
  ];
  const berita = [
    {
      title:
        "Mendorong tumbuhnya ekosistem UMKM dengan inovasi dan kolaborasi",
      date: "26 Agustus 2024",
      summary:
        "Jakarta (ANTARA) - Usaha Mikro, Kecil, dan Menengah (UMKM) telah lama menjadi tulang punggung perekonomian dan merupakan motor penggerak perekonomian Indonesia.Kontribusi UMKM terhadap produk domestik bruto (PDB) Indonesia mencapai 60,51 persen. Tidak hanya itu, UMKM turut memberikan penyerapan tenaga kerja sebesar 96,92 persen.Saat ini jumlah UMKM mencapai 64,2 juta. Dengan jumlah tersebut, UMKM mampu berkontribusi terhadap pertumbuhan ekspor nonmigas sebesar 15,65 persen. ",
      category: "Inovasi",
      image: "public/assets/Mendorong.png",
      href: "https://www.antaranews.com/berita/4286199/mendorong-tumbuhnya-ekosistem-umkm-dengan-inovasi-dan-kolaborasi",
    },
  ];
 
  const categories = [
    "Semua",
    "Teknologi",
    "Inovasi",
    "Bisnis",
    "Keuangan",
    "Pemasaran",
  ];

  const filteredArticles = articles.filter(article => 
    (activeTab === "Semua" || article.category === activeTab) &&
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredBerita = berita.filter(berita => 
    (activeTab === "Semua" || berita.category === activeTab) &&
    berita.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gradient-to-br from-yellow-50 to-white min-h-screen">
      {/* Header */}
      <header
        className="relative bg-cover bg-center text-white py-32 px-4 sm:px-6 lg:px-8"
        style={{ backgroundImage: "url('/assets/Berita dan Artikel.png')" }}
      >
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
              placeholder="Cari Berita dan Artikel..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-6 py-3 w-full max-w-md text-gray-900 rounded-l-full focus:outline-none focus:ring-2 focus:focus:ring-[#b49b6c]"
            />
            <button className="bg-[#b49b6c] hover:bg-[#b49b6c] text-white px-6 py-3 rounded-r-full transition duration-300">
              <Search className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Category Tabs */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            className="flex space-x-4 overflow-x-auto py-4"
            aria-label="Tabs"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-3 py-2 text-sm font-medium rounded-md ${
                  activeTab === category
                    ? "bg-[#b49b6c] text-white"
                    : "text-[#b49b6c] hover:text-yellow-900"
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
          <h2 className="text-3xl font-bold text-[#b49b6c] mb-8">
            Artikel Unggulan
          </h2>
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img
                  className="h-96 w-full object-cover md:w-96"
                  src="public\assets\Studi Literatur Digitalisasi UMKM.png"
                  alt="Featured Article"
                />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-yellow-500 font-semibold">
                  Teknologi
                </div>
                <a
                  href="https://jurnal.untan.ac.id/index.php/MBIC/article/view/77151"
                  className="block mt-1 text-3xl leading-tight font-bold text-gray-900 hover:underline"
                >
                  Studi Literatur Digitalisasi UMKM (Usaha Mikro, Kecil, dan
                  Menengah) di EraMasyarakat 5.0: Strategi dan Faktor
                </a>
                <p className="mt-2 text-gray-600">
                  Era masyarakat 5.0 adalah era di mana individu ditempatkan
                  sebagai pusat dan teknologi berfungsi sebagai fondasi untuk
                  menangani masalah global. Era ini berkaitan dengan
                  keseimbangan antara kemajuan teknologi dan kemanusiaan.
                  Manfaat proses digitalisasi bagi pengelola UMKM adalah hasil
                  terukur, tidak dibatasi oleh geografi, dan waktu, biaya lebih
                  rendah, meningkatkan komunikasi dua arah, dapat menjangkau
                  pengunjung lebih luas.{" "}
                </p>
                <div className="mt-6 flex items-center space-x-4">
                  <a
                    href="https://jurnal.untan.ac.id/index.php/MBIC/article/view/77151"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="inline-flex items-center px-4 py-2 bg-[#b49b6c] text-white font-semibold rounded-lg shadow hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-75 transition duration-300">
                      Baca Selengkapnya
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </a>
                  <button className="text-[#b49b6c] hover:text-yellow-700">
                    <Bookmark className="w-6 h-6" />
                  </button>
                  <button className="text-[#b49b6c] hover:text-yellow-700">
                    <Share2 className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    {/* Article Section */}
    <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#b49b6c] mb-8">Artikel</h2>
          {filteredArticles.length === 0 ? (
            <p className="text-gray-600">Tidak ada artikel yang ditemukan.</p>
          ) : (
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
                      <a href={article.href} target="_blank" rel="noopener noreferrer">
                        <button className="inline-flex items-center px-3 py-2 text-sm bg-[#b49b6c] text-white font-semibold rounded-lg shadow hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-75 transition duration-300">
                          Baca Selengkapnya
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* News Section */}
        <div className="max-w-7xl mx-auto mt-12">
          <h2 className="text-3xl font-bold text-[#b49b6c] mb-8">Berita</h2>
          {filteredBerita.length === 0 ? (
            <p className="text-gray-600">Tidak ada berita yang ditemukan.</p>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredBerita.map((berita, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
                  <img className="h-48 w-full object-cover" src={berita.image} alt={berita.title} />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-yellow-700 bg-yellow-200">
                        {berita.category}
                      </span>
                      <div className="flex items-center text-gray-500">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span className="text-sm">{berita.date}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{berita.title}</h3>
                    <p className="text-gray-600 mb-4">{berita.summary}</p>
                    <div className="flex items-center justify-between">
                      <a href={berita.href} target="_blank" rel="noopener noreferrer">
                        <button className="inline-flex items-center px-3 py-2 text-sm bg-[#b49b6c] text-white font-semibold rounded-lg shadow hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-75 transition duration-300">
                          Baca Selengkapnya
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BeritadanArtikel;