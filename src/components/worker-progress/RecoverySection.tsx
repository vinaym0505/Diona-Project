import React from 'react';
import { WorkerProgressDataset } from '../../lib/types';

interface RecoverySectionProps {
  data: WorkerProgressDataset;
}

export const RecoverySection: React.FC<RecoverySectionProps> = ({ data }) => {
  const isNotRecovered = data.recoveryStatus === 'notRecovered';
  const isRecovered = data.recoveryStatus === 'recovered';

  return (
    <section className="wcb-section">
      <h2 className="wcb-section-title">Recovery</h2>

      <div className="mb-3">
        <div className="wcb-radio-option">
          <span className={`wcb-glyph ${isNotRecovered ? 'checked' : ''}`}>
            {isNotRecovered ? '[X]' : '[ ]'}
          </span>
          <span>I have not fully recovered from my workplace injury.</span>
        </div>

        <div className="wcb-radio-option">
          <span className={`wcb-glyph ${isRecovered ? 'checked' : ''}`}>
            {isRecovered ? '[X]' : '[ ]'}
          </span>
          <span>I have fully recovered from my workplace injury.</span>
        </div>
      </div>

      <div className="mt-2">
        <div className="wcb-boxed-field-label">I have provided the following comments about my recovery:</div>
        <div className="wcb-boxed-field">
          <span className="wcb-dynamic-value">{data.recoveryComments || 'No recovery comments submitted'}</span>
        </div>
      </div>
    </section>
  );
};
