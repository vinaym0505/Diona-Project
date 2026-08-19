import React from 'react';
import { Database, Check } from 'lucide-react';

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
    <div className="dataset-switcher glass-panel rounded-xl p-3 sm:p-4 mb-6 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      
      {/* Label */}
      <div className="flex items-center gap-2 text-slate-200 text-sm font-semibold">
        <div className="p-2 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30">
          <Database className="w-4 h-4" />
        </div>
        <div>
          <span className="text-slate-100 font-bold block text-sm">{documentTitle} Dataset</span>
          <span className="text-xs text-slate-400 font-normal">Select dataset persona to test dynamic reflow</span>
        </div>
      </div>

      {/* Tabs list */}
      <div className="flex items-center gap-1.5 p-1 bg-slate-900/90 rounded-lg border border-slate-800/80 w-full sm:w-auto overflow-x-auto">
        {datasets.map((ds) => {
          const isActive = ds.id === activeDatasetId;
          return (
            <button
              key={ds.id}
              onClick={() => onSelectDataset(ds.id)}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-md text-xs font-medium transition-all whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isActive
                  ? 'bg-blue-600 text-white shadow-sm font-semibold'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              {isActive && <Check className="w-3.5 h-3.5" />}
              <span>{ds.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
