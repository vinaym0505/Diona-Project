import React from 'react';
import { Activity, CheckCircle, FileText, Layers, Check, Database } from 'lucide-react';
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
    <div className="stats-bar glass-panel rounded-2xl px-5 py-3.5 mb-6 border border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs">
      
      {/* Left: Metrics */}
      <div className="flex items-center gap-4 flex-wrap">
        <div className="flex items-center gap-2 text-slate-300 font-medium bg-slate-900/60 px-3 py-1.5 rounded-lg border border-slate-800">
          <Activity className="w-4 h-4 text-blue-400" />
          <span>Dynamic Fields:</span>
          <span className="font-extrabold text-white bg-blue-500/20 px-2 py-0.5 rounded border border-blue-500/30">
            {stats.dynamicFieldCount}
          </span>
        </div>

        <div className="flex items-center gap-2 text-slate-300 font-medium bg-slate-900/60 px-3 py-1.5 rounded-lg border border-slate-800">
          <Check className="w-4 h-4 text-indigo-400" />
          <span>Selected Options:</span>
          <span className="font-extrabold text-white bg-indigo-500/20 px-2 py-0.5 rounded border border-indigo-500/30">
            {stats.selectedOptionsCount}
          </span>
        </div>

        {stats.recordCount !== undefined && (
          <div className="flex items-center gap-2 text-slate-300 font-medium bg-slate-900/60 px-3 py-1.5 rounded-lg border border-slate-800">
            <Database className="w-4 h-4 text-amber-400" />
            <span>Expense Records:</span>
            <span className="font-extrabold text-white bg-amber-500/20 px-2 py-0.5 rounded border border-amber-500/30">
              {stats.recordCount}
            </span>
          </div>
        )}

        <div className="flex items-center gap-2 text-slate-300 font-medium bg-slate-900/60 px-3 py-1.5 rounded-lg border border-slate-800">
          <Layers className="w-4 h-4 text-purple-400" />
          <span>Calculated Pages:</span>
          <span className="font-extrabold text-white bg-purple-500/20 px-2 py-0.5 rounded border border-purple-500/30">
            {totalPages}
          </span>
        </div>
      </div>

      {/* Right: Worker Info & Validity Badge */}
      <div className="flex items-center gap-3.5 ml-auto">
        <div className="text-right hidden md:block">
          <span className="text-slate-400 block text-[11px] font-medium">Claim #{claimNumber}</span>
          <span className="text-slate-200 font-bold block">{workerName}</span>
        </div>

        <div className="flex items-center gap-1.5 bg-emerald-500/15 text-emerald-400 px-3 py-1.5 rounded-xl border border-emerald-500/30 font-bold text-xs shadow-sm">
          <CheckCircle className="w-4 h-4 text-emerald-400" />
          <span>Dataset Valid</span>
        </div>
      </div>
    </div>
  );
};
