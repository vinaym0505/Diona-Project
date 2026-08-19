import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FileText, Receipt, LayoutDashboard, Menu, X, ArrowRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="site-header sticky top-0 z-50 glass-panel border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo & Wordmark */}
        <Link to="/" className="flex items-center gap-3 group focus:outline-none rounded-lg p-1">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 via-blue-600 to-blue-700 flex items-center justify-center shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-200">
            <span className="text-white font-black text-lg tracking-wider">P</span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="font-sans text-xl font-extrabold tracking-tight text-white group-hover:text-indigo-400 transition-colors">
              PDF2Web
            </span>
            <span className="h-3.5 w-px bg-slate-700"></span>
            <span className="text-[11px] font-medium text-slate-400 tracking-wide uppercase hidden sm:inline">
              Document Platform
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1">
          <a
            href="/#home"
            onClick={(e) => {
              if (location.pathname === '/') {
                e.preventDefault();
                document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
              } else {
                navigate('/');
              }
            }}
            className={`px-3.5 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all ${
              isActive('/')
                ? 'text-white bg-slate-800/60'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
            }`}
          >
            Home
          </a>

          <a
            href="/#gallery"
            onClick={(e) => {
              if (location.pathname === '/') {
                e.preventDefault();
                document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
              } else {
                navigate('/#gallery');
              }
            }}
            className="px-3.5 py-2 rounded-lg text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-800/40 tracking-wide transition-all"
          >
            Documents
          </a>

          <a
            href="/#features"
            onClick={(e) => {
              if (location.pathname === '/') {
                e.preventDefault();
                document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
              } else {
                navigate('/#features');
              }
            }}
            className="px-3.5 py-2 rounded-lg text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-800/40 tracking-wide transition-all"
          >
            Why PDF2Web
          </a>

          <Link
            to="/exercise-1"
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ml-2 ${
              isActive('/exercise-1')
                ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
            }`}
          >
            <FileText className="w-3.5 h-3.5 text-emerald-400" />
            <span>Worker Progress</span>
          </Link>

          <Link
            to="/exercise-2"
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              isActive('/exercise-2')
                ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
            }`}
          >
            <Receipt className="w-3.5 h-3.5 text-amber-400" />
            <span>Expense Request</span>
          </Link>
        </nav>

        {/* Right CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            to="/exercise-1"
            className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-blue-600 shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/35 hover:scale-[1.02] active:scale-98 transition-all"
          >
            <span>Open Demo</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-slate-800 px-4 pt-3 pb-6 space-y-2">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-200 hover:bg-slate-800/60"
          >
            Home
          </Link>
          <Link
            to="/exercise-1"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold text-emerald-400 hover:bg-slate-800/60"
          >
            <FileText className="w-4 h-4" />
            <span>Worker Progress Report</span>
          </Link>
          <Link
            to="/exercise-2"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold text-amber-400 hover:bg-slate-800/60"
          >
            <Receipt className="w-4 h-4" />
            <span>Medical & Travel Expense Request</span>
          </Link>
        </div>
      )}
    </header>
  );
};
