# PDF2Web — WCB Manitoba

> **PDF2Web — Documents, but dynamic.**  
> A dynamic web-based PDF form engine built for the Workers Compensation Board of Manitoba (WCB).

---

## 📌 Project Overview

PDF2Web converts static WCB Manitoba PDF forms into dynamic, responsive web documents.

The project contains two exercises:

1. **Worker Progress Report** — 3-page dynamic form
2. **Medical & Travel Expense Request** — Dynamic expense form with multiple tables

The main goal is to preserve the original PDF structure and visual fidelity while allowing the document content to change dynamically based on different datasets.

The application supports:

- Dynamic data rendering
- Multiple datasets/personas
- Dynamic table rows
- Automatic pagination
- A4 print layout
- Browser-based PDF generation
- Responsive application UI
- Dataset switching
- Empty and large dataset handling

The project is completely client-side and **does not require a backend or database**.

---

## 🎯 Requirement Understanding

The supplied PDF documents were treated as the primary source of truth.

### Exercise 1 — Worker Progress Report

The dynamic elements identified include:

- Worker name
- Claim number
- Worker App ID
- Submission timestamp
- Report date
- Return-to-work status
- Return-to-work date
- Working arrangement
- Return-to-work comments
- Expected return date
- Concerns about returning to work
- Employer contact
- Recovery status
- Recovery comments
- Pain score
- Medical treatment information
- Provider information
- Medication information
- Home exercise information
- Additional information

The static elements include the WCB branding, labels, document structure, certification/legal text and other fixed content.

### Exercise 2 — Medical & Travel Expense Request

The dynamic sections include:

- Prescription Drugs
- Over-the-Counter Drugs
- Medical Supplies
- Parking for Medical Appointments
- Mileage to Medical Appointments
- Bus/Taxi Expenses

Each section can contain a variable number of records.

---

## 🧠 Assumptions

The following assumptions were made where the PDF did not explicitly define implementation behavior:

- Static labels and document text remain fixed.
- User-specific values are treated as dynamic data.
- Repeating table sections are represented as arrays of objects.
- Browser printing is used for PDF generation.
- A4 dimensions are maintained using CSS print rules.
- Large datasets may create additional pages when required.
- Empty datasets should not break the application and instead display a clean empty state.

---

## 🛠️ Technology Stack

The application uses:

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- React component architecture
- CSS
- Browser DOM APIs
- Native browser printing

### No Backend Required

This project does **not** use:

- SQL
- MySQL
- PostgreSQL
- MongoDB
- Firebase
- Supabase
- REST APIs
- Authentication
- Backend servers

All application data is stored locally in TypeScript/JavaScript dataset files.

---

## 🚀 Quick Start

### Prerequisites

Install:

- Node.js v18+
- npm

### Install Dependencies

```bash
npm install
