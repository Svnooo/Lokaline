import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { NavbarWithMegaMenu } from "./components/Navbar";
import BantuandanDukungan from "./pages/BantuandanDukungan/BantuandanDukungan";
import BeritadanArtikel from "./pages/BeritadanArtikel/BeritadanArtikel";
import Catalog from "./pages/Catalog/Catalog";
import Dashboard from "./pages/Dashboard/Dashboard";
import ForumDiskusi from "./pages/ForumDiskusi/ForumDiskusi";
import KontakdanLokasi from "./pages/KontakdanLokasi/KontakdanLokasi";
import Login from "./pages/Login/Login";
import PelatihandanWebinar from "./pages/PelatihandanWebinar/PelatihandanWebinar";
import ProfileUMKM from "./pages/ProfileUMKM/ProfileUMKM";
import Register from "./pages/Register/Register";
import Testimoni from "./pages/Testimoni/Testimoni";
import Footer from "./components/Footer";
import './App.css'; 
import 'leaflet/dist/leaflet.css';


function App() {
  return (
    <Router>
      <div id="root">
        <NavbarWithMegaMenu />
        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/BantuandanDukungan" element={<BantuandanDukungan />} />
            <Route path="/BeritadanArtikel" element={<BeritadanArtikel />} />
            <Route path="/Catalog" element={<Catalog />} />
            <Route path="/ForumDiskusi" element={<ForumDiskusi />} />
            <Route path="/KontakdanLokasi" element={<KontakdanLokasi />} />
            <Route path="/PelatihandanWebinar" element={<PelatihandanWebinar />} />
            <Route path="/ProfileUMKM" element={<ProfileUMKM />} />
            <Route path="/Testimoni" element={<Testimoni />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
