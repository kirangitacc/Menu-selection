import React from 'react';
import './FilterToggle.css';

export default function FilterToggle({ current, onChange }) {
  const filters = [
    { label: 'Veg', value: 'VEG', className: 'veg' },
    { label: 'Non-Veg', value: 'NON-VEG', className: 'non-veg' },
    { label: 'All', value: 'All', className: 'all' }
  ];

  return (
    <div className="filter-toggle">
      {filters.map(f => (
        <span
          key={f.value}
          className={`filter-dot ${f.className} ${current === f.value ? 'active' : ''}`}
          onClick={() => onChange(f.value)}
          title={f.label}
        ></span>
      ))}
    </div>
  );
}
