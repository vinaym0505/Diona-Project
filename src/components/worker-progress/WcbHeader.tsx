import React from 'react';

interface WcbHeaderProps {
  claimNumber: string;
}

export const WcbHeader: React.FC<WcbHeaderProps> = ({ claimNumber }) => {
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
        <h1 className="wcb-form-title">
          Worker Progress Report
        </h1>
        <div className="wcb-claim-num">
          Claim No. <span className="wcb-dynamic-value">{claimNumber}</span>
          <span className="wcb-badge-wp">WP</span>
        </div>
      </div>
    </header>
  );
};
