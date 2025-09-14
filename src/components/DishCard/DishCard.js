import React, { useState } from 'react';
import './DishCard.css';
import { useNavigate } from 'react-router-dom';
import DishDetailModal from '../DishDetailModal/DishDetailModal';
import vegIcon from '../assets/veg.png';
import nonVegIcon from '../assets/non_veg.png'

export default function DishCard({ dish, isSelected, onSelect }) {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className={`dish-card ${isSelected ? 'selected' : ''}`}>
        <div className="dish-info">
            <h3 className="dish-title">
              {dish.name}
               <img
               src={dish.type === 'VEG' ? vegIcon : nonVegIcon}
               alt={dish.type === 'VEG' ? 'Vegetarian' : 'Non-Vegetarian'}
               className="food-icon"
               />
           </h3>

          <p>
            {dish.description.slice(0, 40)}...
            <br />
            <span className="read-more" onClick={() => setShowModal(true)}>Read more</span>
          </p>
          <div className="dish-actions">
            <button className="ingredient-btn" onClick={() => navigate(`/ingredients/${dish.id}`)}>
              <span className="ingredient-icon">🧂</span> Ingredients
            </button>
          </div>
        </div>

        <div className="dish-image-wrapper">
          <img src={dish.category.image || '/default-dish.png'} alt={dish.name} className="dish-image" />
          <button
          className={`add-btn ${isSelected ? 'remove' : ''}`}
          onClick={onSelect}
          >
            {isSelected ? 'Remove' : 'Add +'}
          </button>

        </div>
      </div>

      {showModal && (
       <DishDetailModal
          dish={dish}
          isSelected={isSelected}
          onSelect={onSelect}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}
