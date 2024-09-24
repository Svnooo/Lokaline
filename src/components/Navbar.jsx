import {
  Bars3Icon,
  ChevronDownIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  AcademicCapIcon,
  Bars4Icon,
  ChatBubbleOvalLeftIcon,
  InformationCircleIcon,
  NewspaperIcon,
  PhoneIcon,
  UserGroupIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import {
  Button,
  Collapse,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Navbar,
  Typography,
  Input,
  Checkbox
} from "@material-tailwind/react";
import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../index.css";
import DarkModeToggle from './DarkModeToggle';
import { LanguageContext } from './Languagecontext';
import { ThemeContext } from './Themecontext';


// NavListMenu Component
function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { isDarkMode } = useContext(ThemeContext);
  const { translateText } = useContext(LanguageContext);

  const navListMenuItems = [
    {
      title: translateText("Help and Support", "Bantuan dan Dukungan"),
      description: translateText("Find the perfect solution for your needs.", "Temukan solusi sempurna untuk kebutuhan Anda."),
      icon: InformationCircleIcon,
      path: "/BantuandanDukungan",
    },
    {
      title: translateText("News and Articles", "Berita dan Artikel"),
      description: translateText("Read insightful articles, tips, and expert opinions.", "Baca artikel berwawasan, tips, dan pendapat ahli."),
      icon: NewspaperIcon,
      path: "/BeritadanArtikel",
    },
    {
      title: translateText("Catalog", "Katalog"),
      description: translateText("Find the perfect solution for your needs.", "Temukan solusi sempurna untuk kebutuhan Anda."),
      icon: Bars4Icon,
      path: "/Catalog",
    },
    {
      title: translateText("Discussion Forum", "Forum Diskusi"),
      description: translateText("Meet and learn about our dedication", "Bertemu dan pelajari tentang dedikasi kami"),
      icon: UserGroupIcon,
      path: "/ForumDiskusi",
    },
    {
      title: translateText("Contact and Location", "Kontak dan Lokasi"),
      description: translateText("Reach out to us for assistance or inquiries", "Hubungi kami untuk bantuan atau pertanyaan"),
      icon: PhoneIcon,
      path: "/KontakdanLokasi",
    },
    {
      title: translateText("Training and Webinars", "Pelatihan dan Webinar"),
      description: translateText("Learn how we can help you achieve your goals.", "Pelajari bagaimana kami dapat membantu Anda mencapai tujuan Anda."),
      icon: AcademicCapIcon,
      path: "/PelatihandanWebinar",
    },
    {
      title: translateText("UMKM Profile", "Profil UMKM"),
      description: translateText("Explore limited-time deals and bundles", "Jelajahi penawaran dan paket terbatas waktu"),
      icon: UserIcon,
      path: "/ProfileUMKM",
    },
    {
      title: translateText("Testimonials", "Testimoni"),
      description: translateText("Find the perfect solution for your needs.", "Temukan solusi sempurna untuk kebutuhan Anda."),
      icon: ChatBubbleOvalLeftIcon,
      path: "/Testimoni",
    },
  ];

  const renderItems = navListMenuItems.map(({ icon: Icon, title, description, path }, key) => (
    <MenuItem
      key={key}
      className={`flex items-center gap-3 cursor-pointer ${isDarkMode ? 'text-white' : ''}`}
      onClick={() => navigate(path)}
    >
      <div className={`flex items-center justify-center rounded-lg p-2 ${isDarkMode ? 'bg-blue-gray-800' : '!bg-blue-gray-50'}`}>
        <Icon className={`h-6 w-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} />
      </div>
      <div>
        <Typography
          variant="h6"
          color={isDarkMode ? "white" : "blue-gray"}
          className="flex items-center text-sm font-bold"
        >
          {title}
        </Typography>
        <Typography
          variant="paragraph"
          className={`text-xs !font-medium ${isDarkMode ? 'text-blue-gray-200' : 'text-blue-gray-500'}`}
        >
          {description}
        </Typography>
      </div>
    </MenuItem>
  ));

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-small">
            <ListItem
              className={`flex items-center gap-2 py-2 pr-4 font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              {translateText("Resources", "Sumber Daya")}
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? "rotate-180" : ""}`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen ? "rotate-180" : ""}`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className={`hidden max-w-screen-xl rounded-xl lg:block ${isDarkMode ? 'bg-gray-800' : ''}`}>
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

// NavList Component
function NavList() {
  const { translateText } = useContext(LanguageContext);
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className="flex items-center justify-center w-full">
      <List className={`mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
        <Typography
          as={Link}
          to="/"
          variant="small"
          color={isDarkMode ? "white" : "blue-gray"}
          className="font-medium"
        >
          <ListItem className={`flex items-center gap-2 py-2 pr-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            {translateText("Home", "Beranda")}
          </ListItem>
        </Typography>
        <NavListMenu />
        <Typography
          as={Link}
          to="/KontakdanLokasi"
          variant="small"
          color={isDarkMode ? "white" : "blue-gray"}
          className="font-medium"
        >
          <ListItem className={`flex items-center gap-2 py-2 pr-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            {translateText("Contact Us", "Hubungi Kami")}
          </ListItem>
        </Typography>
      </List>
    </div>
  )
}




function LoginModal({ isOpen, onClose, openRegister }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full relative">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          ✕
        </button>

        <form className="space-y-4">
          <div className="text-center">
            <img
              src="/assets/Logo-Localine.png"
              alt="Logo Localine"
              className="mx-auto w-24 h-18"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Email
            </label>
            <Input type="email" placeholder="email" className="input input-bordered w-full" />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Password
            </label>
            <Input type="password" placeholder="password" className="input input-bordered w-full" />
          </div>
          <div className="flex justify-between items-center">
            <Checkbox label="Remember me" />
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>
          <Button type="submit" fullWidth variant="gradient">
            Login
          </Button>
          <div className="text-center mt-4">
            <a href="#" className="text-sm text-blue-600 hover:underline" onClick={(e) => {
              e.preventDefault();
              onClose();
              openRegister();
            }}>
              Belum Punya Akun? Daftar Sekarang!
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

// Register Modal Component
function RegisterModal({ isOpen, onClose, openLogin }) {
  const [shouldNavigateToLogin, setShouldNavigateToLogin] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the registration logic
    // For now, we'll just set the state to navigate to login
    setShouldNavigateToLogin(true);
  };

  if (shouldNavigateToLogin) {
    // Close the register modal and open the login modal
    onClose();
    openLogin();
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full relative">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          ✕
        </button>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="text-center">
            <img
              src="/assets/Logo-Localine.png"
              alt="Logo Localine"
              className="mx-auto w-24 h-18"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Nama
            </label>
            <Input type="text" placeholder="Nama" className="input input-bordered w-full" />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Email
            </label>
            <Input type="email" placeholder="email" className="input input-bordered w-full" />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Password
            </label>
            <Input type="password" placeholder="password" className="input input-bordered w-full" />
          </div>
          <Button type="submit" fullWidth variant="gradient">
            Daftar
          </Button>
          <div className="text-center mt-4">
            <a href="#" className="text-sm text-blue-600 hover:underline" onClick={(e) => {
              e.preventDefault();
              onClose();
              openLogin();
            }}>
              Sudah Punya Akun? Log In Sekarang!
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}


export function NavbarWithMegaMenu() {
  const [openNav, setOpenNav] = useState(false);
  const [isWhite, setIsWhite] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const { isDarkMode } = useContext(ThemeContext);
  const { selectedLanguage, setSelectedLanguage, translateText } = useContext(LanguageContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / document.documentElement.scrollHeight) * 100;

      // Jika scroll lebih dari 10%, atur navbar dengan border dan warna teks
      setIsScrolled(scrollPercentage > 5);

      // Atur gaya berdasarkan posisi scroll
      const contentStart = document.querySelector('.content-start');
      if (contentStart) {
        const contentStartPosition = contentStart.getBoundingClientRect().top;
        setIsWhite(contentStartPosition <= 0);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 960) setOpenNav(false);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  const openLoginModal = () => {
    setIsLoginModalOpen(true);
    setIsRegisterModalOpen(false);
  };

  const openRegisterModal = () => {
    setIsRegisterModalOpen(true);
    setIsLoginModalOpen(false);
  };

  const handleCartClick = () => {
    navigate("/cart");
  };

  const showCartIcon = ['/Catalog', '/cart', '/payment'].includes(location.pathname);

  return (
    <>
      <Navbar
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? isDarkMode
              ? 'navbar-dark-scrolled'
              : 'navbar-light-scrolled'
            : isWhite
              ? 'navbar-white'
              : 'navbar-transparent'
          }`}
      >
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <Typography
            as={Link}
            to="/"
            variant="h6"
            className="cursor-pointer py-1.5 flex-shrink-0"
            onMouseEnter={() => setIsLogoHovered(true)}
            onMouseLeave={() => setIsLogoHovered(false)}
          >
            <div className="flex items-center">
              <img
                src={isLogoHovered ? "/assets/Logo-Localine-Glow.png" : "/assets/Logo-Localine.png"}
                alt="Logo Localine"
                className="h-40 w-40 sm:h-20 sm:w-24 transition-opacity duration-300"
              />
            </div>
          </Typography>
          {/* Center nav items - hidden on mobile, visible on larger screens */}
          <div className="hidden lg:flex items-center justify-center flex-grow">
            <NavList isWhite={isWhite} />
          </div>

          {/* Right side items */}
          <div className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0">
            {/* Language switch button */}
            <Button
              variant="text"
              size="sm"
              onClick={() => setSelectedLanguage(selectedLanguage === 'en' ? 'id' : 'en')}
              className="locale-text text-xs sm:text-sm"
            >
              {selectedLanguage === 'en' ? 'ID' : 'EN'}
            </Button>

            {showCartIcon && (
              <IconButton
                variant="text"
                color={isWhite ? "black" : "white"}
                onClick={handleCartClick}
                className="p-1 sm:p-2"
              >
                <ShoppingBagIcon className={`w-4 h-4 sm:w-6 sm:h-6 ${isWhite ? 'text-black' : 'text-white'}`} />
              </IconButton>
            )}

            <DarkModeToggle />

            {/* Login button - hidden on mobile, visible on larger screens */}
            <Button
              variant={isWhite ? "gradient" : "outlined"}
              size="sm"
              onClick={openLoginModal}
              className={`hidden sm:inline-block login-button ${isWhite
                ? 'bg-black text-white hover:bg-white hover:text-black'
                : 'border-white text-white hover:bg-white hover:text-black'
                }`}
            >
              {translateText("Log In", "Masuk")}
            </Button>

            {/* Mobile menu button */}
            <IconButton
              variant="text"
              color={isWhite ? "black" : "white"}
              className="lg:hidden"
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <XMarkIcon className={`h-6 w-6 ${isWhite ? 'text-black' : 'text-white'}`} strokeWidth={2} />
              ) : (
                <Bars3Icon className={`h-6 w-6 ${isWhite ? 'text-black' : 'text-white'}`} strokeWidth={2} />
              )}
            </IconButton>
          </div>
        </div>

        {/* Mobile menu */}
        <Collapse open={openNav}>
          <NavList isWhite={isWhite} />
          <div className="flex flex-col w-full items-center gap-2 lg:hidden">
            <Button
              variant="text"
              size="sm"
              onClick={() => setSelectedLanguage(selectedLanguage === 'en' ? 'id' : 'en')}
              className="locale-text w-full"
            >
              {selectedLanguage === 'en' ? 'Switch to Bahasa Indonesia' : 'Ganti ke Bahasa Inggris'}
            </Button>
            <Button
              variant="gradient"
              size="sm"
              fullWidth
              onClick={openLoginModal}
              className="login-button"
            >
              {translateText("Log In", "Masuk")}
            </Button>
            <Button
              variant="outlined"
              size="sm"
              fullWidth
              onClick={openRegisterModal}
              className={`${isWhite
                ? 'border-black text-black hover:bg-black hover:text-white'
                : 'border-white text-white hover:bg-white hover:text-black'
                }`}
            >
              {translateText("Register", "Daftar")}
            </Button>
          </div>
        </Collapse>
      </Navbar>

      {/* Login Modal */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        openRegister={openRegisterModal}
      />

      {/* Register Modal */}
      <RegisterModal
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
        openLogin={openLoginModal}
      />
    </>
  );
}