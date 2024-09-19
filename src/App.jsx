import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import BantuandanDukungan from './pages/BantuandanDukungan/BantuandanDukungan'
import BeritadanArtikel from './pages/BeritadanArtikel/BeritadanArtikel'
import Catalog from './pages/Catalog/Catalog'
import Dashboard from './pages/Dashboard/Dashboard'
import ForumDiskusi from './pages/ForumDiskusi/ForumDiskusi'
import KontakdanLokasi from './pages/KontakdanLokasi/KontakdanLokasi'
import Login from './pages/Login/Login'
import PelatihandanWebinar from './pages/PelatihandanWebinar/PelatihandanWebinar'
import ProfileUMKM from './pages/ProfileUMKM/ProfileUMKM'
import Testimoni from './pages/Testimoni/Testimoni'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/BantuandanDukungan" element={<BantuandanDukungan />} />
        <Route path="/BeritadanArtikel" element={<BeritadanArtikel />} />
        <Route path="/Catalog" element={<Catalog />} />
        <Route path="/ForumDiskusi" element={<ForumDiskusi />} />
        <Route path="/KontakdanLokasi" element={<KontakdanLokasi />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/PelatihandanWebinar" element={<PelatihandanWebinar />} />
        <Route path="/ProfileUMKM" element={<ProfileUMKM />} />
        <Route path="/Testimoni" element={<Testimoni />} />
      </Routes>
    </Router>

  );
}

export default App;