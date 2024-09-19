import Content from './components/Dassboard/Content';
import Footer from './components/Dassboard/Footer';
import Login from './components/Dassboard/Login';
import { NavbarWithMegaMenu } from './components/Dassboard/Navbar';

function App() {
  return (
    <>
      <NavbarWithMegaMenu/>
      <Content />
      <Footer />
      <Login />
    </>
  );
}

export default App;