import React, { useState, useEffect, useContext } from "react";
import {
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
  ShoppingBagIcon,
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
  Typography,
  Select,
  Option
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import SearchForm from "./SearchBar";
import { ThemeContext } from './Themecontext';
import { LanguageContext } from './Languagecontext';
import DarkModeToggle from './DarkModeToggle';



// NavListMenu Component
function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const navListMenuItems = [
    {
      title: "Bantuan dan Dukungan",
      description: "Find the perfect solution for your needs.",
      icon: InformationCircleIcon,
      path: "/BantuandanDukungan",
    },
    {
      title: "Forum Diskusi",
      description: "Meet and learn about our dedication",
      icon: UserGroupIcon,
      path: "/ForumDiskusi",
    },
    {
      title: "Catalog",
      description: "Find the perfect solution for your needs.",
      icon: Bars4Icon,
      path: "/Catalog",
    },
    {
      title: "Pelatihan dan Webinar",
      description: "Learn how we can help you achieve your goals.",
      icon: AcademicCapIcon,
      path: "/PelatihandanWebinar",
    },
    {
      title: "Kontak dan Lokasi",
      description: "Reach out to us for assistance or inquiries",
      icon: PhoneIcon,
      path: "/KontakdanLokasi",
    },
    {
      title: "Berita dan Artikel",
      description: "Read insightful articles, tips, and expert opinions.",
      icon: NewspaperIcon,
      path: "/BeritadanArtikel",
    },
    {
      title: "Profile UMKM",
      description: "Explore limited-time deals and bundles",
      icon: UserIcon,
      path: "/ProfileUMKM",
    },
    {
      title: "Testimoni",
      description: "Find the perfect solution for your needs.",
      icon: ChatBubbleOvalLeftIcon,
      path: "/Testimoni",
    },
  ];

  const renderItems = navListMenuItems.map(({ title, description, path }, key) => (
    <MenuItem
      key={key}
      className="flex items-center gap-3 cursor-pointer"
      onClick={() => navigate(path)}
    >
      <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
        <ChevronDownIcon className="h-6 text-gray-900 w-6" />
      </div>
      <div>
        <Typography
          variant="h6"
          color="blue-gray"
          className="flex items-center text-sm font-bold"
        >
          {title}
        </Typography>
        <Typography
          variant="paragraph"
          className="text-xs !font-medium text-blue-gray-500"
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
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Resources
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? "rotate-180" : ""
                  }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen ? "rotate-180" : ""
                  }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
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
// NavList Component
function NavList() {
  const { translateText } = useContext(LanguageContext);

  return (
    <div className="flex items-center justify-between w-full">
      <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 text-gray-900">
        <Typography
          as={Link}
          to="/"
          variant="small"
          color="blue-gray"
          className="font-medium"
        >
          <ListItem className="flex items-center gap-2 py-2 pr-4 text-gray-900">
            {translateText("Home", "Beranda")}
          </ListItem>
        </Typography>
        <NavListMenu />
        <Typography
          as={Link}
          to="/KontakdanLokasi"
          variant="small"
          color="blue-gray"
          className="font-medium"
        >
          <ListItem className="flex items-center gap-2 py-2 pr-4 text-gray-900">
            {translateText("Contact Us", "Hubungi Kami")}
          </ListItem>
        </Typography>
      </List>

      <div className="flex-grow max-w-xs">
        <SearchForm />
      </div>
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

// Main NavbarWithMegaMenu Component
export function NavbarWithMegaMenu() {
  const [openNav, setOpenNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const { isDarkMode } = useContext(ThemeContext);
  const { translateText } = useContext(LanguageContext);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
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

  return (
    <>
      <Navbar
        className={`sticky top-0 w-full max-w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg" : "bg-transparent"
        } !rounded-none ${isDarkMode ? "bg-gray-900 text-white" : ""}`}
      >
        <div className="flex items-center justify-between text-blue-gray-900 w-full">
          <Typography as={Link} to="/" variant="h6" className="mr-4 cursor-pointer py-1.5 lg:ml-2">
            <div className="flex items-center">
              <img
                src="/assets/Logo-Localine.png"
                alt="Logo Localine"
                className="h-18 w-20"
              />
              <span className="ml-4 text-lg font-semibold text-black">
                Localine
              </span>
            </div>
          </Typography>
          <div className="hidden lg:block flex-grow">
            <NavList />
          </div>
          <div className="hidden lg:flex items-center space-x-4">
            <IconButton
              variant="text"
              color="blue-gray"
              onClick={handleCartClick}
            >
              <ShoppingBagIcon className="w-6 h-6 text-gray-900" />
            </IconButton>
            <DarkModeToggle />
            <Button variant="gradient" size="sm" onClick={openLoginModal}>
              {translateText("Log In", "Masuk")}
            </Button>
          </div>
          <IconButton
            variant="text"
            color="blue-gray"
            className="lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
          <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
            <Button variant="gradient" size="md" fullWidth onClick={openLoginModal}>
              {translateText("Log In", "Masuk")}
            </Button>
            <Button variant="outlined" size="md" fullWidth onClick={openRegisterModal}>
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