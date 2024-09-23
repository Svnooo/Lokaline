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
  Checkbox,
  Collapse,
  IconButton,
  Input,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Navbar,
  Typography
} from "@material-tailwind/react";
import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
    <div className="flex items-center justify-between w-full">
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
            <h1 className="text-2xl font-bold mt-2">Localine</h1>
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
            <h1 className="text-2xl font-bold mt-2">Localine</h1>
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
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const { isDarkMode } = useContext(ThemeContext);
  const { selectedLanguage, setSelectedLanguage, translateText } = useContext(LanguageContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setOpenNav(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-transparent'
          } shadow-none !rounded-none`}
      >
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <Typography
            as={Link}
            to="/"
            variant="h6"
            className={`cursor-pointer py-1.5 ${isDarkMode ? 'text-white' : 'text-black'
              }`}
          >
            <div className="flex items-center">
              <img
                src="/assets/Logo-Localine.png"
                alt="Logo Localine"
                className="h-18 w-20"
              />
              <span className={`ml-4 text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-black'
                }`}>
                Localine
              </span>
            </div>
          </Typography>

          {/* Center nav items */}
          <div className="hidden lg:flex items-center justify-center">
            <NavList />
          </div>

          {/* Right side items */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language switch button */}
            <Button
              variant="text"
              size="sm"
              onClick={() => setSelectedLanguage(selectedLanguage === 'en' ? 'id' : 'en')}
              className={`${isDarkMode ? 'text-white' : 'text-black'
                }`}
            >
              {selectedLanguage === 'en' ? 'ID' : 'EN'}
            </Button>

            {showCartIcon && (
              <IconButton
                variant="text"
                color={isDarkMode ? "white" : "black"}
                onClick={handleCartClick}
              >
                <ShoppingBagIcon className={`w-6 h-6 ${isDarkMode ? 'text-white' : 'text-black'
                  }`} />
              </IconButton>
            )}
            <DarkModeToggle />
            <Button
              variant={isScrolled ? "gradient" : "outlined"}
              size="sm"
              onClick={openLoginModal}
              className={`${isDarkMode
                  ? 'border-white text-white hover:bg-white hover:text-black'
                  : isScrolled
                    ? 'bg-black text-white hover:bg-white hover:text-black'
                    : 'border-black text-black hover:bg-black hover:text-white'
                }`}
            >
              {translateText("Log In", "Masuk")}
            </Button>

          </div>

          {/* Mobile menu button */}
          <IconButton
            variant="text"
            color={isDarkMode ? "white" : "black"}
            className="lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className={`h-6 w-6 ${isDarkMode ? 'text-white' : 'text-black'
                }`} strokeWidth={2} />
            ) : (
              <Bars3Icon className={`h-6 w-6 ${isDarkMode ? 'text-white' : 'text-black'
                }`} strokeWidth={2} />
            )}
          </IconButton>
        </div>

        {/* Mobile menu */}
        <Collapse open={openNav}>
          <NavList />
          <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
            {/* Language switch button for mobile */}
            <Button
              variant="text"
              size="sm"
              onClick={() => setSelectedLanguage(selectedLanguage === 'en' ? 'id' : 'en')}
              className={`${isDarkMode ? 'text-white' : 'text-black'
                } w-full`}
            >
              {selectedLanguage === 'en' ? 'Switch to Bahasa Indonesia' : 'Ganti ke Bahasa Inggris'}
            </Button>
            <Button
              variant="gradient"
              size="md"
              fullWidth
              onClick={openLoginModal}
              className={isDarkMode ? 'text-white' : 'text-black'}
            >
              {translateText("Log In", "Masuk")}
            </Button>
            <Button
              variant="outlined"
              size="md"
              fullWidth
              onClick={openRegisterModal}
              className={`${isDarkMode
                  ? 'border-white text-white hover:bg-white hover:text-black'
                  : 'border-black text-black hover:bg-black hover:text-white'
                }`}
            >
              {translateText("Register", "Daftar")}
            </Button>
          </div>
        </Collapse>
      </Navbar>

      {/* <div className="h-16"></div>  */}

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