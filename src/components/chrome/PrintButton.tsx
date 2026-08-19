import React from 'react';
import { Printer, Download } from 'lucide-react';

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
      className="print-button group relative inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/30 hover:from-blue-500 hover:to-indigo-500 active:scale-97 transition-all focus:outline-none focus:ring-2 focus:ring-blue-400"
      title={`Print or save ${documentTitle} as PDF`}
      aria-label={`Print ${documentTitle}`}
    >
      <Printer className="w-4 h-4 group-hover:scale-110 transition-transform" />
      <span>Print / Export PDF</span>
      <span className="text-[10px] uppercase font-bold bg-white/20 px-2 py-0.5 rounded text-white/90 ml-1 hidden sm:inline">
        Ctrl+P
      </span>
    </button>
  );
};
