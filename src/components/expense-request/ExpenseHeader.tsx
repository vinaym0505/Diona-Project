import React from 'react';

interface ExpenseHeaderProps {
  claimNumber: string;
  workerName: string;
}

export const ExpenseHeader: React.FC<ExpenseHeaderProps> = ({ claimNumber, workerName }) => {
  return (
    <header className="wcb-header-grid">
      {/* WCB Logo */}
      <div className="wcb-header-logo">
        <img src="/assets/wcb-logo.svg" alt="WCB Logo" />
      </div>

      {/* Address & Contact Block */}
      <div className="wcb-header-address">
        <div className="font-bold">Workers Compensation Board of Manitoba</div>
        <div>333 Broadway | Winnipeg, MB R3C 4W3</div>
        <div>Phone: (204) 954-4321 | Toll Free: 1-855-954-4321 | wcb.mb.ca</div>
      </div>

      {/* Form Title & Claim Number */}
      <div className="wcb-header-title-box">
        <h1 className="wcb-form-title text-base sm:text-lg">
          Medical & Travel Expense Request
        </h1>
        <div className="wcb-claim-num">
          Claim No. <span className="wcb-dynamic-value">{claimNumber}</span>
        </div>
      </div>
    </header>
  );
};
