import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Layers, FileSpreadsheet } from 'lucide-react';

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
  const accentGradient = {
    blue: 'from-blue-600/20 to-indigo-600/10 border-blue-500/30 text-blue-400',
    emerald: 'from-emerald-600/20 to-teal-600/10 border-emerald-500/30 text-emerald-400',
    amber: 'from-amber-600/20 to-orange-600/10 border-amber-500/30 text-amber-400',
  }[accentColor];

  const buttonStyle = {
    blue: 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-600/25',
    emerald: 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-600/25',
    amber: 'bg-amber-600 hover:bg-amber-500 text-white shadow-amber-600/25',
  }[accentColor];

  return (
    <div className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative group border border-slate-800 hover:border-slate-700 transition-all duration-300">
      
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${accentGradient}`}>
            {exerciseId}
          </span>
          <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
            <span className="flex items-center gap-1 bg-slate-900/60 px-2.5 py-1 rounded-md border border-slate-800">
              <Layers className="w-3.5 h-3.5 text-slate-400" />
              {pageCountInfo}
            </span>
            <span className="flex items-center gap-1 bg-slate-900/60 px-2.5 py-1 rounded-md border border-slate-800">
              <FileSpreadsheet className="w-3.5 h-3.5 text-slate-400" />
              {datasetCountInfo}
            </span>
          </div>
        </div>

        {/* Icon & Title */}
        <div className="flex items-start gap-4 mb-4">
          <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 group-hover:scale-110 transition-transform duration-300 shadow-inner">
            {icon}
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-100 tracking-tight group-hover:text-blue-400 transition-colors">
              {title}
            </h3>
            <p className="text-xs text-slate-400 font-medium mt-0.5">{subtitle}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-300 leading-relaxed mb-6">
          {description}
        </p>

        {/* Features Checklist */}
        <div className="space-y-2 mb-8 pt-4 border-t border-slate-800/80">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-slate-400">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Route Action Button */}
      <Link
        to={routePath}
        className={`w-full py-3 px-5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 shadow-lg transition-all transform active:scale-98 ${buttonStyle}`}
      >
        <span>Open Dynamic Document</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
};
