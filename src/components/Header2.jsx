import React, { useState, useEffect } from 'react';
import { ChevronDown, Phone, Mail } from 'lucide-react';
import "./Header.css";
import logo from "../assets/Genie-mediaLogo.png";

const Header2 = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
  const [showHeader, setShowHeader] = useState(true);

  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 20);

      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Our Work', href: '#projects' },
    { name: 'Testimonials', href: '#reviews' }
  ];

  return (
    <>
      <header
        className={`header-container fixed top-0 left-0 right-0 z-50
        transition-transform duration-300 ease-in-out
        ${showHeader ? 'translate-y-0' : '-translate-y-full'}
        bg-black/95`}
      >
        <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            <div className="logo-container flex items-center cursor-pointer">
              <img
                src={logo}
                alt="Logo"
                className="logo-img w-36 sm:w-32 md:w-36 object-contain logo-icon"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8 nav-menu">
              {menuItems.map((item) => (
                <div key={item.name} className="relative">
                  <a
                    href={item.href}
                    className="nav-link flex items-center gap-1 text-m font-semibold text-gray-100 hover:text-orange-600 py-1"
                  >
                    {item.name}
                  </a>
                </div>
              ))}
            </nav>

            {/* CTA Buttons - Desktop */}
            <div className="hidden lg:flex items-center gap-3 cta-buttons">
              <a href="tel:+919032845433">
              <button className="btn-secondary relative px-5 py-2.5 text-orange-600 font-semibold rounded-full text-sm flex items-center gap-2 z-10">
                <Phone size={16} />
                Book a Call
              </button> </a>
            
              <button
  onClick={() => {
    window.location.href = '#contact';
  }}
  className="btn-primary px-6 py-2.5 text-white font-semibold rounded-full text-sm flex items-center gap-2 shadow-lg"
>
  <Mail size={16} />
  Contact Us
</button>

              
           
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 mr-8 rounded-lg hover:bg-gray-100 transition-colors ${
                isMobileMenuOpen ? 'hamburger-open' : ''
              }`}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className="hamburger-line w-full h-0.5 bg-gray-400 rounded-full"></span>
                <span className="hamburger-line w-full h-0.5 bg-gray-400 rounded-full"></span>
                <span className="hamburger-line w-full h-0.5 bg-gray-400 rounded-full"></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mobile-menu bg-white border-t border-gray-100 shadow-2xl max-h-[calc(100vh-80px)] overflow-y-auto">
            <nav className="px-4 py-6 flex flex-col gap-1">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 px-4 rounded-xl text-gray-700 font-semibold hover:bg-orange-50 hover:text-orange-600 transition-all"
                >
                  {item.name}
                </a>
              ))}

              {/* Mobile CTA Buttons */}
              <div className="mobile-menu-item mt-4 space-y-3">
                <button className="w-80% btn-secondary relative px-5 py-3 text-orange-600 font-semibold rounded-full flex items-center justify-center gap-2 z-10">
                  <Phone size={18} />
                  Book a Call
                </button>
                <button className="w-80% btn-primary px-6 py-3 text-white font-semibold rounded-full flex items-center justify-center gap-2 shadow-lg relative z-10">
                  <Mail size={18} />
                  Contact Us
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header2;
