import React from 'react';
import { DocumentCard } from './DocumentCard';
import { FileText, Receipt, RefreshCw, Printer, ShieldCheck, Layers, Cpu, FileSpreadsheet } from 'lucide-react';

export const Landing: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      
      {/* Hero Section */}
      <section id="home" className="text-center max-w-3xl mx-auto mb-16 relative">
        
        {/* WCB Tagline Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-6">
          <img src="/assets/wcb-logo.svg" alt="WCB Logo" className="h-4 w-auto inline" />
          <span>Workers Compensation Board of Manitoba · Dynamic Forms</span>
        </div>

        {/* PDF2Web Title & Tagline */}
        <h1 className="text-6xl sm:text-7xl font-extrabold text-slate-100 tracking-tight mb-2 font-sans">
          PDF2Web
        </h1>
        <p className="text-2xl sm:text-3xl font-serif text-blue-400 italic mb-6">
          Documents, but dynamic.
        </p>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          Recreate official WCB forms with real data, beautiful layouts, and print-perfect output.
        </p>

        {/* Hero Feature Badges (Matching Reference Site) */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <span className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/30 shadow-sm">
            <RefreshCw className="w-3.5 h-3.5" />
            <span>100% Dynamic</span>
          </span>

          <span className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 shadow-sm">
            <Printer className="w-3.5 h-3.5" />
            <span>A4 Print Ready</span>
          </span>

          <span className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/30 shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>WCB Manitoba Compliant</span>
          </span>
        </div>
      </section>

      {/* Document Gallery Section */}
      <section id="gallery" className="mb-20">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-2">Document Gallery</h2>
          <p className="text-slate-400 text-sm">Select an official WCB Manitoba dynamic document to view and test persona switching</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Document 1 Card: Worker Progress Report */}
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

          {/* Document 2 Card: Medical & Travel Expense Request */}
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

      {/* Built for Dynamic Data Section */}
      <section id="features" className="glass-panel rounded-3xl p-8 sm:p-10 mb-16 border border-slate-800">
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 text-blue-400 text-xs font-semibold mb-3">
            <Layers className="w-4 h-4" />
            <span>Architecture Insight</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-3">
            Built for Dynamic Data
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            Form content changes per worker claim. Our DOM height measurement pagination engine recalculates page boundaries on the fly so no section or table row is split across page breaks.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
            <div className="w-9 h-9 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center mb-3">
              <FileSpreadsheet className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-100 text-base mb-1">Small / Reference Dataset</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Standard dataset matching source PDF specifications (Madeleine Willson claim #20042047).
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
            <div className="w-9 h-9 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center mb-3">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-100 text-base mb-1">Large Dataset</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              10+ item records and long text comments forcing multi-page expansion and repeated table headers.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-3">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-100 text-base mb-1">Empty Dataset</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Zero records submitted — renders clean empty table states ("No records submitted") without layout breaks.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Foundation */}
      <footer className="text-center max-w-2xl mx-auto pt-6 border-t border-slate-800/60">
        <h3 className="text-sm font-bold text-slate-300 mb-2 flex items-center justify-center gap-2">
          <Cpu className="w-4 h-4 text-blue-400" />
          <span>PDF2Web Technical Foundation</span>
        </h3>
        <p className="text-xs text-slate-400 leading-relaxed">
          React 19 · Tailwind CSS v4 · Watermelon UI component registry · Client-side DOM Measurement Engine · 100% Zero Backend
        </p>
      </footer>
    </div>
  );
};
