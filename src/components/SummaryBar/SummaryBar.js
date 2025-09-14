import React from 'react';
import './SummaryBar.css';

export default function SummaryBar({ selectedIds = [], dishes = [] }) {
  const totalSelected = selectedIds.length;

  const handleContinue = () => {
    console.log('Continue clicked with selected dishes:', selectedIds);
  };

  return (
      <div className="summary-bar">
        <div className="summary-info">
          <span>Total Dish Selected {totalSelected}</span>
          <span className="arrow">→</span><br />
        </div>

        <div className="continue-container">
           <button className="continue-btn" onClick={handleContinue}>
            Continue
           </button>
        </div>
      </div>
  );
}
