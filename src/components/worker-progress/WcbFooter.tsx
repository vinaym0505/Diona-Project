import React from 'react';

interface WcbFooterProps {
  workerAppId: string;
  submissionTimestamp: string;
  currentPage: number;
  totalPages: number;
}

export const WcbFooter: React.FC<WcbFooterProps> = ({
  workerAppId,
  submissionTimestamp,
  currentPage,
  totalPages,
}) => {
  return (
    <footer className="wcb-footer">
      <div>
        Worker App ID: <span className="font-semibold text-slate-900">{workerAppId}</span>
      </div>
      <div>
        Submitted: <span className="font-semibold text-slate-900">{submissionTimestamp}</span>
      </div>
      <div className="font-bold text-slate-900">
        Page {currentPage} of {totalPages}
      </div>
    </footer>
  );
};
