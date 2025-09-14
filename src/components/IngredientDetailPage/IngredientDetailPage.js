import React from "react";
import "./IngredientDetailPage.css";
import { useParams, useNavigate } from "react-router-dom";
import ingredientsData from "../../data/ingredients.json";
import dishesData from "../../data/dishes.json";

export default function IngredientDetailPage() {
  const { dishId } = useParams();
  const navigate = useNavigate();
  const dish = ingredientsData[dishId];

  if (!dish) {
    return <div className="ingredient-page">Dish not found.</div>;
  }

  return (
    <div className="ingredient-page">
      {/* Top Header */}
      <div className="ingredient-header">
        <button className="back-btn" onClick={() => navigate("/")}>
          ←
        </button>
        <h1 className="header-title">Ingredients</h1>
      </div>

      {/* Dish Info Section */}
      <div className="dish-info-section">
        <div className="dish-text">
          <h2 className="dish-name">{dish.dishName}</h2>
          <p className="dish-description">{dish.description}</p>
        </div>
        <img
          src={dishesData[0].category.image || "/default-dish.png"}
          alt={dish.dishName}
          className="dish-info-image"
        />
      </div>

      {/* Ingredients Section */}
      <div className="ingredients-section">
        <h3 className="section-heading">Ingredients (for 2 people)</h3>
        <hr className="divider" />

        <ul className="ingredient-list">
          {dish.ingredients.map((item, index) => (
            <li key={index} className="ingredient-item">
              <span className="ingredient-name">{item.name}</span>
              <span className="ingredient-quantity">{item.quantity}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
