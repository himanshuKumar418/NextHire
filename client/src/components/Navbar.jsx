import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDashboard } from '../context/DashboardContext.jsx';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [avatarDropdownOpen, setAvatarDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setAvatarDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const user = JSON.parse(localStorage.getItem('user'));
  const { logout } = useDashboard();

  const handleLogout = () => {
    logout();
    setAvatarDropdownOpen(false);
    setMobileMenuOpen(false);
    navigate('/');
  };

  const getInitials = () => {
    if (!user || !user.name) return 'U';
    return user.name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  // Check if route is active
  const isActive = (path) => location.pathname === path;

  const linkClass = (path) => 
    `${isActive(path) ? 'text-sky-400 font-bold' : 'text-slate-300 hover:text-sky-400'} text-sm font-semibold transition-colors duration-200`;

  const mobileLinkClass = (path) => 
    `block ${isActive(path) ? 'text-sky-400 font-bold' : 'text-slate-300 hover:text-sky-400'} text-sm font-semibold py-2`;

  return (
    <nav className="relative z-50 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-extrabold text-sky-400 tracking-wider">
                NextHire
              </span>
            </Link>
          </div>

          {/* Desktop Menu Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className={linkClass('/')}>
              Home
            </Link>
            <Link to="/prepare" className={linkClass('/prepare')}>
              Prepare
            </Link>
            {user && (
              <Link to="/dashboard" className={linkClass('/dashboard')}>
                Dashboard
              </Link>
            )}
            <Link to="/about" className={linkClass('/about')}>
              About
            </Link>
          </div>

          {/* Desktop User actions */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div 
                ref={dropdownRef}
                className="relative"
              >
                <button 
                  onClick={() => setAvatarDropdownOpen(!avatarDropdownOpen)}
                  className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 text-sky-400 font-extrabold flex items-center justify-center text-xs focus:outline-none transition-colors duration-200 hover:border-sky-500"
                >
                  {getInitials()}
                </button>

                {avatarDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-slate-900 border border-slate-800 rounded-xl py-2 shadow-xl">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-950 hover:text-sky-400 font-medium"
                      onClick={() => setAvatarDropdownOpen(false)}
                    >
                      Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-rose-400 hover:bg-slate-950 font-medium focus:outline-none border-t border-slate-800/60 mt-1 pt-2"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link to="/login" className={linkClass('/login')}>
                  Login
                </Link>
                <Link to="/register" className="bg-sky-500 hover:bg-sky-600 text-slate-950 font-bold px-4 py-2 rounded-lg text-sm transition-colors duration-200 shadow-md">
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile Hamburger Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-400 hover:text-slate-200 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950 border-t border-slate-900 px-4 pt-2 pb-4 space-y-3">
          <Link 
            to="/" 
            className={mobileLinkClass('/')}
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/prepare" 
            className={mobileLinkClass('/prepare')}
            onClick={() => setMobileMenuOpen(false)}
          >
            Prepare
          </Link>
          {user && (
            <Link 
              to="/dashboard" 
              className={mobileLinkClass('/dashboard')}
              onClick={() => setMobileMenuOpen(false)}
            >
              Dashboard
            </Link>
          )}
          <Link 
            to="/about" 
            className={mobileLinkClass('/about')}
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          
          {user ? (
            <div className="pt-3 border-t border-slate-900 space-y-2">
              <Link 
                to="/profile" 
                className="block text-slate-400 hover:text-sky-400 text-sm font-semibold py-1.5"
                onClick={() => setMobileMenuOpen(false)}
              >
                Profile
              </Link>
              <button 
                onClick={handleLogout}
                className="w-full text-left text-rose-400 hover:text-rose-350 text-sm font-semibold py-1.5 focus:outline-none"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="pt-4 border-t border-slate-900 flex flex-col gap-3">
              <Link 
                to="/login" 
                className="text-center text-slate-300 hover:text-sky-400 text-sm font-semibold py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </Link>
              <Link 
                to="/register" 
                className="text-center bg-sky-500 hover:bg-sky-600 text-slate-950 font-bold px-4 py-2.5 rounded-lg text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                Register
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
