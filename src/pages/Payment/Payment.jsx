import React, { useContext, useState } from 'react';
import { CartContext } from '../../components/CartContext';

// Helper function to format numbers as Rupiah
const formatPrice = (price) => {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price).replace('IDR', 'Rp').trim();
};

const Payment = () => {
  const { cartItems } = useContext(CartContext);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const paymentMethods = [
    { id: 'bca', name: 'Bank Transfer (BCA)', logo: '/assets/BCA.png', description: 'Proses cepat dalam 1 menit' },
    { id: 'mandiri', name: 'Bank Transfer (Mandiri)', logo: '/assets/mandiri.png', description: 'Terhubung langsung dengan Mandiri Online' },
    { id: 'credit_card', name: 'Kartu Kredit', logo: '/assets/Kreditcard.png', description: 'Dukung Visa & MasterCard' },
    { id: 'gopay', name: 'GoPay', logo: '/assets/gopay.png', description: 'Pembayaran cepat dan mudah' },
    { id: 'ovo', name: 'OVO', logo: '/assets/ovo.png', description: 'Cashback menarik untuk OVO' },
    { id: 'dana', name: 'DANA', logo: '/assets/DANA.png', description: 'Aman dengan DANA Protection' },
  ];

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    if (selectedPaymentMethod) {
      alert(`Anda memilih metode pembayaran: ${selectedPaymentMethod}`);
      // Logic for processing the payment (API call, redirect, etc.)
    } else {
      alert('Please select a payment method.');
    }
  };

  return (
    <div className="container mx-auto py-10 mt-24">
      <center>
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Pembayaran</h1>
      </center>
      <br />
      <br />

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Keranjang Anda Kosong</p>
      ) : (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Keranjang Belanja Anda :</h2>
          <div className="border-b pb-4 mb-4">
            {cartItems.map((item, index) => (
              <div key={index} className="flex justify-between items-center border-b py-2">
                <div className="flex items-center">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="object-cover mr-4 shadow-md"
                    style={{ maxWidth: '150px', height: 'auto' }} // Adjusts to real image size
                  />
                  <div>
                    <h3 className="text-lg font-bold">{item.name} ({item.variant})</h3>
                    <p className="text-gray-600">Jumlah : {item.quantity}</p>
                  </div>
                </div>
                <span className="text-lg font-bold">{formatPrice(item.price * item.quantity)}</span>
              </div>
            ))}
          </div>

          {/* Align Total to the Right */}
          <div className="flex justify-end">
            <h2 className="text-xl font-bold mb-4">Total: {formatPrice(totalPrice)}</h2>
          </div>
          <br />

          <form onSubmit={handlePaymentSubmit}>
            <h3 className="text-xl font-semibold mb-4">Pilih Metode Pembayaran :</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {paymentMethods.map((method) => (
                <div
                  key={method.id}
                  className={`p-4 border rounded-lg cursor-pointer transition-all ${selectedPaymentMethod === method.name ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}
                  onClick={() => setSelectedPaymentMethod(method.name)}
                >
                  <div className="flex items-center">
                    <img
                      src={method.logo}
                      alt={method.name}
                      className="w-10 h-10 object-contain mr-4"
                    />
                    <div>
                      <h4 className="text-lg font-semibold">{method.name}</h4>
                      <p className="text-sm text-gray-500">{method.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-3 rounded-lg mt-6 w-full hover:bg-green-700 transition-all"
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
