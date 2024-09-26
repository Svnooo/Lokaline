import React, { useRef } from "react";

const AboutUs = () => {
    const containerRef = useRef(null);

    const scrollDown = () => {
        if (containerRef.current) {
            const scrollAmount = window.innerHeight * 0.8; // 10% of the viewport height
            window.scrollBy({ top: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div ref={containerRef} className="bg-gradient-to-r from-[#BCB4A4] via-[#B49B6C] to-[#CCB592] py-10 pt-24">
            {/* Hero Section */}
            <br />
            <br />
            <section className="container mx-auto text-center mb-12">
                <div className="bg-white bg-opacity-30 p-12 rounded-lg shadow-lg">
                    <h1 className="text-3xl sm:text-5xl font-extrabold mb-6 drop-shadow-lg shadow-black leading-tight font-serif">
                        Localine
                    </h1>
                    <h3 className="text-xl sm:text-3xl font-extrabold mb-6 drop-shadow-lg shadow-black leading-tight font-serif">
                        Sentuhan Nusantara di Ujung Jari Anda
                    </h3>
                    <p className="text-xl sm:text-xl mb-12 drop-shadow-lg shadow-black font-light max-w-3xl mx-auto italic">
                        Localine adalah platform e-commerce yang didedikasikan untuk mendukung dan mengembangkan UMKM lokal.
                        Dengan komitmen kuat untuk membawa produk UMKM ke panggung internasional, kami percaya bahwa usaha kecil dapat menciptakan dampak besar.
                    </p>
                    <button
                        onClick={scrollDown}
                        className="mt-8 px-6 py-3 bg-[#C3B48F] text-white font-semibold rounded-lg hover:bg-[#B49B6C] transition-all"
                    >
                        Berkenalan Lebih dalam dengan kami
                    </button>
                </div>
            </section>

            {/* Founders Section */}
            <section className="container mx-auto pt-20">
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Founder 1 */}
                    <div className="bg-white bg-opacity-50 shadow-2xl rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                        <img
                            src="/assets/Sonny.png"
                            alt="Founder 1"
                            className="founder-img"
                        />
                        <div className="p-6 text-center">
                            <h2 className="text-3xl font-bold text-[#B49B6C] mb-3">Albertus Sonny Setiawan Rilman</h2>
                            <p className="text-[#4B423A] mb-4">CEO & Co-founder</p>
                            <p className="text-[#4B423A]">
                              "Albertus Sonny Setiawan Rilman memimpin Localine dengan fokus pada inovasi untuk membantu UMKM lokal menjangkau pasar global."
                            </p>
                        </div>
                    </div>

                    {/* Founder 2 */}
                    <div className="bg-white bg-opacity-50 shadow-2xl rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                        <img
                            src="/assets/Ariel.png"
                            alt="Founder 2"
                            className="founder-img"
                        />
                        <div className="p-6 text-center">
                            <h2 className="text-3xl font-bold text-[#B49B6C] mb-3">Ariel Stevano</h2>
                            <p className="text-[#4B423A] mb-4">CTO & Co-founder</p>
                            <p className="text-[#4B423A]">
                              "Ariel Stevano mengelola teknologi di Localine, menciptakan solusi efisien untuk mendukung pertumbuhan UMKM."
                            </p>
                        </div>
                    </div>

                    {/* Founder 3 */}
                    <div className="bg-white bg-opacity-50 shadow-2xl rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                        <img
                            src="/assets/Mateus.png"
                            alt="Founder 3"
                            className="founder-img"
                        />
                        <div className="p-6 text-center">
                            <h2 className="text-3xl font-bold text-[#B49B6C] mb-3">Mateus Appuwan Situmorang</h2>
                            <p className="text-[#4B423A] mb-4">COO & Co-founder</p>
                            <p className="text-[#4B423A]">
                              "Mateus Appuwan Situmorang memastikan operasional Localine berjalan lancar dan mendukung perkembangan UMKM."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission and Vision Section */}
            <section className="container mx-auto my-12 p-10 bg-[#BCB4A4] text-white rounded-lg shadow-lg">
                <h2 className="text-4xl font-bold text-center mb-6">Misi & Visi Kami</h2>
                <p className="text-xl text-center mb-6 max-w-3xl mx-auto">
                    Misi kami adalah memberdayakan UMKM melalui solusi inovatif yang memberikan nilai luar biasa, memperluas jangkauan mereka dari lokal hingga internasional.
                </p>
                <p className="text-xl text-center max-w-3xl mx-auto">
                    Visi kami adalah menjadi pemimpin dalam menyediakan teknologi yang mendorong kemajuan UMKM, menjadikan produk lokal terkenal di seluruh dunia.
                </p>
            </section>

            {/* Core Values Section */}
            <section className="container mx-auto py-10">
                <h2 className="text-4xl font-bold text-dark text-center mb-10">Nilai-Nilai Kami</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="bg-white shadow-2xl rounded-lg p-8 text-center">
                        <h3 className="text-2xl font-semibold text-[#B49B6C] mb-4">Inovasi</h3>
                        <p className="text-[#4B423A]">Kami selalu berinovasi untuk memberikan solusi terbaik bagi UMKM.</p>
                    </div>
                    <div className="bg-white shadow-2xl rounded-lg p-8 text-center">
                        <h3 className="text-2xl font-semibold text-[#B49B6C] mb-4">Integritas</h3>
                        <p className="text-[#4B423A]">Kami percaya bahwa integritas adalah dasar dari kepercayaan.</p>
                    </div>
                    <div className="bg-white shadow-2xl rounded-lg p-8 text-center">
                        <h3 className="text-2xl font-semibold text-[#B49B6C] mb-4">Fokus pada Pelanggan</h3>
                        <p className="text-[#4B423A]">Pelanggan kami, baik lokal maupun global, selalu menjadi pusat dari setiap keputusan kami.</p>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <section className="container mx-auto text-center py-8 bg-[#B49B6C] text-white rounded-lg mt-12">
                <h3 className="text-2xl font-bold">Bergabung dengan Kami!</h3>
                <p className="text-lg">Mari kita bersama-sama membangun masa depan UMKM yang lebih cerah.</p>
            </section>
        </div>
    );
};

export default AboutUs;