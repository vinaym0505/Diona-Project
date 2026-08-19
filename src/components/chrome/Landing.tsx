import React from 'react';
import { Link } from 'react-router-dom';
import { DocumentCard } from './DocumentCard';
import { 
  FileText, 
  Receipt, 
  RefreshCw, 
  Printer, 
  ShieldCheck, 
  Layers, 
  Cpu, 
  FileSpreadsheet, 
  Sparkles, 
  ArrowRight,
  MonitorCheck,
  Code2
} from 'lucide-react';

export const Landing: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-slate-950 bg-spotlight bg-grid-pattern overflow-hidden text-slate-100">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 relative z-10">
        
        {/* 1. Hero Section */}
        <section id="home" className="text-center max-w-4xl mx-auto mb-20 relative pt-4">
          
          {/* Top Tagline Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/15 to-blue-500/15 border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-8 shadow-sm">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span className="font-bold tracking-wider uppercase">PDF2Web Platform</span>
            <span className="h-3 w-px bg-indigo-500/30"></span>
            <span className="text-slate-300">Dynamic Document Engine</span>
          </div>

          {/* Hero Brand Title */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400 tracking-tight leading-[1.08] mb-6 font-sans">
            PDF2Web
          </h1>

          <p className="text-xl sm:text-3xl font-serif text-indigo-400 italic mb-6">
            Documents, but dynamic.
          </p>
          
          <p className="text-slate-300 text-base sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10 font-normal">
            Transform static WCB Manitoba forms into beautiful, dynamic digital documents with real data, DOM measurement pagination, and A4 PDF print fidelity.
          </p>

          {/* Single Primary Action CTA Button (Removed "View Interactive Demo" button per user request) */}
          <div className="flex justify-center mb-16">
            <a
              href="#gallery"
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-base bg-gradient-to-r from-indigo-600 via-indigo-500 to-blue-600 text-white shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-[1.02] active:scale-98 transition-all"
            >
              <span>Explore Documents</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Hero Feature Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              { label: '100% Dynamic Content', icon: <RefreshCw className="w-3.5 h-3.5 text-blue-400" /> },
              { label: 'A4 Print Ready', icon: <Printer className="w-3.5 h-3.5 text-emerald-400" /> },
              { label: 'Automatic Pagination', icon: <Layers className="w-3.5 h-3.5 text-purple-400" /> },
              { label: 'Zero Database Required', icon: <ShieldCheck className="w-3.5 h-3.5 text-amber-400" /> },
            ].map((pill, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl bg-slate-900/80 text-slate-300 border border-slate-800/90 shadow-sm"
              >
                {pill.icon}
                <span>{pill.label}</span>
              </span>
            ))}
          </div>
        </section>

        {/* 2. Enterprise Statistics Section */}
        <section className="mb-24">
          <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-slate-800/90 shadow-2xl relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 sm:divide-x divide-slate-800/60 text-center">
              <div className="p-4">
                <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 mb-2">
                  2
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Dynamic Documents</div>
                <p className="text-[11px] text-slate-500 mt-1">Form WP & Expense Request</p>
              </div>

              <div className="p-4">
                <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-2">
                  A4
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Print Ready</div>
                <p className="text-[11px] text-slate-500 mt-1">Exact WCB Print Fidelity</p>
              </div>

              <div className="p-4">
                <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-emerald-400 mb-2">
                  100%
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Client-Side</div>
                <p className="text-[11px] text-slate-500 mt-1">Instant DOM Reflow</p>
              </div>

              <div className="p-4">
                <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-400 mb-2">
                  0
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Database Required</div>
                <p className="text-[11px] text-slate-500 mt-1">In-Memory Dataset Engine</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Document Gallery Section */}
        <section id="gallery" className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 mb-3 tracking-tight">
              Document Gallery
            </h2>
            <p className="text-slate-400 text-base">
              Explore dynamic documents built with DOM height measurement pagination and dataset persona controls.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-10">
            
            {/* Card 1: Worker Progress Report */}
            <DocumentCard
              title="Worker Progress Report"
              subtitle="Form WP · Exercise 1"
              description="3-page official progress report tracking return-to-work details, recovery status, 1–10 pain scale metrics, medical treatment dates, medication, exercises, and verbatim legal certification."
              exerciseId="Exercise 1"
              routePath="/exercise-1"
              pageCountInfo="3 Dynamic Pages"
              datasetCountInfo="3 Named Datasets"
              accentColor="emerald"
              icon={<FileText className="w-8 h-8 text-emerald-400" />}
              features={[
                'Exact WCB Manitoba form field mapping & radio glyphs',
                'Interactive 1–10 pain scale visualization bar',
                'Dark-blue dynamic values on black static labels',
                'Verbatim WCB legal certification & privacy notice',
              ]}
            />

            {/* Card 2: Medical & Travel Expense Request */}
            <DocumentCard
              title="Medical & Travel Expense Request"
              subtitle="Expense Form · Exercise 2"
              description="2-page reimbursement claim form containing 6 distinct expense categories: prescriptions, OTC drugs, medical supplies, parking, mileage, and bus/taxi fares."
              exerciseId="Exercise 2"
              routePath="/exercise-2"
              pageCountInfo="2+ Dynamic Pages"
              datasetCountInfo="3 Named Datasets"
              accentColor="amber"
              icon={<Receipt className="w-8 h-8 text-amber-400" />}
              features={[
                '6 dynamic expense tables using parameterized component',
                'Large dataset testing with multi-page table overflow',
                'Automatic repetition of table headers across page breaks',
                'Empty dataset state handling ("No records submitted")',
              ]}
            />
          </div>
        </section>

        {/* 4. Features Section: Why PDF2Web? */}
        <section id="features" className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-3">
              Platform Features
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 mb-3 tracking-tight">
              Why PDF2Web?
            </h2>
            <p className="text-slate-400 text-base">
              Engineered to combine modern web standards with strict PDF form fidelity.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="glass-card rounded-2xl p-6 border border-slate-800/80">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center justify-center mb-4">
                <RefreshCw className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-100 text-lg mb-2">Dynamic Documents</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Form content, radio choices, checkboxes, and table rows update in real-time when switching worker datasets.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-slate-800/80">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 flex items-center justify-center mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-100 text-lg mb-2">Automatic Pagination</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Off-screen DOM height measurement engine prevents table rows and section boxes from splitting across pages.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-slate-800/80">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center mb-4">
                <Printer className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-100 text-lg mb-2">A4 Print Fidelity</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Dedicated @media print stylesheet hides UI chrome and outputs clean A4 PDF documents matching WCB standards.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-slate-800/80">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex items-center justify-center mb-4">
                <FileSpreadsheet className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-100 text-lg mb-2">Dataset Persona Switching</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Segmented control tab switcher lets you instantly test Reference Data, Large Dataset (10+ records), and Empty Data.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-slate-800/80">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center mb-4">
                <MonitorCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-100 text-lg mb-2">Responsive Workspace UI</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Modern enterprise chrome designed with Tailwind CSS v4, smooth animations, and clean desktop/mobile viewports.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-slate-800/80">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center mb-4">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-100 text-lg mb-2">Zero Backend Required</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                100% client-side application executing in memory without external database or server API dependencies.
              </p>
            </div>
          </div>
        </section>

        {/* 5. Enterprise Technical Footer */}
        <footer className="pt-10 border-t border-slate-800/80 text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-6 h-6 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white text-xs">
              P
            </div>
            <span className="font-bold text-slate-200 text-sm tracking-wide">PDF2Web Platform</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed mb-4">
            React 19 · Tailwind CSS v4 · Watermelon UI Component Registry · Client-Side DOM Measurement Engine · WCB Manitoba Standard
          </p>
          <p className="text-[11px] text-slate-500">
            © 2026 PDF2Web Dynamic Forms. Built for Workers Compensation Board of Manitoba.
          </p>
        </footer>
      </div>
    </div>
  );
};
