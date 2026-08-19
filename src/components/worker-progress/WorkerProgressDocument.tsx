import React, { useState, useLayoutEffect, useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { workerProgressDatasets } from '../../data/workerProgressDatasets';
import { WorkerProgressDataset, DocumentStats } from '../../lib/types';
import { paginateBlocks, A4_PAGE_HEIGHT_PX } from '../../lib/paginate';
import { DatasetSwitcher } from '../chrome/DatasetSwitcher';
import { StatsBar } from '../chrome/StatsBar';
import { PrintButton } from '../chrome/PrintButton';
import { WcbHeader } from './WcbHeader';
import { ReturnToWorkSection } from './ReturnToWorkSection';
import { RecoverySection } from './RecoverySection';
import { MedicalTreatmentSection } from './MedicalTreatmentSection';
import { OtherInfoSection } from './OtherInfoSection';
import { CertificationSection } from './CertificationSection';
import { WcbFooter } from './WcbFooter';
import './worker-progress.css';

export const WorkerProgressDocument: React.FC = () => {
  const [activeDatasetId, setActiveDatasetId] = useState<string>('reference');
  const [pages, setPages] = useState<number[][]>([[0, 1], [2, 3], [4]]);

  const dataset: WorkerProgressDataset = useMemo(() => {
    return workerProgressDatasets.find((d) => d.id === activeDatasetId) || workerProgressDatasets[0];
  }, [activeDatasetId]);

  // Container refs for height measurement
  const measureRef = useRef<HTMLDivElement>(null);

  // Compute live dataset stats
  const stats: DocumentStats = useMemo(() => {
    let dynamicFields = 0;
    let selectedOptions = 0;

    if (dataset.returnToWorkDate) dynamicFields++;
    if (dataset.rtWorkGoingComments) dynamicFields++;
    if (dataset.expectedReturnDate) dynamicFields++;
    if (dataset.concernsText) dynamicFields++;
    if (dataset.employerContactName) dynamicFields++;
    if (dataset.employerContactDate) dynamicFields++;
    if (dataset.recoveryComments) dynamicFields++;
    if (dataset.painScore) dynamicFields++;
    if (dataset.providerType) dynamicFields++;
    if (dataset.lastTreatmentDate) dynamicFields++;
    if (dataset.lastProviderName) dynamicFields++;
    if (dataset.nextTreatmentDate) dynamicFields++;
    if (dataset.nextProviderName) dynamicFields++;
    if (dataset.chiroPhysioFreq) dynamicFields++;
    if (dataset.medicationName) dynamicFields++;
    if (dataset.exerciseList) dynamicFields++;
    if (dataset.additionalInfo) dynamicFields++;

    if (dataset.returnToWorkStatus) selectedOptions++;
    if (dataset.workingArrangement) selectedOptions++;
    if (dataset.recoveryStatus) selectedOptions++;
    if (dataset.medicalTreatmentStatus) selectedOptions++;
    if (dataset.medicationStatus) selectedOptions++;
    if (dataset.homeExerciseStatus) selectedOptions++;

    return {
      dynamicFieldCount: dynamicFields,
      selectedOptionsCount: selectedOptions,
    };
  }, [dataset]);

  // Dynamically measure block heights and recalculate pagination when dataset changes
  useLayoutEffect(() => {
    if (!measureRef.current) return;

    const children = Array.from(measureRef.current.children) as HTMLElement[];
    const heights = children.map((child) => child.offsetHeight);

    // Filter out zero-height children if any
    const validHeights = heights.map((h) => Math.max(h, 60));
    
    // Header & Footer reserve approx 250px
    const pageChunks = paginateBlocks(validHeights, A4_PAGE_HEIGHT_PX, 250);
    setPages(pageChunks);
  }, [dataset]);

  // Section components array indexed 0..4
  const sections = [
    <ReturnToWorkSection key="rtw" data={dataset} />,
    <RecoverySection key="rec" data={dataset} />,
    <MedicalTreatmentSection key="med" data={dataset} />,
    <OtherInfoSection key="other" data={dataset} />,
    <CertificationSection key="cert" />,
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* Workspace Top Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors mb-2"
          >
            <span>← Back to Documents</span>
          </Link>
          <h1 className="text-3xl font-extrabold text-slate-100 tracking-tight flex items-center gap-3 font-sans">
            Worker Progress Report
            <span className="text-xs bg-emerald-500/15 text-emerald-400 font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-emerald-500/30">
              Form WP
            </span>
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Workers Compensation Board of Manitoba · Exercise 1
          </p>
        </div>

        <PrintButton documentTitle="Worker Progress Report" />
      </div>

      {/* Dataset Switcher */}
      <DatasetSwitcher
        datasets={workerProgressDatasets}
        activeDatasetId={activeDatasetId}
        onSelectDataset={setActiveDatasetId}
        documentTitle="Worker Progress"
      />

      {/* Stats Bar */}
      <StatsBar
        stats={stats}
        totalPages={pages.length}
        claimNumber={dataset.claimNumber}
        workerName={dataset.workerName}
      />

      {/* Off-screen Hidden Container for DOM Height Measurement */}
      <div
        ref={measureRef}
        className="wcb-form"
        style={{
          position: 'absolute',
          visibility: 'hidden',
          top: '-9999px',
          left: '-9999px',
          width: '180mm', // exact printable width
        }}
      >
        {sections.map((sec) => sec)}
      </div>

      {/* Printed / Rendered Document Pages */}
      <div className="document-container">
        {pages.map((blockIndices, pageIdx) => (
          <div key={pageIdx} className="page wcb-form">
            
            {/* Header on Every Page */}
            <WcbHeader claimNumber={dataset.claimNumber} />

            {/* Page Content Slice */}
            <div className="wcb-page-content pb-12">
              {blockIndices.map((idx) => sections[idx])}
            </div>

            {/* Footer on Every Page */}
            <WcbFooter
              workerAppId={dataset.workerAppId}
              submissionTimestamp={dataset.submissionTimestamp}
              currentPage={pageIdx + 1}
              totalPages={pages.length}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
