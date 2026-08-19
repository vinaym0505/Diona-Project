import React from 'react';

export const CertificationSection: React.FC = () => {
  return (
    <section className="wcb-section">
      <h2 className="wcb-section-title">Certification & Declaration</h2>
      <div className="wcb-certification-box">
        <p className="wcb-certification-text">
          I certify that the information given on this form is true, correct and complete to the best of my knowledge.
          I agree to notify the Workers Compensation Board of Manitoba (WCB) immediately once I return to any form of work
          and/or employment. I understand that it is an offence to knowingly make a false statement to the WCB. I also
          understand that it is an offence to withhold information from WCB which affects my entitlement to compensation
          (e.g., full or partial recovery from injury, ability to return to work, sources of additional income, etc.).
          I understand that refusing to co-operate with, or follow my treatment, may result in the WCB reducing or suspending my benefits.
        </p>
        <p className="font-semibold text-slate-900 mt-2">
          I understand that the Privacy Notice applies to the personal information collected in this document.
        </p>
      </div>
    </section>
  );
};
