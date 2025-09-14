import React from "react";
import "./DishDetailModal.css";
import vegIcon from "../assets/veg.png";
import nonVegIcon from "../assets/non_veg.png";
import { useNavigate } from "react-router-dom";

export default function DishDetailModal({ dish, isSelected, onSelect, onClose }) {
  const navigate = useNavigate();

  const handleClickInside = (e) => e.stopPropagation();

  return (
    <div className="dish-modal-overlay" onClick={onClose}>
      <div className="dish-modal" onClick={handleClickInside}>
        <img
          src={dish.category.image || "/default-dish.png"}
          alt={dish.name}
          className="dish-modal-image"
        />

        {/* Header row with dish + icon and button */}
        <div className="dish-modal-header">
          <div className="dish-header-left">
            <h2 className="dish-modal-title">{dish.name}</h2>
            <img
              src={dish.type === "VEG" ? vegIcon : nonVegIcon}
              alt={dish.type}
              className="dish-type-icon"
            />
          </div>

          <button
            className={`dish-modal-action ${isSelected ? "remove" : ""}`}
            onClick={() => onSelect(dish.id)}
          >
            {isSelected ? "Remove" : "Add +"}
          </button>
        </div>

        <p className="dish-modal-description">{dish.description}</p>

        <button
          className="ingredient-btn"
          onClick={() => navigate(`/ingredients/${dish.id}`)}
        >
          🧂 Ingredients
        </button>
      </div>
    </div>
  );
}
