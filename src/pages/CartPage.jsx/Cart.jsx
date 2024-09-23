import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { CartContext } from '../../components/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate(); // Use useNavigate for navigation

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Keranjang Belanja</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Keranjang Anda kosong.</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div key={index} className="flex justify-between items-center border-b py-4">
              <div className="flex items-center">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover mr-4" />
                <div>
                  <h2 className="text-lg font-semibold">{item.name} ({item.variant})</h2>
                  <p className="text-gray-600">Qty: {item.quantity}</p>
                </div>
              </div>
              <div>
                <span className="text-lg font-bold">${item.price * item.quantity}</span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="ml-4 text-red-600 hover:underline"
                >
                  Hapus
                </button>
              </div>
            </div>
          ))}

          <div className="text-right mt-6">
            <h2 className="text-xl font-bold">Total: ${totalPrice}</h2>
            <button
              className="bg-green-600 text-white px-6 py-3 rounded-lg mt-4"
              onClick={() => navigate('/payment')}  // Navigasi ke PaymentPage dengan navigate
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
