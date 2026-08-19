import React from 'react';
import { Activity, CheckCircle, FileText, Layers } from 'lucide-react';
import { DocumentStats } from '../../lib/types';

interface StatsBarProps {
  stats: DocumentStats;
  totalPages: number;
  claimNumber: string;
  workerName: string;
}

export const StatsBar: React.FC<StatsBarProps> = ({
  stats,
  totalPages,
  claimNumber,
  workerName,
}) => {
  return (
    <div className="stats-bar glass-panel rounded-xl px-4 py-3 mb-6 border border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs">
      
      {/* Left: Live Stats Readout */}
      <div className="flex items-center gap-4 flex-wrap">
        <div className="flex items-center gap-1.5 text-slate-300 font-medium">
          <Activity className="w-3.5 h-3.5 text-blue-400" />
          <span>Dynamic Fields:</span>
          <span className="font-bold text-white bg-blue-500/20 px-2 py-0.5 rounded border border-blue-500/30">
            {stats.dynamicFieldCount}
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-slate-300 font-medium">
          <span>Selected Options:</span>
          <span className="font-bold text-white bg-indigo-500/20 px-2 py-0.5 rounded border border-indigo-500/30">
            {stats.selectedOptionsCount}
          </span>
        </div>

        {stats.recordCount !== undefined && (
          <div className="flex items-center gap-1.5 text-slate-300 font-medium">
            <span>Expense Records:</span>
            <span className="font-bold text-white bg-amber-500/20 px-2 py-0.5 rounded border border-amber-500/30">
              {stats.recordCount}
            </span>
          </div>
        )}

        <div className="flex items-center gap-1.5 text-slate-300 font-medium">
          <Layers className="w-3.5 h-3.5 text-purple-400" />
          <span>Calculated Pages:</span>
          <span className="font-bold text-white bg-purple-500/20 px-2 py-0.5 rounded border border-purple-500/30">
            {totalPages}
          </span>
        </div>
      </div>

      {/* Right: Worker Info & Validity Badge */}
      <div className="flex items-center gap-3 ml-auto">
        <div className="text-right hidden md:block">
          <span className="text-slate-400 block text-[11px]">Claim #{claimNumber}</span>
          <span className="text-slate-200 font-semibold block">{workerName}</span>
        </div>

        <div className="flex items-center gap-1.5 bg-emerald-500/15 text-emerald-400 px-3 py-1.5 rounded-lg border border-emerald-500/30 font-semibold text-xs shadow-sm">
          <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
          <span>Dataset Valid</span>
        </div>
      </div>
    </div>
  );
};
