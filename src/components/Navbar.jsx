import {
  Bars3Icon,
  ChevronDownIcon,
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
  UserIcon
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
} from "@material-tailwind/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../index.css";

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

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const navigate = useNavigate();

  const renderItems = navListMenuItems.map(
    ({ icon, title, description, path }, key) => (
      <MenuItem
        key={key}
        className="flex items-center gap-3 rounded-lg cursor-pointer"
        onClick={() => navigate(path)}
      >
        <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
          {React.createElement(icon, {
            strokeWidth: 2,
            className: "h-6 text-gray-900 w-6",
          })}
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
    ),
  );

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
                className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? "rotate-180" : ""}`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen ? "rotate-180" : ""}`}
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

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 text-gray-900">
      <Typography as={Link} to="/" variant="small" color="blue-gray" className="font-medium">
        <ListItem className="flex items-center gap-2 py-2 pr-4 text-gray-900">Home</ListItem>
      </Typography>
      <NavListMenu />
      <Typography as={Link} to="/KontakdanLokasi" variant="small" color="blue-gray" className="font-medium">
        <ListItem className="flex items-center gap-2 py-2 pr-4 text-gray-900">Contact Us</ListItem>
      </Typography>
    </List>
  );
}

export function NavbarWithMegaMenu() {
  const [openNav, setOpenNav] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
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

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setOpenNav(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Navbar className={`fixed top-0 w-full max-w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-lg" : "bg-transparent"}`}>
      <div className="flex items-center justify-between text-blue-gray-900 w-full">
        <Typography as={Link} to="/" variant="h6" className="mr-4 cursor-pointer py-1.5 lg:ml-2">
          <div className="flex items-center">
            <img src="assets/Logo-Localine.png" alt="Logo Localine" className="h-18 w-20" />
            <span className="ml-4 text-lg font-semibold text-black">LOCALINE</span>
          </div>
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex">
          <Button variant="gradient" size="sm">
            <Link to="/Login">Log In</Link>
          </Button>
        </div>
        <IconButton variant="text" color="blue-gray" className="lg:hidden" onClick={() => setOpenNav(!openNav)}>
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
          <Button variant="gradient" size="sm" fullWidth>
            <Link to="/Login">Log In</Link>
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
}
