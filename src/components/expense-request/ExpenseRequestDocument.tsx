import React, { useState, useLayoutEffect, useRef, useMemo } from 'react';
import { expenseRequestDatasets } from '../../data/expenseRequestDatasets';
import { ExpenseRequestDataset, DocumentStats, PrescriptionExpense, OtcExpense, MedicalSupplyExpense, ParkingExpense, MileageExpense, BusTaxiExpense } from '../../lib/types';
import { paginateBlocks, A4_PAGE_HEIGHT_PX } from '../../lib/paginate';
import { DatasetSwitcher } from '../chrome/DatasetSwitcher';
import { StatsBar } from '../chrome/StatsBar';
import { PrintButton } from '../chrome/PrintButton';
import { ExpenseHeader } from './ExpenseHeader';
import { ExpenseTable, ColumnDef } from './ExpenseTable';
import { PrivacyFooter } from './PrivacyFooter';
import { WcbFooter } from '../worker-progress/WcbFooter';
import './expense-request.css';

export const ExpenseRequestDocument: React.FC = () => {
  const [activeDatasetId, setActiveDatasetId] = useState<string>('reference');
  const [pages, setPages] = useState<number[][]>([[0, 1, 2, 3, 4], [5, 6]]);

  const dataset: ExpenseRequestDataset = useMemo(() => {
    return expenseRequestDatasets.find((d) => d.id === activeDatasetId) || expenseRequestDatasets[0];
  }, [activeDatasetId]);

  const measureRef = useRef<HTMLDivElement>(null);

  // Compute live dataset stats
  const stats: DocumentStats = useMemo(() => {
    const { prescriptions, overTheCounter, medicalSupplies, parking, mileage, busTaxi } = dataset.expenses;
    const recordCount =
      prescriptions.length +
      overTheCounter.length +
      medicalSupplies.length +
      parking.length +
      mileage.length +
      busTaxi.length;

    let dynamicFields = 0;
    if (dataset.workerName) dynamicFields++;
    if (dataset.claimNumber) dynamicFields++;
    if (dataset.workerAppId) dynamicFields++;
    if (dataset.submissionTimestamp) dynamicFields++;
    dynamicFields += recordCount * 4; // average fields per record

    return {
      dynamicFieldCount: dynamicFields,
      selectedOptionsCount: dataset.privacyAccepted ? 1 : 0,
      tableCount: 6,
      recordCount,
    };
  }, [dataset]);

  // Column Definitions for 6 Expense Tables
  const prescriptionCols: ColumnDef<PrescriptionExpense>[] = [
    { header: 'Drug Name', accessor: (r) => r.drugName },
    { header: 'Prescription Date', accessor: (r) => r.prescriptionDate },
    { header: 'Date Purchased', accessor: (r) => r.datePurchased },
    { header: 'Healthcare Provider Name', accessor: (r) => r.providerName },
    { header: 'Paid Amount', accessor: (r) => r.paidAmount, width: '100px' },
  ];

  const otcCols: ColumnDef<OtcExpense>[] = [
    { header: 'Drug Name', accessor: (r) => r.drugName },
    { header: 'Date Purchased', accessor: (r) => r.datePurchased },
    { header: 'Paid Amount', accessor: (r) => r.paidAmount, width: '100px' },
    { header: "Seller's Name", accessor: (r) => r.seller },
    { header: 'Reason for Purchasing', accessor: (r) => r.reason },
  ];

  const supplyCols: ColumnDef<MedicalSupplyExpense>[] = [
    { header: 'Item Purchased', accessor: (r) => r.item },
    { header: 'Date Purchased', accessor: (r) => r.datePurchased },
    { header: 'Was Prescribed?', accessor: (r) => r.prescribed, width: '110px' },
    { header: 'Healthcare Provider Name', accessor: (r) => r.providerName },
    { header: 'Paid Amount', accessor: (r) => r.paidAmount, width: '100px' },
    { header: "Seller's Name", accessor: (r) => r.seller },
  ];

  const parkingCols: ColumnDef<ParkingExpense>[] = [
    { header: 'Address of Healthcare Provider/Medical Facility', accessor: (r) => r.facility },
    { header: 'Date', accessor: (r) => r.date },
    { header: 'Paid Amount', accessor: (r) => r.paidAmount, width: '100px' },
    { header: 'Meter Used?', accessor: (r) => r.meterUsed },
    { header: 'Meter Number', accessor: (r) => r.meterNumber || '—' },
  ];

  const mileageCols: ColumnDef<MileageExpense>[] = [
    { header: 'Appointment Date', accessor: (r) => r.appointmentDate },
    { header: 'Address of Healthcare Provider/Medical Facility', accessor: (r) => r.facility },
    { header: 'Address of Workplace', accessor: (r) => r.workplace },
    { header: 'Number of km (Round Trip)', accessor: (r) => r.km, width: '140px' },
  ];

  const busTaxiCols: ColumnDef<BusTaxiExpense>[] = [
    { header: 'Appointment Date', accessor: (r) => r.appointmentDate },
    { header: 'Address of Starting Point', accessor: (r) => r.startingPoint || '—' },
    { header: 'Address of Healthcare Provider/Medical Facility', accessor: (r) => r.facility },
    { header: 'Bus or Taxi', accessor: (r) => r.transport, width: '100px' },
    { header: 'Total Fare Paid', accessor: (r) => r.fare, width: '110px' },
  ];

  // Component blocks array (0 to 6)
  const sections = [
    <ExpenseTable key="rx" title="Prescription Drugs" columns={prescriptionCols} data={dataset.expenses.prescriptions} />,
    <ExpenseTable key="otc" title="Over-the-Counter Drugs" columns={otcCols} data={dataset.expenses.overTheCounter} />,
    <ExpenseTable key="supplies" title="Bandages, Braces or Other Medical Supplies" columns={supplyCols} data={dataset.expenses.medicalSupplies} />,
    <ExpenseTable key="parking" title="Parking for Medical Appointments" columns={parkingCols} data={dataset.expenses.parking} />,
    <ExpenseTable
      key="mileage"
      title="Mileage to Medical Appointments"
      introLine="The WCB will generally reimburse only those transportation costs which are in excess of costs that would be incurred by the worker while travelling to and from work."
      columns={mileageCols}
      data={dataset.expenses.mileage}
    />,
    <ExpenseTable
      key="bustaxi"
      title="Bus or Taxi Fare for Medical Appointments*"
      footnote="*Note: Pre-approval is required from your WCB representative to claim taxi fare(s)."
      columns={busTaxiCols}
      data={dataset.expenses.busTaxi}
    />,
    <PrivacyFooter key="privacy" accepted={dataset.privacyAccepted} />,
  ];

  // Dynamic measurement & pagination effect
  useLayoutEffect(() => {
    if (!measureRef.current) return;

    const children = Array.from(measureRef.current.children) as HTMLElement[];
    const heights = children.map((child) => Math.max(child.offsetHeight, 50));

    // Reserve 250px for header + footer + intro
    const pageChunks = paginateBlocks(heights, A4_PAGE_HEIGHT_PX, 260);
    setPages(pageChunks);
  }, [dataset]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      
      {/* Chrome Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-100 tracking-tight flex items-center gap-2">
            Medical & Travel Expense Request
            <span className="text-xs bg-amber-500/20 text-amber-400 font-semibold px-2.5 py-0.5 rounded-full border border-amber-500/30">
              Exercise 2
            </span>
          </h1>
          <p className="text-xs text-slate-400">
            Workers Compensation Board of Manitoba · Expense Claim
          </p>
        </div>

        <PrintButton documentTitle="Medical & Travel Expense Request" />
      </div>

      {/* Dataset Switcher */}
      <DatasetSwitcher
        datasets={expenseRequestDatasets}
        activeDatasetId={activeDatasetId}
        onSelectDataset={setActiveDatasetId}
        documentTitle="Expense Request"
      />

      {/* Stats Bar */}
      <StatsBar
        stats={stats}
        totalPages={pages.length}
        claimNumber={dataset.claimNumber}
        workerName={dataset.workerName}
      />

      {/* Off-screen Measurement Container */}
      <div
        ref={measureRef}
        className="expense-form"
        style={{
          position: 'absolute',
          visibility: 'hidden',
          top: '-9999px',
          left: '-9999px',
          width: '180mm',
        }}
      >
        {sections.map((sec) => sec)}
      </div>

      {/* Rendered Document Pages */}
      <div className="document-container">
        {pages.map((blockIndices, pageIdx) => (
          <div key={pageIdx} className="page expense-form">
            
            {/* Header on Every Page */}
            <ExpenseHeader claimNumber={dataset.claimNumber} workerName={dataset.workerName} />

            {/* Intro statement on Page 1 */}
            {pageIdx === 0 && (
              <div className="my-2 text-xs font-semibold text-slate-900 border-b border-slate-300 pb-2">
                <span className="wcb-dynamic-value">{dataset.workerName}</span> requested reimbursement for the following medical and/or travel expenses:
              </div>
            )}

            {/* Page Content Slice */}
            <div className="expense-page-content pb-12">
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
