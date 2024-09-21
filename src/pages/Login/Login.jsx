import React, { useState } from "react";
import BgPict from "../../components/BgPict";

const Login = () => {
  const [isOpen, setIsOpen] = useState(false); // State to control modal visibility

  const handleModalOpen = () => {
    setIsOpen(true);
  };

  const handleModalClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {/* Navbar with Login Button */}
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white font-bold text-lg">Logo</div>
          <div>
            <button
              className="text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
              onClick={handleModalOpen}
            >
              Login
            </button>
          </div>
        </div>
      </nav>

      {/* Background Image */}
      <BgPict />

      {/* Modal for Login form */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="card bg-base-100 max-w-4xl w-full mx-4 lg:mx-0 lg:w-2/3 shadow-2xl relative">
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={handleModalClose}
            >
              ✕
            </button>

            <form className="card-body p-8">
              <div className="form-control items-center mb-6">
                <img
                  src="/assets/Logo-Localine.png"
                  alt="Logo Localine"
                  className="w-32 h-24"
                />
                <h1 className="text-3xl font-bold">Localine</h1>
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered w-full"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary w-full">Login</button>
              </div>
              <div className="label mt-4 text-center">
                <a
                  href="/Register"
                  className="label-text-alt link link-hover text-blue-600"
                >
                  Belum Punya Akun? Daftar Sekarang!
                </a>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;