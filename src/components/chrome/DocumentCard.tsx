import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Layers, FileSpreadsheet, Sparkles, Printer } from 'lucide-react';

interface DocumentCardProps {
  title: string;
  subtitle: string;
  description: string;
  exerciseId: string;
  routePath: string;
  pageCountInfo: string;
  datasetCountInfo: string;
  features: string[];
  icon: React.ReactNode;
  accentColor: 'blue' | 'emerald' | 'amber';
}

export const DocumentCard: React.FC<DocumentCardProps> = ({
  title,
  subtitle,
  description,
  exerciseId,
  routePath,
  pageCountInfo,
  datasetCountInfo,
  features,
  icon,
  accentColor,
}) => {
  const accentBadge = {
    blue: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
    emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    amber: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
  }[accentColor];

  const buttonStyle = {
    blue: 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-500/20',
    emerald: 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-lg shadow-emerald-500/20',
    amber: 'bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white shadow-lg shadow-amber-500/20',
  }[accentColor];

  return (
    <div className="glass-card rounded-3xl p-7 sm:p-8 flex flex-col justify-between relative group border border-slate-800/80 hover:border-slate-700/90 transition-all duration-300">
      
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-6">
          <div className="flex items-center gap-2">
            <span className={`text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full border ${accentBadge}`}>
              {exerciseId}
            </span>
            <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-slate-800/60 text-slate-300 border border-slate-700/50 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-indigo-400" />
              Dynamic
            </span>
            <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-slate-800/60 text-slate-300 border border-slate-700/50 flex items-center gap-1">
              <Printer className="w-3 h-3 text-emerald-400" />
              A4 Ready
            </span>
          </div>

          <span className="text-xs text-slate-400 font-medium hidden sm:flex items-center gap-1 bg-slate-900/80 px-2.5 py-1 rounded-lg border border-slate-800">
            <Layers className="w-3.5 h-3.5 text-slate-400" />
            {pageCountInfo}
          </span>
        </div>

        {/* Icon & Title */}
        <div className="flex items-start gap-4 mb-4">
          <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800/90 text-slate-200 group-hover:scale-105 group-hover:border-slate-700 transition-all duration-300 shadow-inner">
            {icon}
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-100 tracking-tight group-hover:text-white transition-colors font-sans">
              {title}
            </h3>
            <p className="text-xs text-slate-400 font-medium mt-1">{subtitle}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-300 leading-relaxed mb-6">
          {description}
        </p>

        {/* Features Checklist */}
        <div className="space-y-2.5 mb-8 pt-4 border-t border-slate-800/80">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-300 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Route Action Button */}
      <Link
        to={routePath}
        className={`w-full py-3.5 px-6 rounded-2xl font-bold text-sm flex items-center justify-center gap-2.5 transition-all transform active:scale-98 ${buttonStyle}`}
      >
        <span>Open Document Workspace</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
};
