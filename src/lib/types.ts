export type ReturnToWorkStatus = "notMissedTime" | "notReturned" | "returnedOn";
export type WorkingArrangement = "fullRegular" | "fullReduced" | "modifiedRegular" | "modifiedReduced" | "other";
export type RecoveryStatus = "notRecovered" | "recovered";
export type YesNo = "yes" | "no";
export type YesNoStr = "Yes" | "No";

export interface WorkerProgressDataset {
  id: string;
  label: string;
  claimNumber: string;
  workerName: string;
  workerAppId: string;
  submissionTimestamp: string;
  returnToWorkStatus: ReturnToWorkStatus;
  returnToWorkDate: string | null;
  workingArrangement: WorkingArrangement | null;
  workingArrangementOther: string;
  rtWorkGoingComments: string;
  expectedReturnDate: string | null;
  concernsText: string;
  employerContactName: string;
  employerContactDate: string | null;
  recoveryStatus: RecoveryStatus;
  recoveryComments: string;
  painScore: number | null; // 1-10
  medicalTreatmentStatus: YesNo;
  providerType: string;
  lastTreatmentDate: string | null;
  lastProviderName: string;
  nextTreatmentDate: string | null;
  nextProviderName: string;
  chiroPhysioFreq: string;
  medicationStatus: YesNo;
  medicationName: string;
  homeExerciseStatus: YesNo;
  exerciseList: string;
  additionalInfo: string;
}

export interface PrescriptionExpense {
  drugName: string;
  prescriptionDate: string;
  datePurchased: string;
  providerName: string;
  paidAmount: string;
}

export interface OtcExpense {
  drugName: string;
  datePurchased: string;
  paidAmount: string;
  seller: string;
  reason: string;
}

export interface MedicalSupplyExpense {
  item: string;
  datePurchased: string;
  prescribed: YesNoStr;
  providerName: string;
  paidAmount: string;
  seller: string;
}

export interface ParkingExpense {
  facility: string;
  date: string;
  paidAmount: string;
  meterUsed: string;
  meterNumber: string;
}

export interface MileageExpense {
  appointmentDate: string;
  facility: string;
  workplace: string;
  km: string;
}

export interface BusTaxiExpense {
  appointmentDate: string;
  startingPoint: string;
  facility: string;
  transport: "Bus" | "Taxi";
  fare: string;
}

export interface ExpenseRequestDataset {
  id: string;
  label: string;
  claimNumber: string;
  workerName: string;
  workerAppId: string;
  submissionTimestamp: string;
  privacyAccepted: boolean;
  expenses: {
    prescriptions: PrescriptionExpense[];
    overTheCounter: OtcExpense[];
    medicalSupplies: MedicalSupplyExpense[];
    parking: ParkingExpense[];
    mileage: MileageExpense[];
    busTaxi: BusTaxiExpense[];
  };
}

export interface DocumentStats {
  dynamicFieldCount: number;
  selectedOptionsCount: number;
  tableCount?: number;
  recordCount?: number;
}
