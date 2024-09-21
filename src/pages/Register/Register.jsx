import React from "react";

const Register = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="card bg-base-100 max-w-4xl w-full mx-4 lg:mx-0 lg:w-2/3 shadow-2xl relative">
                {/* Close button */}
                <button
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                    onClick={onClose}
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
                            <span className="label-text">Nama</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Nama"
                            className="input input-bordered w-full"
                            required
                        />
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
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary w-full">Daftar</button>
                    </div>
                    <div className="label mt-4 text-center">
                        <a
                            href="#"
                            className="label-text-alt link link-hover text-blue-600"
                            onClick={(e) => {
                                e.preventDefault();
                                onClose();
                                // Anda perlu menambahkan logika di sini untuk membuka modal Login
                            }}
                        >
                            Sudah Punya Akun? Log In Sekarang!
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;