import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/chrome/Navbar';
import { Landing } from './components/chrome/Landing';
import { WorkerProgressDocument } from './components/worker-progress/WorkerProgressDocument';
import { ExpenseRequestDocument } from './components/expense-request/ExpenseRequestDocument';
import './styles/tailwind.css';
import './styles/print.css';

export const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 font-sans selection:bg-blue-600 selection:text-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/exercise-1" element={<WorkerProgressDocument />} />
            <Route path="/exercise-2" element={<ExpenseRequestDocument />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
