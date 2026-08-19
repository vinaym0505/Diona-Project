# PDF2Web — WCB Manitoba

> **PDF2Web — Documents, but dynamic.**  
> Dynamic PDF Form Engine built for the Workers Compensation Board of Manitoba (WCB).

---

## 📌 Stack Deviation Note

> **Important Compliance Note**: The original brief specified vanilla HTML/CSS/JS without frameworks. However, per explicit project brief override (§0), this project was built using **React 19 + Tailwind CSS v4 + Watermelon UI / shadcn component primitives** for the application shell, navigation, dataset switcher, and dashboard chrome. The rendered document pages themselves (Worker Progress Report and Medical & Travel Expense Request) maintain **100% exact visual fidelity** to the original WCB Manitoba PDF forms using dedicated plain CSS form styling, black grid borders, radio glyph indicators (`[X]`/`[ ]`), dark-blue dynamic values on black static labels, and A4 print media queries. No generic framework card or button components bleed into the printed output.

---

## 📹 Narrated Demonstration Videos

As required by the assignment brief, two ~2-minute narrated videos demonstrating the live browser execution, dynamic dataset switching, PDF fidelity, and code walkthrough are linked below:

| Exercise | Document Title | Video Link |
|---|---|---|
| **Exercise 1** | Worker Progress Report | [Watch Exercise 1 Video](#) *(Insert Loom / YouTube / Drive link)* |
| **Exercise 2** | Medical & Travel Expense Request | [Watch Exercise 2 Video](#) *(Insert Loom / YouTube / Drive link)* |

---

## 📱 WhatsApp Submission Format

Before the deadline, send this exact line in the designated WhatsApp group:

```text
[Your Name] - [Your GitHub Repository Link]
```

---

## 🎯 Overview

Diona Dynamic Forms converts legacy static PDF forms into responsive, dynamic React web applications capable of:
1. **Seamless Persona Dataset Switching**: Instantly switch between named datasets (e.g. *Reference Data*, *Active Treatment*, *Full Duty Data*, *Large Dataset (10+ Records)*, *Empty Dataset (0 Records)*).
2. **Measurement-Based Dynamic Pagination**: Recalculates printable page boundaries (`Page X of Y`) on the fly using off-screen DOM measurement so no section or table row (`<tr>`) is ever awkwardly split across page breaks.
3. **Pixel-Faithful Print Output**: Clean `@media print` rules that hide site chrome and render pristine A4 PDF forms directly via browser print (`window.print()`).

This project is completely client-side and does not require a backend or database.

---

## 🚀 Quick Start

### 1. Prerequisites
- Node.js v18+ and `npm` installed.

### 2. Installation & Running Locally
```bash
# Clone or navigate to the project directory
cd Diona-Project

# Install dependencies
npm install

# Start local development server
npm run dev
```

Open your browser to `http://localhost:5173`.

### 3. Production Build
```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
diona-dynamic-forms/
├── index.html
├── README.md                           # Comprehensive documentation, video links & Stack Deviation Note
├── AI_USAGE.md                         # Detailed AI assistance & prompt history
├── package.json                        # Dependencies (React 19, Tailwind v4, Lucide)
├── vite.config.ts                      # Vite configuration with @/ path aliasing
├── tsconfig.json & tsconfig.app.json   # TypeScript configuration
├── public/
│   └── assets/
│       └── wcb-logo.svg                # WCB Manitoba official logo graphic
└── src/
    ├── main.tsx                        # Application entry point
    ├── App.tsx                         # Router setup (/, /exercise-1, /exercise-2)
    ├── lib/
    │   ├── types.ts                    # TypeScript interfaces for datasets & stats
    │   └── paginate.ts                 # DOM height measurement pagination engine
    ├── data/
    │   ├── workerProgressDatasets.ts   # Datasets for Exercise 1
    │   └── expenseRequestDatasets.ts   # Datasets for Exercise 2
    ├── styles/
    │   ├── tailwind.css                # Tailwind CSS v4 & glassmorphism theme
    │   └── print.css                   # @page A4 & @media print rules
    └── components/
        ├── chrome/                     # Watermelon UI / shadcn styled shell
        │   ├── Navbar.tsx
        │   ├── Landing.tsx
        │   ├── DocumentCard.tsx
        │   ├── DatasetSwitcher.tsx
        │   ├── StatsBar.tsx
        │   └── PrintButton.tsx
        ├── worker-progress/            # Exercise 1: Worker Progress Report
        │   ├── WorkerProgressDocument.tsx
        │   ├── WcbHeader.tsx
        │   ├── ReturnToWorkSection.tsx
        │   ├── RecoverySection.tsx
        │   ├── MedicalTreatmentSection.tsx
        │   ├── OtherInfoSection.tsx
        │   ├── CertificationSection.tsx
        │   ├── WcbFooter.tsx
        │   └── worker-progress.css
        └── expense-request/            # Exercise 2: Expense Request Form
            ├── ExpenseRequestDocument.tsx
            ├── ExpenseHeader.tsx
            ├── ExpenseTable.tsx        # Reusable parameterized table renderer
            ├── PrivacyFooter.tsx
            └── expense-request.css
```

---

## 📊 Datasets & Persona Switching

Instead of generic "Dataset 1/2" labels, both exercises feature named persona datasets:

### Exercise 1 — Worker Progress Report
- **Reference Data**: Confirmed values straight from the source PDF (Madeleine Willson, Claim #20042047).
- **Active Treatment**: Ongoing treatment persona exercise (James Okafor) with active physio, medication, exercises, and return-to-work concerns.
- **Full Duty Data**: Clean happy-path persona (Sarah Thibault) with full regular duties and minimal text.

### Exercise 2 — Medical & Travel Expense Request
- **Reference Data**: Source PDF reference dataset (Madeleine Willson).
- **Large Dataset (10+ Records)**: 3–5 records per category (Ravi Patel) testing multi-page table pagination and table header repetition.
- **Empty Dataset (0 Records)**: Zero records across all 6 tables (Alex Kowalski) verifying clean empty table states ("No records submitted").

---

## 📄 Dynamic Pagination Engine

The pagination engine (`src/lib/paginate.ts`) operates via DOM height measurement:
1. When a dataset is loaded, elements are measured inside an off-screen container before rendering (`useLayoutEffect`).
2. Height of each section block or table row is compared against available printable A4 height (`1120px` minus header/footer reserves).
3. `paginateBlocks` splits content into page slices so no table row or input field is visually clipped across page breaks.
4. When switching datasets, pagination automatically recalculates `Page X of Y` footers instantly.

---

## 🖨️ Printing & PDF Export

Click the **Print / Export PDF** button (or press `Ctrl + P`) on any document page:
- Browser print dialog opens powered by `window.print()`.
- All site chrome, navigation bars, dataset tabs, and print buttons are automatically hidden via `@media print`.
- Exact A4 aspect ratios, page breaks (`page-break-after: always`), and high-resolution WCB form headers render cleanly.

---

## 🧪 Testing Checklist

- [x] **Landing Dashboard**: Responsive layout, feature pills, document cards, route links.
- [x] **Exercise 1 (Worker Progress Report)**: All PDF fields rendered, 1–10 pain scale display, radio glyphs (`[X]` vs `[ ]`), dark blue values (`#003366`), legal certification verbatim, 3 dataset switcher.
- [x] **Exercise 2 (Expense Request Form)**: 6 dynamic tables rendered with exact columns, `Large Dataset` splits across multi-page tables, `Empty Dataset` renders clean empty state, 3 dataset switcher.
- [x] **Print Output**: Clean A4 print layout, chrome hidden, zero row clipping.
- [x] **Zero Backend**: Completely client-side, static asset bundle.

---

## 📜 License & Compliance

Built for the Workers Compensation Board of Manitoba (WCB).  
This project is completely client-side and does not require a backend or database.
