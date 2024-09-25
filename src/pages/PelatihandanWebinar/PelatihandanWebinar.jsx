import { CategoryScale, Chart as ChartJS, Legend, LineElement, LinearScale, PointElement, Title, Tooltip } from 'chart.js';
import React from 'react';
import { Line } from 'react-chartjs-2';
import { FaChartLine, FaLaptop, FaUsers } from 'react-icons/fa';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const PelatihandanWebinar = () => {
  const chartData = {
    labels: ['2020', '2021', '2022', '2023', '2024'],
    datasets: [{
      label: 'Average SME Revenue Growth',
      data: [100, 125, 160, 210, 280],
      borderColor: '#BCB4A4', // 'nomad'
      backgroundColor: 'rgba(188, 180, 164, 0.5)', // 'nomad' with transparency
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
          text: 'Revenue (in thousands $)',
          color: '#C3B48F', // 'indianKhaki'
        },
        ticks: {
          color: '#B49B6C', // 'teak'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Year',
          color: '#C3B48F', // 'indianKhaki'
        },
        ticks: {
          color: '#B49B6C', // 'teak'
        }
      }
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          color: '#BCB4A4', // 'nomad'
        }
      },
      title: {
        display: true,
        text: 'SME Growth After Program Participation',
        color: '#CCB592', // 'sorrellBrown'
        font: {
          size: 16
        }
      }
    }
  };

  const programs = [
    {
      title: "Digital Transformation Masterclass",
      description: "Learn how to leverage digital tools to streamline operations and boost productivity.",
      icon: <FaLaptop className="text-5xl mb-4" style={{ color: '#B49B6C' }} />, // 'nomad'
    },
    {
      title: "Financial Management for SMEs",
      description: "Master the essentials of financial planning, budgeting, and cash flow management.",
      icon: <FaChartLine className="text-5xl mb-4" style={{ color: '#B49B6C' }} />, // 'teak'
    },
    {
      title: "Leadership & Team Building",
      description: "Develop crucial leadership skills and learn strategies for effective team management.",
      icon: <FaUsers className="text-5xl mb-4" style={{ color: '#B49B6C' }} />, // 'indianKhaki'
    },
  ];

  const webinars = [
    {
      title: "Navigating the Post-Pandemic Market",
      date: "June 15, 2024",
      speaker: "Dr. Jane Smith, Market Analyst",
      description: "Explore emerging trends and opportunities in the evolving business landscape.",
    },
    {
      title: "Sustainable Practices for SMEs",
      date: "July 2, 2024",
      speaker: "John Doe, Sustainability Expert",
      description: "Learn how to implement eco-friendly practices that benefit your business and the planet.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Solutions",
      quote: "The Digital Transformation Masterclass revolutionized our operations. We've seen a 40% increase in efficiency!",
    },
    {
      name: "Michael Chen",
      company: "GreenGrow Farms",
      quote: "Thanks to the financial management program, we've optimized our cash flow and expanded our business.",
    },
    {
      name: "Ava Rodriguez",
      company: "CreativeMind Agency",
      quote: "The leadership program gave me the tools to build a more cohesive and productive team. It's been transformative!",
    },
  ];

  const statistics = [
    { label: "SMEs Empowered", value: "10,000+" },
    { label: "Average Revenue Growth", value: "35%" },
    { label: "Successful Graduates", value: "95%" },
    { label: "Expert Mentors", value: "500+" },
  ];

  return (
    <div className="min-h-screen bg-base-100 text-gray-100">
      <main>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <video autoPlay loop muted className="absolute z-10 w-auto min-w-full min-h-full max-w-none">
            <source src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="relative z-20 text-center px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 gradient-text" style={{ color: '#BCB4A4' }}>
              Transform Your SME
            </h1>
            <p className="text-xl md:text-2xl mb-8" style={{ color: '#C3B48F' }}>Join the movement. Innovate. Grow. Succeed.</p>
            <a href="#programs" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
              Explore Programs
            </a>
          </div>
          <div className="custom-shape-divider-bottom-1685123647">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
            </svg>
          </div>
        </section>

        {/* Programs Section */}
        <section id="programs" className="py-20 bg-base-100">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center gradient-text" style={{ color: '#BCB4A4' }}>Our Transformative Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs.map((program, index) => (
                <div key={index} className="bg-[#BCB4A4] rounded-lg p-6 shadow-lg flex flex-col justify-between">
                  {program.icon}
                  <h3 className="text-2xl font-semibold mb-4 text-dark" >{program.title}</h3>
                  <p className="text-dark">{program.description}</p>
                  <div className="mt-auto">
                    <a href="#" className="mt-4 inline-block text-dark hover:text-dark">Learn more →</a>
                    <a href="#" className="mt-4 inline-block bg-dark hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out">Enroll Now</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Webinars Section */}
        <section className="py-20 bg-base-100">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center gradient-text" style={{ color: '#BCB4A4' }}>Upcoming Webinars</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {webinars.map((webinar, index) => (
                <div key={index} className="bg-[#C3B48F] rounded-lg p-6 shadow-lg flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">{webinar.title}</h3>
                    <p className="text-gray-400 mb-1">{webinar.date} | {webinar.speaker}</p>
                    <p className="text-dark mb-4">{webinar.description}</p>
                  </div>
                  <div className="mt-auto">
                    <a href="#" className="inline-block bg-dark hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out">Register</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-base-100">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center gradient-text" style={{ color: '#BCB4A4' }}>Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-[#BCB4A4] rounded-lg p-6 shadow-lg">
                  <p className="italic mb-4">"{testimonial.quote}"</p>
                  <p className="font-semibold">{testimonial.name}, {testimonial.company}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-20 bg-[#C3B48F]">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center gradient-text" style={{ color: '#BCB4A4' }}>Our Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {statistics.map((stat, index) => (
                <div key={index} className="bg-[#BCB4A4] rounded-lg p-6 shadow-lg text-center">
                  <h3 className="text-4xl font-bold mb-2" style={{ color: '#B49B6C' }}>{stat.value}</h3>
                  <p className="text-dark">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Chart Section */}
        <section className="py-20 bg-base-100">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center gradient-text" style={{ color: '#BCB4A4' }}>Program Impact Over Time</h2>
            <div className="bg-[#C3B48F] rounded-lg p-6 shadow-lg">
              <Line data={chartData} options={chartOptions} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PelatihandanWebinar;
