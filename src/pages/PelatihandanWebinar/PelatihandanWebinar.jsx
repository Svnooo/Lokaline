import { CategoryScale, Chart as ChartJS, Legend, LineElement, LinearScale, PointElement, Title, Tooltip } from 'chart.js';
import React from 'react';
import { Line } from 'react-chartjs-2';
import { FaChartLine, FaLaptop, FaUsers } from 'react-icons/fa';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const PelatihandanWebinar = () => {
  const chartData = {
    labels: ['2020', '2021', '2022', '2023', '2024'],
    datasets: [{
      label: 'Rata-rata Pertumbuhan Pendapatan UKM',
      data: [100, 125, 160, 210, 280],
      borderColor: '#BCB4A4',
      backgroundColor: 'rgba(188, 180, 164, 0.5)',
      tension: 0.1
    }]
  };

  const chartOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Pendapatan (dalam ribuan Rp)',
          color: '#C3B48F',
        },
        ticks: {
          color: '#B49B6C',
        }
      },
      x: {
        title: {
          display: true,
          text: 'Tahun',
          color: '#C3B48F',
        },
        ticks: {
          color: '#B49B6C',
        }
      }
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          color: '#BCB4A4',
        }
      },
      title: {
        display: true,
        text: 'Pertumbuhan UKM Setelah Mengikuti Program',
        color: '#CCB592',
        font: {
          size: 16
        }
      }
    }
  };

  const programs = [
    {
      title: "Kelas Transformasi Digital",
      description: "Pelajari cara memanfaatkan alat digital untuk mengoptimalkan operasi dan meningkatkan produktivitas.",
      icon: <FaLaptop className="text-5xl mb-4" style={{ color: '#B49B6C' }} />,
    },
    {
      title: "Manajemen Keuangan untuk UKM",
      description: "Kuasai dasar-dasar perencanaan keuangan, penganggaran, dan manajemen arus kas.",
      icon: <FaChartLine className="text-5xl mb-4" style={{ color: '#B49B6C' }} />,
    },
    {
      title: "Kepemimpinan & Pembangunan Tim",
      description: "Kembangkan keterampilan kepemimpinan penting dan pelajari strategi manajemen tim yang efektif.",
      icon: <FaUsers className="text-5xl mb-4" style={{ color: '#B49B6C' }} />,
    },
  ];

  const webinars = [
    {
      title: "Menavigasi Pasar Pasca-Pandemi",
      date: "15 Juni 2024",
      speaker: "Dr. Rina Wijaya, Analis Pasar",
      description: "Jelajahi tren dan peluang yang muncul dalam lanskap bisnis yang terus berkembang.",
    },
    {
      title: "Praktik Berkelanjutan untuk UKM",
      date: "2 Juli 2024",
      speaker: "Budi Santoso, Ahli Keberlanjutan",
      description: "Pelajari cara menerapkan praktik ramah lingkungan yang menguntungkan bisnis Anda dan planet.",
    },
  ];

  const testimonials = [
    {
      name: "Sari Indah",
      company: "Solusi TechMaju",
      quote: "Kelas Transformasi Digital merevolusi operasi kami. Kami melihat peningkatan efisiensi sebesar 40%!",
    },
    {
      name: "Hadi Wibowo",
      company: "Tani Hijau",
      quote: "Berkat program manajemen keuangan, kami telah mengoptimalkan arus kas dan memperluas bisnis kami.",
    },
    {
      name: "Nia Pratiwi",
      company: "Agensi KreatifMinda",
      quote: "Program kepemimpinan memberikan saya alat untuk membangun tim yang lebih kohesif dan produktif. Sungguh transformatif!",
    },
  ];

  const statistics = [
    { label: "UKM Diberdayakan", value: "10.000+" },
    { label: "Rata-rata Pertumbuhan Pendapatan", value: "35%" },
    { label: "Lulusan Sukses", value: "95%" },
    { label: "Mentor Ahli", value: "500+" },
  ];

  return (
    <div className="min-h-screen bg-base-100 text-gray-100">
      <main>
        {/* Bagian Hero */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <video autoPlay loop muted className="absolute z-10 w-auto min-w-full min-h-full max-w-none">
            <source src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4" type="video/mp4" />
            Browser Anda tidak mendukung tag video.
          </video>
          <div className="relative z-20 text-center px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 gradient-text" style={{ color: '#BCB4A4' }}>
              Transformasi UMKM Anda
            </h1>
            <p className="text-xl md:text-2xl mb-8" style={{ color: '#C3B48F' }}>Bergabunglah dalam gerakan. Berinovasi. Berkembang. Sukses.</p>
<a href="#programs" className="bg-[#b49b6c] hover:bg-[#a2895a] text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
  Jelajahi Program
</a>

          </div>
          <div className="custom-shape-divider-bottom-1685123647">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
            </svg>
          </div>
        </section>

        {/* Bagian Program */}
        <section id="programs" className="py-20 bg-base-100">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center gradient-text" style={{ color: '#BCB4A4' }}>Program Transformatif Kami</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs.map((program, index) => (
                <div key={index} className="bg-[#C3B48F] rounded-lg p-6 shadow-lg flex flex-col justify-between">
                  {program.icon}
                  <h3 className="text-2xl font-semibold mb-4 text-dark">{program.title}</h3>
                  <p className="text-dark">{program.description}</p>
                  <div className="mt-auto">
                    <a href="#" className="mt-4 inline-block text-dark hover:text-dark">Pelajari lebih lanjut →</a>
                    <a href="#" className="mt-4 inline-block bg-dark hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out">Daftar Sekarang</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bagian Webinar */}
        <section className="py-20 bg-base-100">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center gradient-text" style={{ color: '#BCB4A4' }}>Webinar Mendatang</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {webinars.map((webinar, index) => (
                <div key={index} className="bg-[#C3B48F] rounded-lg p-6 shadow-lg flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">{webinar.title}</h3>
                    <p className="text-gray-400 mb-1">{webinar.date} | {webinar.speaker}</p>
                    <p className="text-dark mb-4">{webinar.description}</p>
                  </div>
                  <div className="mt-auto">
                    <a href="#" className="inline-block bg-dark hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out">Daftar</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bagian Testimoni */}
        <section className="py-20 bg-base-100">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center gradient-text" style={{ color: '#BCB4A4' }}>Kisah Sukses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-[#C3B48F] rounded-lg p-6 shadow-lg">
                  <p className="italic mb-4">"{testimonial.quote}"</p>
                  <p className="font-semibold">{testimonial.name}, {testimonial.company}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bagian Statistik */}
        <section className="py-20 bg-base-100">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center gradient-text" style={{ color: '#BCB4A4' }}>Dampak Kami</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {statistics.map((stat, index) => (
                <div key={index} className="bg-[#C3B48F] rounded-lg p-6 shadow-lg text-center">
                  <h3 className="text-4xl font-bold mb-2" style={{ color: '#B49B6C' }}>{stat.value}</h3>
                  <p className="text-dark">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bagian Grafik */}
        <section className="py-20 bg-base-100">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center gradient-text" style={{ color: '#BCB4A4' }}>Dampak Program Seiring Waktu</h2>
            <div className="bg-base-100 rounded-lg p-6 shadow-lg">
              <Line data={chartData} options={chartOptions} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PelatihandanWebinar;