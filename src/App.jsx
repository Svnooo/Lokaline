import 'leaflet/dist/leaflet.css';
import React, { useState, useCallback, useEffect } from "react";
import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import './App.css';
import { CartProvider } from "./components/CartContext";
import Footer from "./components/Footer";
import { NavbarWithMegaMenu } from "./components/Navbar";
import BantuandanDukungan from "./pages/BantuandanDukungan/BantuandanDukungan";
import BeritadanArtikel from "./pages/BeritadanArtikel/BeritadanArtikel";
import Cart from "./pages/CartPage.jsx/Cart";
import Catalog from "./pages/Catalog/Catalog";
import Dashboard from "./pages/Dashboard/Dashboard";
import ProductDetail from "./pages/DetailProduct/DetailProduct";
import ForumDiskusi from "./pages/ForumDiskusi/ForumDiskusi";
import KontakdanLokasi from "./pages/KontakdanLokasi/KontakdanLokasi";
import Login from "./pages/Login/Login";
import Payment from "./pages/Payment/Payment";
import PelatihandanWebinar from "./pages/PelatihandanWebinar/PelatihandanWebinar";
import ProfileUMKM from "./pages/ProfileUMKM/ProfileUMKM";
import Register from "./pages/Register/Register";
import Testimoni from "./pages/Testimoni/Testimoni";
import { LanguageProvider } from './components/Languagecontext';
import AboutUs from './pages/AboutUs/AboutUs';
import LoadingScreen from './components/LoadingScreen'; 

const PageWrapper = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  useEffect(() => {
    // Cek apakah saat ini bukan di halaman dashboard ("/")
    if (location.pathname !== '/') {
      setIsLoading(true);
      // Simulasi penundaan untuk memastikan layar loading terlihat
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000); // 2 detik penundaan, bisa disesuaikan dengan kebutuhan

      return () => clearTimeout(timer);
    } else {
      setIsLoading(false); // Jangan tampilkan loading screen di halaman dashboard
    }
  }, [location]);

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      {children}
    </>
  );
};

function App() {
  return (
    <CartProvider>
      <LanguageProvider>
        <Router>
          <div id="root">
            <NavbarWithMegaMenu />
            <main>
              <PageWrapper>
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/Login" element={<Login />} />
                  <Route path="/Register" element={<Register />} />
                  <Route path="/BantuandanDukungan" element={<BantuandanDukungan />} />
                  <Route path="/BeritadanArtikel" element={<BeritadanArtikel />} />
                  <Route path="/product/:productId" element={<ProductDetail />} />
                  <Route path="/Catalog" element={<Catalog />} />
                  <Route path="/ForumDiskusi" element={<ForumDiskusi />} />
                  <Route path="/KontakdanLokasi" element={<KontakdanLokasi />} />
                  <Route path="/PelatihandanWebinar" element={<PelatihandanWebinar />} />
                  <Route path="/ProfileUMKM" element={<ProfileUMKM />} />
                  <Route path="/Testimoni" element={<Testimoni />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/Payment" element={<Payment />} />
                  <Route path="/AboutUs" element={<AboutUs />} />
                </Routes>
              </PageWrapper>
            </main>
            <Footer />
          </div>
        </Router>
      </LanguageProvider>
    </CartProvider>
  );
}

export default App;
