import React, { useState } from 'react';
import { Search, ShoppingCart, BarChart, Settings, User } from 'lucide-react';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('pos');

  const menu = [
    { id: 'pos', icon: <ShoppingCart />, label: 'POS' },
    { id: 'inventory', icon: <Search />, label: 'Inventory' },
    { id: 'reports', icon: <BarChart />, label: 'Reports' },
    { id: 'settings', icon: <Settings />, label: 'Settings' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'pos':
        return <POSScreen />;
      case 'inventory':
        return <InventoryScreen />;
      case 'reports':
        return <ReportsScreen />;
      case 'settings':
        return <SettingsScreen />;
      default:
        return <POSScreen />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-20 bg-blue-600 text-white flex flex-col items-center py-4">
        {menu.map((item) => (
          <button
            key={item.id}
            className={`p-3 rounded-lg mb-4 ${activeTab === item.id ? 'bg-blue-700' : ''}`}
            onClick={() => setActiveTab(item.id)}
          >
            {item.icon}
            <div className="text-xs mt-1">{item.label}</div>
          </button>
        ))}
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">TradeSmart POS</h1>
          <div className="flex items-center">
            <User className="mr-2" />
            <span>John Doe</span>
          </div>
        </header>

        {/* Content area */}
        <main className="flex-1 p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

const POSScreen = () => (
  <div className="grid grid-cols-3 gap-6 h-full">
    <div className="col-span-2 bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Current Sale</h2>
      {/* Placeholder for product list */}
      <div className="space-y-2">
        <div className="flex justify-between items-center p-2 bg-gray-100 rounded">
          <span>Product 1</span>
          <span>$10.00</span>
        </div>
        <div className="flex justify-between items-center p-2 bg-gray-100 rounded">
          <span>Product 2</span>
          <span>$15.00</span>
        </div>
      </div>
      <div className="mt-4 text-right">
        <div className="text-lg font-semibold">Total: $25.00</div>
        <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded">Complete Sale</button>
      </div>
    </div>
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
      <div className="grid grid-cols-2 gap-4">
        <button className="p-4 bg-blue-100 text-blue-700 rounded">Add Product</button>
        <button className="p-4 bg-purple-100 text-purple-700 rounded">Apply Discount</button>
        <button className="p-4 bg-yellow-100 text-yellow-700 rounded">Refund</button>
        <button className="p-4 bg-red-100 text-red-700 rounded">Void Sale</button>
      </div>
    </div>
  </div>
);

const InventoryScreen = () => (
  <div className="bg-white rounded-lg shadow p-6">
    <h2 className="text-xl font-semibold mb-4">Inventory Management</h2>
    <p>Inventory management features will be displayed here.</p>
  </div>
);

const ReportsScreen = () => (
  <div className="bg-white rounded-lg shadow p-6">
    <h2 className="text-xl font-semibold mb-4">Sales Reports</h2>
    <p>Sales reports and analytics will be displayed here.</p>
  </div>
);

const SettingsScreen = () => (
  <div className="bg-white rounded-lg shadow p-6">
    <h2 className="text-xl font-semibold mb-4">System Settings</h2>
    <p>System configuration options will be available here.</p>
  </div>
);

export default Navbar;