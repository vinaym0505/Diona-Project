import React from 'react';
import { WorkerProgressDataset } from '../../lib/types';

interface MedicalTreatmentSectionProps {
  data: WorkerProgressDataset;
}

export const MedicalTreatmentSection: React.FC<MedicalTreatmentSectionProps> = ({ data }) => {
  const isMedTreatment = data.medicalTreatmentStatus === 'yes';
  const isMedication = data.medicationStatus === 'yes';
  const isHomeExercise = data.homeExerciseStatus === 'yes';

  return (
    <section className="wcb-section">
      <h2 className="wcb-section-title">Medical Treatment & Pain Score</h2>

      {/* Pain Scale Grid */}
      <div className="wcb-pain-scale-container">
        <div className="wcb-boxed-field-label">
          I rate my current pain/discomfort on a scale of 1-10, where 1 is no pain and 10 is severe pain out of 10:
        </div>
        <div className="wcb-pain-scale-grid">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((score) => {
            const isActive = data.painScore === score;
            return (
              <div
                key={score}
                className={`wcb-pain-score-box ${isActive ? 'active' : ''}`}
              >
                {score}
              </div>
            );
          })}
        </div>
      </div>

      {/* Medical Treatment Radio Group */}
      <div className="mb-3">
        <div className="wcb-radio-option">
          <span className={`wcb-glyph ${!isMedTreatment ? 'checked' : ''}`}>
            {!isMedTreatment ? '[X]' : '[ ]'}
          </span>
          <span>I am not continuing to receive medical treatment for my workplace injury.</span>
        </div>

        <div className="wcb-radio-option">
          <span className={`wcb-glyph ${isMedTreatment ? 'checked' : ''}`}>
            {isMedTreatment ? '[X]' : '[ ]'}
          </span>
          <span>
            I am continuing to receive medical treatment for my workplace injury from:{' '}
            <span className="wcb-dynamic-value">{data.providerType || '—'}</span> (Medical Provider Type)
          </span>
        </div>
      </div>

      {/* Treatment Dates & Provider Info */}
      <div className="mb-3 pl-4">
        {data.lastTreatmentDate && (
          <div className="wcb-inline-field">
            <span>My last medical treatment was </span>
            <span className="wcb-dynamic-value">{data.lastTreatmentDate}</span>
            <span> from </span>
            <span className="wcb-dynamic-value">{data.lastProviderName || '—'}</span>
          </div>
        )}

        {data.nextTreatmentDate && (
          <div className="wcb-inline-field">
            <span>My next medical treatment is </span>
            <span className="wcb-dynamic-value">{data.nextTreatmentDate}</span>
            <span> from </span>
            <span className="wcb-dynamic-value">{data.nextProviderName || '—'}</span>
          </div>
        )}

        {data.chiroPhysioFreq && (
          <div className="wcb-inline-field">
            <span>I am attending a Chiropractor or Physiotherapist </span>
            <span className="wcb-dynamic-value">{data.chiroPhysioFreq}</span> (Frequency)
          </div>
        )}
      </div>

      {/* Medication Radio Group */}
      <div className="mb-3">
        <div className="wcb-radio-option">
          <span className={`wcb-glyph ${!isMedication ? 'checked' : ''}`}>
            {!isMedication ? '[X]' : '[ ]'}
          </span>
          <span>I am not taking medication for my workplace injury.</span>
        </div>

        <div className="wcb-radio-option">
          <span className={`wcb-glyph ${isMedication ? 'checked' : ''}`}>
            {isMedication ? '[X]' : '[ ]'}
          </span>
          <span>
            I am taking medication for my workplace injury:{' '}
            <span className="wcb-dynamic-value">{data.medicationName || '—'}</span> (Name of prescribed medication)
          </span>
        </div>
      </div>

      {/* Home Exercise Radio Group */}
      <div className="mb-3">
        <div className="wcb-radio-option">
          <span className={`wcb-glyph ${!isHomeExercise ? 'checked' : ''}`}>
            {!isHomeExercise ? '[X]' : '[ ]'}
          </span>
          <span>I am not doing home exercises for my workplace injury.</span>
        </div>

        <div className="wcb-radio-option">
          <span className={`wcb-glyph ${isHomeExercise ? 'checked' : ''}`}>
            {isHomeExercise ? '[X]' : '[ ]'}
          </span>
          <span>I am doing home exercises for my workplace injury.</span>
        </div>

        {isHomeExercise && (
          <div className="pl-6 mt-1">
            <div className="wcb-boxed-field-label">List the exercises you are doing:</div>
            <div className="wcb-boxed-field">
              <span className="wcb-dynamic-value">{data.exerciseList || 'None specified'}</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
