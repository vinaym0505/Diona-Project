import { ExpenseRequestDataset } from '../lib/types';

export const referenceData: ExpenseRequestDataset = {
  id: "reference",
  label: "Reference Data",
  claimNumber: "20042047",
  workerName: "Madeleine Willson",
  workerAppId: "712041",
  submissionTimestamp: "March 28, 2024 20:43",
  privacyAccepted: true,
  expenses: {
    prescriptions: [
      { drugName: "Naproxen", prescriptionDate: "February 28, 2024", datePurchased: "February 29, 2024", providerName: "Dr. Best", paidAmount: "$20.00" },
    ],
    overTheCounter: [
      { drugName: "Advil", datePurchased: "March 28, 2024", paidAmount: "$8.00", seller: "Shoppers Drug Mart", reason: "Pain" },
    ],
    medicalSupplies: [
      { item: "Tensor", datePurchased: "February 28, 2024", prescribed: "Yes", providerName: "Dr. Best", paidAmount: "$10.00", seller: "Shoppers DrugMart" },
    ],
    parking: [
      { facility: "333 St Mary Ave, Winnipeg MB R3C4A5, Canada", date: "March 28, 2024", paidAmount: "$10.00", meterUsed: "yes", meterNumber: "12245" },
    ],
    mileage: [
      { appointmentDate: "March 28, 2024", facility: "HSC, 820 Sherbrook St, Winnipeg MB R3A 1R9, Canada", workplace: "WCB, 333 Broadway, Winnipeg MB R3C 4W3, Canada", km: "20 km" },
    ],
    busTaxi: [
      { appointmentDate: "March 28, 2024", startingPoint: "", facility: "HSC Winnipeg Women's Hospital, 665 William Ave, Winnipeg MB R3E 0Z2, Canada", transport: "Bus", fare: "$3.00" },
      { appointmentDate: "March 27, 2024", startingPoint: "25 Furby St, Winnipeg MB R3C2A2, Canada", facility: "440 Edmonton St, Winnipeg MB R3B 2M4, Canada", transport: "Taxi", fare: "$15.00" },
    ],
  },
};

export const largeDataset: ExpenseRequestDataset = {
  id: "large",
  label: "Large Dataset (10+ Records)",
  claimNumber: "20077654",
  workerName: "Ravi Patel",
  workerAppId: "902187",
  submissionTimestamp: "June 12, 2024 11:47",
  privacyAccepted: true,
  expenses: {
    prescriptions: [
      { drugName: "Naproxen", prescriptionDate: "May 1, 2024", datePurchased: "May 2, 2024", providerName: "Dr. Best", paidAmount: "$20.00" },
      { drugName: "Amoxicillin", prescriptionDate: "May 10, 2024", datePurchased: "May 10, 2024", providerName: "Dr. Best", paidAmount: "$15.50" },
      { drugName: "Cyclobenzaprine", prescriptionDate: "May 18, 2024", datePurchased: "May 19, 2024", providerName: "Dr. Anika Sharma", paidAmount: "$32.00" },
    ],
    overTheCounter: [
      { drugName: "Advil", datePurchased: "May 3, 2024", paidAmount: "$8.00", seller: "Shoppers Drug Mart", reason: "Pain" },
      { drugName: "Tylenol", datePurchased: "May 15, 2024", paidAmount: "$9.50", seller: "Rexall", reason: "Headache" },
      { drugName: "Robax Platinum", datePurchased: "May 22, 2024", paidAmount: "$14.00", seller: "Shoppers Drug Mart", reason: "Muscle spasm" },
      { drugName: "Polysporin", datePurchased: "June 1, 2024", paidAmount: "$11.25", seller: "Walmart Pharmacy", reason: "Wound care" },
    ],
    medicalSupplies: [
      { item: "Tensor bandage", datePurchased: "May 2, 2024", prescribed: "Yes", providerName: "Dr. Best", paidAmount: "$10.00", seller: "Shoppers DrugMart" },
      { item: "Wrist brace", datePurchased: "May 20, 2024", prescribed: "Yes", providerName: "Dr. Anika Sharma", paidAmount: "$28.00", seller: "Wellwise" },
      { item: "Ice pack", datePurchased: "May 21, 2024", prescribed: "No", providerName: "", paidAmount: "$12.00", seller: "Shoppers Drug Mart" },
    ],
    parking: [
      { facility: "333 St Mary Ave, Winnipeg MB R3C4A5, Canada", date: "May 1, 2024", paidAmount: "$10.00", meterUsed: "yes", meterNumber: "12245" },
      { facility: "HSC, 820 Sherbrook St, Winnipeg MB R3A 1R9, Canada", date: "May 18, 2024", paidAmount: "$12.00", meterUsed: "no", meterNumber: "" },
      { facility: "Pan Am Clinic, 75 Poseidon Bay, Winnipeg MB R3M 3E4, Canada", date: "June 1, 2024", paidAmount: "$8.00", meterUsed: "yes", meterNumber: "40312" },
    ],
    mileage: [
      { appointmentDate: "May 1, 2024", facility: "HSC, 820 Sherbrook St, Winnipeg MB R3A 1R9, Canada", workplace: "WCB, 333 Broadway, Winnipeg MB R3C 4W3, Canada", km: "20 km" },
      { appointmentDate: "May 18, 2024", facility: "Pan Am Clinic, 75 Poseidon Bay, Winnipeg MB R3M 3E4, Canada", workplace: "WCB, 333 Broadway, Winnipeg MB R3C 4W3, Canada", km: "26 km" },
      { appointmentDate: "May 22, 2024", facility: "Concordia Hospital, 1095 Concordia Ave, Winnipeg MB R2K 2M9, Canada", workplace: "WCB, 333 Broadway, Winnipeg MB R3C 4W3, Canada", km: "18 km" },
      { appointmentDate: "June 1, 2024", facility: "Pan Am Clinic, 75 Poseidon Bay, Winnipeg MB R3M 3E4, Canada", workplace: "WCB, 333 Broadway, Winnipeg MB R3C 4W3, Canada", km: "26 km" },
    ],
    busTaxi: [
      { appointmentDate: "May 3, 2024", startingPoint: "", facility: "HSC Winnipeg Women's Hospital, 665 William Ave, Winnipeg MB R3E 0Z2, Canada", transport: "Bus", fare: "$3.00" },
      { appointmentDate: "May 10, 2024", startingPoint: "25 Furby St, Winnipeg MB R3C2A2, Canada", facility: "440 Edmonton St, Winnipeg MB R3B 2M4, Canada", transport: "Taxi", fare: "$15.00" },
      { appointmentDate: "May 20, 2024", startingPoint: "25 Furby St, Winnipeg MB R3C2A2, Canada", facility: "Wellwise, 1500 Regent Ave W, Winnipeg MB R2C 3B2, Canada", transport: "Bus", fare: "$3.00" },
      { appointmentDate: "June 1, 2024", startingPoint: "25 Furby St, Winnipeg MB R3C2A2, Canada", facility: "Pan Am Clinic, 75 Poseidon Bay, Winnipeg MB R3M 3E4, Canada", transport: "Taxi", fare: "$18.50" },
    ],
  },
};

export const emptyDataset: ExpenseRequestDataset = {
  id: "empty",
  label: "Empty Dataset (0 Records)",
  claimNumber: "20099002",
  workerName: "Alex Kowalski",
  workerAppId: "600120",
  submissionTimestamp: "July 2, 2024 08:30",
  privacyAccepted: true,
  expenses: { prescriptions: [], overTheCounter: [], medicalSupplies: [], parking: [], mileage: [], busTaxi: [] },
};

export const expenseRequestDatasets = [referenceData, largeDataset, emptyDataset];
