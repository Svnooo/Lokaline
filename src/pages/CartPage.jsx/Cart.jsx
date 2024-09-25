import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../components/CartContext';
import { Checkbox, Button } from "@material-tailwind/react";

// Helper function to format numbers as Rupiah
const formatPrice = (price) => {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price).replace('IDR', 'Rp').trim();
};

const Cart = () => {
  const { cartItems, removeFromCart, updateCartItemQuantity } = useContext(CartContext);
  const navigate = useNavigate();
  const [selectedItems, setSelectedItems] = useState({});

  const toggleItemSelection = (itemId) => {
    setSelectedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const removeSelectedItems = () => {
    Object.keys(selectedItems).forEach(itemId => {
      if (selectedItems[itemId]) {
        removeFromCart(itemId);
      }
    });
    // Clear selection after removing items
    setSelectedItems({});
  };

  const getSelectedItemsTotal = () => {
    return cartItems.reduce((total, item) =>
      total + (selectedItems[item.id] ? item.price * item.quantity : 0), 0
    );
  };

  const getSelectedItemsCount = () => {
    return Object.values(selectedItems).filter(Boolean).length;
  };

  const proceedToPayment = () => {
    const selectedItemsForPayment = cartItems.filter(item => selectedItems[item.id]);
    navigate('/payment', { state: { selectedItems: selectedItemsForPayment } });
  };

  return (
    <div className="container mx-auto py-10 mt-16">
      <br />
      <br />
      <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-800">🛒 Keranjang Belanja Anda</h1>

      {cartItems.length === 0 ? (
        <div className="text-center">
          <p className="text-xl text-gray-600 mb-6">Keranjang Anda kosong, ayo belanja lebih banyak!</p>
          <Button
            color="blue"
            size="lg"
            ripple="light"
            onClick={() => navigate('/catalog')}
          >
            Lanjutkan Belanja
          </Button>
        </div>
      ) : (
        <div className="bg-white shadow-2xl rounded-lg p-8 animate-slide-up">
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-b py-6 hover:bg-gray-100 transition-colors duration-300 rounded-lg">
              <div className="flex items-center">
                <Checkbox
                  id={`checkbox-${item.id}`}
                  checked={selectedItems[item.id] || false}
                  onChange={() => toggleItemSelection(item.id)}
                  color="blue"
                  className="mr-4"
                />
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg mr-6 transform hover:scale-110 transition-transform duration-500 shadow-md"
                />
                <div>
                  <h2 className="text-xl font-bold text-gray-800">{item.name}</h2>
                  <p className="text-gray-600">Varian: <span className="font-medium">{item.variant}</span></p>
                  <p className="text-gray-600">
                    Jumlah: <span className="font-semibold"> {item.quantity}</span>
                  </p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold text-green-600">{formatPrice(item.price * item.quantity)}</span>
              </div>
            </div>
          ))}

          <div className="mt-8 p-4 bg-gray-100 rounded-lg shadow-md flex justify-between items-center flex-wrap">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 w-full">
              Total Terpilih: <span className="text-green-600">{formatPrice(getSelectedItemsTotal())}</span>
            </h2>
            <div className="flex flex-wrap gap-4 w-full">
              <Button
                color="blue"
                size="lg"
                onClick={() => navigate('/catalog')}
              >
                Kembali ke Katalog
              </Button>
              <Button
                color="red"
                size="lg"
                onClick={removeSelectedItems}
                disabled={getSelectedItemsCount() === 0}
              >
                Hapus Item Terpilih ({getSelectedItemsCount()})
              </Button>
              <Button
                color="green"
                size="lg"
                onClick={proceedToPayment}
                disabled={getSelectedItemsCount() === 0}
              >
                Checkout Item Terpilih ({getSelectedItemsCount()})
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
