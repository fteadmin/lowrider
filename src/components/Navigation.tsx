import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavigationProps {
  scrollToSection?: (id: string) => void;
}

export default function Navigation({ scrollToSection }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const handleNavClick = (sectionId: string) => {
    if (isHomePage && scrollToSection) {
      scrollToSection(sectionId);
    }
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-[#031100]/95 backdrop-blur-sm z-50 border-b border-[#D9BA84]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-4">
            <img src="/Lowriders Logo.jpg" alt="WLA Logo" className="h-12 w-12 object-contain" />
            <span className="text-2xl font-bold bg-gradient-to-r from-[#D9BA84] to-[#CCB550] bg-clip-text text-transparent">WLA</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {isHomePage ? (
              <>
                <button onClick={() => handleNavClick('home')} className="text-gray-300 hover:text-[#D9BA84] transition-colors">
                  Home
                </button>
                <button onClick={() => handleNavClick('about')} className="text-gray-300 hover:text-[#D9BA84] transition-colors">
                  About Us
                </button>
                <button onClick={() => handleNavClick('events')} className="text-gray-300 hover:text-[#D9BA84] transition-colors">
                  Events
                </button>
                <button onClick={() => handleNavClick('partners')} className="text-gray-300 hover:text-[#D9BA84] transition-colors">
                  Partners
                </button>
                
              </>
            ) : (
              <>
                <Link to="/" className="text-gray-300 hover:text-[#D9BA84] transition-colors">
                  Home
                </Link>
              </>
            )}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="text-gray-300 hover:text-[#D9BA84] transition-colors flex items-center space-x-1"
              >
                <span>Memberships</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-[#031100] rounded-lg shadow-xl border border-[#D9BA84]/30 overflow-hidden">
                  <Link
                    to="/wla-association"
                    onClick={() => setIsDropdownOpen(false)}
                    className="block px-4 py-3 text-gray-300 hover:bg-[#D9BA84]/20 hover:text-[#D9BA84] transition-colors"
                  >
                    The World Low Rider Association
                  </Link>
                  <Link
                    to="/wealth-legacy"
                    onClick={() => setIsDropdownOpen(false)}
                    className="block px-4 py-3 text-gray-300 hover:bg-[#D9BA84]/20 hover:text-[#D9BA84] transition-colors"
                  >
                    Low Riders Wealth and Legacy
                  </Link>
                </div>
              )}
            </div>
            {isHomePage ? (
              <button onClick={() => handleNavClick('contact')} className="text-gray-300 hover:text-[#D9BA84] transition-colors">
                Contact Us
              </button>
            ) : (
              <Link to="/#contact" className="text-gray-300 hover:text-[#D9BA84] transition-colors">
                Contact Us
              </Link>
            )}
            <a href="https://wla.printify.me/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#D9BA84] transition-colors">
              Store
            </a>
          </div>

          <button
            className="md:hidden text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-[#031100] border-t border-[#D9BA84]/30">
          <div className="px-4 py-3 space-y-3">
            {isHomePage ? (
              <>
                <button onClick={() => handleNavClick('home')} className="block w-full text-left text-gray-300 hover:text-[#D9BA84] transition-colors py-2">
                  Home
                </button>
                <button onClick={() => handleNavClick('about')} className="block w-full text-left text-gray-300 hover:text-[#D9BA84] transition-colors py-2">
                  About Us
                </button>
                <button onClick={() => handleNavClick('partners')} className="block w-full text-left text-gray-300 hover:text-[#D9BA84] transition-colors py-2">
                  Partners
                </button>
                <button onClick={() => handleNavClick('events')} className="block w-full text-left text-gray-300 hover:text-[#D9BA84] transition-colors py-2">
                  Events
                </button>
              </>
            ) : (
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="block w-full text-left text-gray-300 hover:text-[#D9BA84] transition-colors py-2">
                Home
              </Link>
            )}
            <Link to="/wla-association" onClick={() => setIsMenuOpen(false)} className="block w-full text-left text-gray-300 hover:text-[#D9BA84] transition-colors py-2 pl-4">
              The World Low Rider Association
            </Link>
            <Link to="/wealth-legacy" onClick={() => setIsMenuOpen(false)} className="block w-full text-left text-gray-300 hover:text-[#D9BA84] transition-colors py-2 pl-4">
              Low Riders Wealth and Legacy
            </Link>
            {isHomePage ? (
              <button onClick={() => handleNavClick('contact')} className="block w-full text-left text-gray-300 hover:text-[#D9BA84] transition-colors py-2">
                Contact Us
              </button>
            ) : (
              <Link to="/#contact" onClick={() => setIsMenuOpen(false)} className="block w-full text-left text-gray-300 hover:text-[#D9BA84] transition-colors py-2">
                Contact Us
              </Link>
            )}
            <a href="https://wla.printify.me/" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)} className="block w-full text-left text-gray-300 hover:text-[#D9BA84] transition-colors py-2">
              Store
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
