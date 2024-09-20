import React, { useState } from "react";

const ForumDiskusi = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 6; // Misalnya, 6 halaman total

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const MoreToolsSection = () => {
    return (
      <div
        style={{
          backgroundColor: "#F5F5F5",
          color: "#000",
          padding: "40px 0",
          marginTop: "40px",
        }}
      >
        <strong style={{ fontSize: "30px" }}>Percakapan Unggulan</strong>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            marginTop: "20px",
          }}
        >
          <div style={{ width: "200px", textAlign: "left" }}>
            <img
              src="path/to/resource-center.png"
              alt="Resource Center"
              style={{ width: "100%" }}
            />
            <h3>Resource Center</h3>
            <p>
              Explore guides for hospitality, managing your listing, and growing
              your business.
            </p>
          </div>
          <div style={{ width: "200px", textAlign: "left" }}>
            <img
              src="path/to/local-host-clubs.png"
              alt="Local Host Clubs"
              style={{ width: "100%" }}
            />
            <h3>Local Host Clubs</h3>
            <p>
              Connect and learn with local Hosts online and at meetups near you.
            </p>
          </div>
          <div style={{ width: "200px", textAlign: "left" }}>
            <img
              src="path/to/help-center.png"
              alt="Help Center"
              style={{ width: "100%" }}
            />
            <h3>Help Center</h3>
            <p>Get help with your account, reservations, and more.</p>
          </div>
        </div>

        {/* Arrow buttons */}
        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <button
            onClick={handlePrev}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              marginRight: "10px",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              style={{ transform: "rotate(180deg)" }} // Rotate for left arrow
            >
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
            </svg>
          </button>
        </div>
      </div>
    );
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <strong style={{ fontSize: "45px" }}>
        Temukan dan Bertumbuh Bersama Pelaku UMKM seperti Anda
      </strong>
      <br />
      <strong style={{ fontSize: "26px" }}>
        Terlibatlah dalam forum resmi pelaku UMKM.
      </strong>

      {/* Bagian Kategori */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "40px",
        }}
      >
        {/* Kategori Card */}
        {[
          {
            imgSrc: "assets/Tentang Bisnis.png",
            title: "Tanya tentang bisnis Anda",
            bgColor: "#FFEFE6",
          },
          {
            imgSrc: "assets/Saran.png",
            title: "Saran untuk ruang usaha Anda",
            bgColor: "#FFF5EB",
          },
          {
            imgSrc: "assets/Dukungan.png",
            title: "Dukungan untuk pemesanan",
            bgColor: "#F7F8D4",
          },
          {
            imgSrc: "assets/Bantuin.png",
            title: "Bantuan untuk bisnis Anda",
            bgColor: "#E6F7F8",
          },
          {
            imgSrc: "assets/Lingkaran UMKM.png",
            title: "Lingkaran UMKM",
            bgColor: "#FFF8E1",
          },
        ].map((item, index) => (
          <div
            key={index}
            style={{
              backgroundColor: item.bgColor,
              padding: "20px",
              borderRadius: "10px",
              width: "180px",
            }}
          >
            <img src={item.imgSrc} alt={`Icon${index + 1}`} style={{ width: "50px" }} />
            <br />
            <strong>{item.title}</strong>
          </div>
        ))}
      </div>

      {/* Panggil MoreToolsSection */}
      <MoreToolsSection />

      {/* Bagian Diskusi Unggulan */}
      <h2 style={{ marginTop: "40px" }}>Diskusi Unggulan</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {[
          {
            imgSrc: "path/to/airbnb-logo.png",
            title: "Pengumpulan Pengalaman telah Kembali!",
            content: "Berita baik—Airbnb kini menerima pengumpulan pengalaman baru! Daftarkan pengalaman Anda. Tujuannya adalah untuk menemukan...",
            user: "Airbnb",
            userStatus: "Akun Resmi",
          },
          {
            imgSrc: "path/to/user-avatar.png",
            title: "Apakah Anda lebih suka check-in sendiri atau menyambut tamu secara langsung?",
            content: "Saya adalah tipe orang yang menikmati menyambut tamu secara pribadi, kecuali mereka menyatakan keinginan untuk check-in mandiri...",
            user: "Ema3296",
            userStatus: "Level 6",
          },
        ].map((discussion, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#F9F9F9",
              padding: "20px",
              borderRadius: "10px",
              width: "300px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
              <img src={discussion.imgSrc} alt="User" style={{ width: "40px", borderRadius: "50%" }} />
              <div style={{ marginLeft: "10px" }}>
                <a href="#" style={{ fontWeight: "bold", color: "#333" }}>
                  {discussion.user}
                </a>
                <span style={{ fontSize: "12px", color: "#888" }}> {discussion.userStatus}</span>
              </div>
            </div>
            <h3>{discussion.title}</h3>
            <p>{discussion.content}</p>
            <a href="#" style={{ color: "#0066c0" }}>
              Balasan Terakhir
            </a>
          </div>
        ))}
      </div>

      {/* Bagian What Hosts are Saying */}
      <h2 style={{ marginTop: "40px" }}>Apa Kata Tuan Rumah</h2>
      <div style={{ marginTop: "20px" }}>
        {/* Panggil konten dengan data */}
        <div
          style={{
            backgroundColor: "#F9F9F9",
            padding: "20px",
            borderRadius: "10px",
            marginBottom: "20px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src="path/to/user-avatar.png" alt="User" style={{ width: "50px", borderRadius: "50%" }} />
            <div style={{ marginLeft: "10px", textAlign: "left" }}>
              <a href="#" style={{ fontWeight: "bold", color: "#333" }}>
                Support with your bookings
              </a>
              <h3>
                Bagaimana Anda menangani situasi saat tamu menyebabkan kerusakan pada properti Anda?
              </h3>
              <p>
                Kepada tuan rumah, saya pernah beberapa kali mengalami kerusakan, tetapi saya selalu mendapatkan ulasan yang sangat baik dari tamu setelahnya...
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "12px",
                  color: "#888",
                }}
              >
                <span>
                  Ema3296 • Level 6 • Sarajevo, Bosnia and Herzegovina
                </span>
                <span>Rabu • 8 Balasan • 8 Suka</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <nav>
          <ul style={{ display: "flex", listStyleType: "none", padding: 0 }}>
            {[...Array(totalPages)].map((_, index) => (
              <li key={index} style={{ margin: "0 5px" }}>
                <button
                  onClick={() => handlePageChange(index + 1)}
                  style={{
                    padding: "10px 15px",
                    backgroundColor: currentPage === index + 1 ? "#000" : "#fff",
                    color: currentPage === index + 1 ? "#fff" : "#000",
                    border: "1px solid #000",
                    cursor: "pointer",
                  }}
                >
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ForumDiskusi;