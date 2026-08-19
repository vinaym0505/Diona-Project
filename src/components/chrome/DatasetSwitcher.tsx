import React from 'react';
import { Database, Check, Sparkles } from 'lucide-react';

interface DatasetOption {
  id: string;
  label: string;
}

interface DatasetSwitcherProps {
  datasets: DatasetOption[];
  activeDatasetId: string;
  onSelectDataset: (id: string) => void;
  documentTitle: string;
}

export const DatasetSwitcher: React.FC<DatasetSwitcherProps> = ({
  datasets,
  activeDatasetId,
  onSelectDataset,
  documentTitle,
}) => {
  return (
    <div className="dataset-switcher glass-panel rounded-2xl p-4 mb-6 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      
      {/* Label */}
      <div className="flex items-center gap-3">
        <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shadow-sm">
          <Database className="w-4 h-4" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="text-slate-100 font-bold text-sm tracking-tight">{documentTitle} Dataset</span>
            <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              Live Reflow
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">Select a persona dataset to test dynamic pagination & table expansion</p>
        </div>
      </div>

      {/* Segmented Control Tabs */}
      <div className="flex items-center gap-1.5 p-1.5 bg-slate-900/90 rounded-xl border border-slate-800/90 w-full md:w-auto overflow-x-auto">
        {datasets.map((ds) => {
          const isActive = ds.id === activeDatasetId;
          return (
            <button
              key={ds.id}
              onClick={() => onSelectDataset(ds.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                isActive
                  ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-md shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              {isActive ? <Check className="w-3.5 h-3.5 text-white" /> : <Sparkles className="w-3 h-3 text-slate-500" />}
              <span>{ds.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
