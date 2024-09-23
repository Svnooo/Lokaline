import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../components/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto py-10 mt-16">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-800">🛒 Keranjang Belanja Anda</h1>

      {cartItems.length === 0 ? (
        <div className="text-center">
          <p className="text-xl text-gray-600 mb-6">Keranjang Anda kosong, ayo belanja lebih banyak!</p>
          <button
            className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-2xl"
            onClick={() => navigate('/catalog')}
          >
            Lanjutkan Belanja
          </button>
        </div>
      ) : (
        <div className="bg-white shadow-2xl rounded-lg p-8 animate-slide-up">
          {cartItems.map((item, index) => (
            <div key={index} className="flex justify-between items-center border-b py-6 hover:bg-gray-100 transition-colors duration-300 rounded-lg">
              <div className="flex items-center">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-24 h-24 object-cover rounded-lg mr-6 transform hover:scale-110 transition-transform duration-500 shadow-md" 
                />
                <div>
                  <h2 className="text-xl font-bold text-gray-800">{item.name}</h2>
                  <p className="text-gray-600">Varian: <span className="font-medium">{item.variant}</span></p>
                  <p className="text-gray-600">Jumlah: <span className="font-semibold">{item.quantity}</span></p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold text-green-600">${(item.price * item.quantity).toFixed(2)}</span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="ml-6 text-red-500 hover:text-red-700 transition-colors duration-300 underline focus:outline-none focus:ring-2 focus:ring-red-400 rounded-lg"
                >
                  Hapus
                </button>
              </div>
            </div>
          ))}

          <div className="mt-8 p-4 bg-gray-100 rounded-lg shadow-md flex justify-between items-center">
            <h2 className="text-3xl font-bold text-gray-800">Total: <span className="text-green-600">${totalPrice.toFixed(2)}</span></h2>
            <button
              className="bg-green-600 text-white px-8 py-4 rounded-full hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-2xl"
              onClick={() => navigate('/payment')}
            >
              Lanjutkan ke Pembayaran
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
