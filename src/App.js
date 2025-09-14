import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DishListPage from './components/DishListPage/DishListPage';
import IngredientDetailPage from './components/IngredientDetailPage/IngredientDetailPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DishListPage />} />
        <Route path="/ingredients/:dishId" element={<IngredientDetailPage />} />
      </Routes>
    </Router>
  );
}
