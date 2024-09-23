import React, { useContext, useState } from 'react';
import { CartContext } from '../../components/CartContext';

const Payment = () => {
  const { cartItems } = useContext(CartContext);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  // Add logos for each payment method
  const paymentMethods = [
    { id: 'bca', name: 'Bank Transfer (BCA)', logo: '/assets/BCA.png' },
    { id: 'mandiri', name: 'Bank Transfer (Mandiri)', logo: '/assets/mandiri.png' },
    { id: 'credit_card', name: 'Kartu Kredit', logo: '/assets/Kreditcard.png' },
    { id: 'gopay', name: 'GoPay', logo: '/assets/gopay.png' },
    { id: 'ovo', name: 'OVO', logo: '/assets/ovo.png' },
    { id: 'dana', name: 'DANA', logo: '/assets/DANA.png' },
  ];

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    if (selectedPaymentMethod) {
      alert(`Anda memilih metode pembayaran: ${selectedPaymentMethod}`);
      // Logika untuk melanjutkan pembayaran (API call, redirect, dll.)
    } else {
      alert('Silakan pilih metode pembayaran terlebih dahulu.');
    }
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Pembayaran</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Keranjang Anda kosong.</p>
      ) : (
        <div>
          <h2 className="text-xl font-semibold mb-4">Produk di Keranjang</h2>
          <div className="border-b pb-4 mb-4">
            {cartItems.map((item, index) => (
              <div key={index} className="flex justify-between items-center border-b py-2">
                <div className="flex items-center">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover mr-4" />
                  <div>
                    <h3 className="text-lg">{item.name} ({item.variant})</h3>
                    <p className="text-gray-600">Qty: {item.quantity}</p>
                  </div>
                </div>
                <span className="text-lg font-bold">${item.price * item.quantity}</span>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold mb-4">Total: ${totalPrice}</h2>

          <form onSubmit={handlePaymentSubmit}>
            <h3 className="text-lg font-semibold mb-2">Pilih Metode Pembayaran:</h3>
            <div className="mb-4">
              {paymentMethods.map((method) => (
                <div key={method.id} className="flex items-center mb-2">
                  <input
                    type="radio"
                    id={method.id}
                    name="payment"
                    value={method.name}
                    onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                    className="mr-2"
                  />
                  <label htmlFor={method.id} className="flex items-center">
                    <img
                      src={method.logo}
                      alt={method.name}
                      className="w-8 h-8 object-contain mr-2" // Add styling for the logo
                    />
                    {method.name}
                  </label>
                </div>
              ))}
            </div>

            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-3 rounded-lg mt-4"
            >
              Bayar Sekarang
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Payment;
