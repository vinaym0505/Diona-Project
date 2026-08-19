import React from 'react';

interface PrivacyFooterProps {
  accepted: boolean;
}

export const PrivacyFooter: React.FC<PrivacyFooterProps> = ({ accepted }) => {
  return (
    <div className="privacy-consent-box">
      <span className={`wcb-glyph ${accepted ? 'checked' : ''}`}>
        {accepted ? '[X]' : '[ ]'}
      </span>
      <span>
        I understand that the{' '}
        <a href="https://www.wcb.mb.ca/privacy-notice" target="_blank" rel="noopener noreferrer">
          Privacy Notice
        </a>{' '}
        applies to the personal information collected in this document.
      </span>
    </div>
  );
};
