import React, { useState } from 'react';
import './DishListPage.css';
import dishes from '../../data/dishes.json';
import DishCard from '../DishCard/DishCard';
import SummaryBar from '../SummaryBar/SummaryBar';
import vegIcon from '../assets/veg.png';
import nonVegIcon from '../assets/non_veg.png';

export default function DishListPage() {
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState([]);
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('MAIN COURSE');
  const [selectedCuisine, setSelectedCuisine] = useState('North Indian');
  const [expanded, setExpanded] = useState('North Indian');

  const categories = ['STARTER', 'MAIN COURSE', 'DESSERT', 'SIDES'];
  const formatLabel = str => {
    const map = {
      'MAIN COURSE': 'Main Courses',
      'STARTER': 'Starters',
      'DESSERT': 'Desserts',
      'SIDES': 'Sides'
    };
    return map[str] || str.charAt(0) + str.slice(1).toLowerCase();
  };

  const filtered = dishes.filter(d =>
    (filter === 'All' || d.type === filter) &&
    d.mealType === activeCategory &&
    d.category.name === selectedCuisine &&
    d.name.toLowerCase().includes(search.toLowerCase())
  );

  const toggleSelect = id =>
    setSelected(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );

  return (
    <div className="dish-list-page">
      <div className="top-bar">
        <div className="search-wrapper">
          <span className="search-icon back">←</span>
          <input
            className="search-bar"
            type="text"
            placeholder="Search dish for your party......"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <span className="search-icon magnify">🔍</span>
        </div>


        <div className="category-tabs">
          {categories.map(cat => {
            const count = dishes.filter(d => selected.includes(d.id) && d.mealType === cat).length;
            return (
              <button
                key={cat}
                className={activeCategory === cat ? 'active' : ''}
                onClick={() => setActiveCategory(cat)}
              >
                {formatLabel(cat)} {count}
              </button>
            );
          })}
        </div>

        <div className="category-header">
          <h3>
            {formatLabel(activeCategory)} Selected (
            {
              selected.filter(id => {
                const dish = dishes.find(d => d.id === id);
                return dish?.mealType === activeCategory;
              }).length
            })
          </h3>

          <div className="food-type-toggles">
            <img
              src={vegIcon}
              alt="Indian Vegetarian"
              className={`food-toggle-icon ${filter === 'VEG' ? 'active' : ''}`}
              onClick={() => setFilter('VEG')}
              title="Indian Vegetarian"
            />
            <img
              src={nonVegIcon}
              alt="Non-Vegetarian"
              className={`food-toggle-icon ${filter === 'NON-VEG' ? 'active' : ''}`}
              onClick={() => setFilter('NON-VEG')}
              title="Non-Vegetarian"
            />
          </div>
        </div>
      </div>

      <div className="dish-section">
        <div className="cuisine-dropdown" onClick={() => setExpanded(prev => prev === selectedCuisine ? '' : selectedCuisine)}>
          <h4>{selectedCuisine}</h4>
          <span className="dropdown-arrow">{expanded === selectedCuisine ? '🔼' : '▼'}</span>
        </div>

        {expanded === selectedCuisine && (
          <div className="dish-list no-style">
            {filtered.map(d => (
              <DishCard
                key={d.id}
                dish={d}
                isSelected={selected.includes(d.id)}
                onSelect={() => toggleSelect(d.id)}
                setSelectedCuisine={setSelectedCuisine}
              />
            ))}
          </div>
        )}
      </div>

      <SummaryBar selectedIds={selected} dishes={dishes} />
    </div>
  );
}
