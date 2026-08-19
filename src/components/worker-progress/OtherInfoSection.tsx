import React from 'react';
import { WorkerProgressDataset } from '../../lib/types';

interface OtherInfoSectionProps {
  data: WorkerProgressDataset;
}

export const OtherInfoSection: React.FC<OtherInfoSectionProps> = ({ data }) => {
  return (
    <section className="wcb-section">
      <h2 className="wcb-section-title">Other Information</h2>
      <div className="wcb-boxed-field-label">
        I would like to provide the following additional information about my claim/injury:
      </div>
      <div className="wcb-boxed-field">
        <span className="wcb-dynamic-value">{data.additionalInfo || 'No additional information provided'}</span>
      </div>
    </section>
  );
};
