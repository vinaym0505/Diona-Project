import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FileText, Receipt, LayoutDashboard, ExternalLink } from 'lucide-react';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="site-header sticky top-0 z-50 glass-panel border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Wordmark & WCB Logo */}
        <Link to="/" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-1">
          <div className="flex items-center gap-2.5">
            <span className="font-serif text-2xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">
              PDF2Web
            </span>
            <span className="h-4 w-px bg-slate-700"></span>
            <div className="flex items-center gap-1.5 bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-800">
              <img src="/assets/wcb-logo.svg" alt="WCB Logo" className="h-5 w-auto" />
              <span className="text-[11px] font-semibold text-slate-300">WCB Manitoba</span>
            </div>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center gap-1 sm:gap-2">
          <Link
            to="/"
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
              isActive('/')
                ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            <LayoutDashboard className="w-4 h-4" />
            <span>Home</span>
          </Link>

          <Link
            to="/exercise-1"
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
              isActive('/exercise-1')
                ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            <FileText className="w-4 h-4 text-emerald-400" />
            <span>Worker Progress</span>
          </Link>

          <Link
            to="/exercise-2"
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
              isActive('/exercise-2')
                ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            <Receipt className="w-4 h-4 text-amber-400" />
            <span>Expense Request</span>
          </Link>

          <a
            href="https://branusha719-collab.github.io/Diona-Project/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-400 hover:text-slate-200 transition-colors ml-2"
            title="Reference Site"
          >
            <span>Reference Site</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </nav>
      </div>
    </header>
  );
};
