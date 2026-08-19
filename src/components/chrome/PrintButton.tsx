import React from 'react';
import { Printer } from 'lucide-react';

interface PrintButtonProps {
  documentTitle: string;
}

export const PrintButton: React.FC<PrintButtonProps> = ({ documentTitle }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button
      onClick={handlePrint}
      className="print-button group relative inline-flex items-center gap-2.5 px-6 py-3 rounded-2xl font-bold text-sm bg-gradient-to-r from-indigo-600 via-indigo-500 to-blue-600 text-white shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-[1.02] active:scale-98 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-400"
      title={`Print or save ${documentTitle} as PDF`}
      aria-label={`Print ${documentTitle}`}
    >
      <Printer className="w-4 h-4 group-hover:scale-110 transition-transform" />
      <span>Print / Save PDF</span>
      <span className="text-[10px] uppercase font-extrabold bg-white/20 px-2 py-0.5 rounded text-white ml-1 hidden sm:inline tracking-wider">
        Ctrl+P
      </span>
    </button>
  );
};
