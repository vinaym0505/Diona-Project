import React from 'react';
import { WorkerProgressDataset } from '../../lib/types';

interface ReturnToWorkSectionProps {
  data: WorkerProgressDataset;
}

export const ReturnToWorkSection: React.FC<ReturnToWorkSectionProps> = ({ data }) => {
  const isNotMissed = data.returnToWorkStatus === 'notMissedTime';
  const isNotReturned = data.returnToWorkStatus === 'notReturned';
  const isReturnedOn = data.returnToWorkStatus === 'returnedOn';

  return (
    <section className="wcb-section">
      <div className="wcb-intro-text">
        <span className="wcb-dynamic-value">{data.workerName}</span> provided the following updates in relation to their claim:
      </div>

      <h2 className="wcb-section-title">Return to Work</h2>

      {/* Radio Group 1: Return to Work Status */}
      <div className="mb-3">
        <div className="wcb-radio-group-label">Select one:</div>
        
        <div className="wcb-radio-option">
          <span className={`wcb-glyph ${isNotMissed ? 'checked' : ''}`}>
            {isNotMissed ? '[X]' : '[ ]'}
          </span>
          <span>I have not missed time from work</span>
        </div>

        <div className="wcb-radio-option">
          <span className={`wcb-glyph ${isNotReturned ? 'checked' : ''}`}>
            {isNotReturned ? '[X]' : '[ ]'}
          </span>
          <span>I have not returned to work</span>
        </div>

        <div className="wcb-radio-option">
          <span className={`wcb-glyph ${isReturnedOn ? 'checked' : ''}`}>
            {isReturnedOn ? '[X]' : '[ ]'}
          </span>
          <span>
            I returned to work on: <span className="wcb-dynamic-value">{data.returnToWorkDate || '—'}</span>
          </span>
        </div>
      </div>

      {/* Radio Group 2: Working Arrangement */}
      {isReturnedOn && (
        <div className="mb-3 pl-4 border-l-2 border-slate-300">
          <div className="wcb-radio-group-label">I am working:</div>
          
          <div className="wcb-radio-option">
            <span className={`wcb-glyph ${data.workingArrangement === 'fullRegular' ? 'checked' : ''}`}>
              {data.workingArrangement === 'fullRegular' ? '[X]' : '[ ]'}
            </span>
            <span>Full duties, regular hours</span>
          </div>

          <div className="wcb-radio-option">
            <span className={`wcb-glyph ${data.workingArrangement === 'fullReduced' ? 'checked' : ''}`}>
              {data.workingArrangement === 'fullReduced' ? '[X]' : '[ ]'}
            </span>
            <span>Full duties, reduced hours</span>
          </div>

          <div className="wcb-radio-option">
            <span className={`wcb-glyph ${data.workingArrangement === 'modifiedRegular' ? 'checked' : ''}`}>
              {data.workingArrangement === 'modifiedRegular' ? '[X]' : '[ ]'}
            </span>
            <span>Modified duties, regular hours</span>
          </div>

          <div className="wcb-radio-option">
            <span className={`wcb-glyph ${data.workingArrangement === 'modifiedReduced' ? 'checked' : ''}`}>
              {data.workingArrangement === 'modifiedReduced' ? '[X]' : '[ ]'}
            </span>
            <span>Modified duties, reduced hours</span>
          </div>

          <div className="wcb-radio-option">
            <span className={`wcb-glyph ${data.workingArrangement === 'other' ? 'checked' : ''}`}>
              {data.workingArrangement === 'other' ? '[X]' : '[ ]'}
            </span>
            <span>
              Other: <span className="wcb-dynamic-value">{data.workingArrangementOther || '—'}</span>
            </span>
          </div>
        </div>
      )}

      {/* Comments & Expected Return */}
      {data.rtWorkGoingComments && (
        <div className="wcb-inline-field">
          <span className="font-bold">My return to work is going: </span>
          <span className="wcb-dynamic-value">{data.rtWorkGoingComments}</span>
        </div>
      )}

      {data.expectedReturnDate && (
        <div className="wcb-inline-field">
          <span className="font-bold">I expect to return to work on: </span>
          <span className="wcb-dynamic-value">{data.expectedReturnDate}</span>
        </div>
      )}

      {/* Concerns Boxed Field */}
      <div className="mt-2 mb-3">
        <div className="wcb-boxed-field-label">I have the following concerns about returning to work:</div>
        <div className="wcb-boxed-field">
          <span className="wcb-dynamic-value">{data.concernsText || 'None reported'}</span>
        </div>
      </div>

      {/* Employer Contact Info */}
      <div className="wcb-inline-field">
        <span className="font-bold">I was most recently in contact with: </span>
        <span className="wcb-dynamic-value">{data.employerContactName || '—'}</span>
        {data.employerContactDate && (
          <>
            <span> on </span>
            <span className="wcb-dynamic-value">{data.employerContactDate}</span>
          </>
        )}
      </div>
    </section>
  );
};
