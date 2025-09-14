# 🎉 Party Menu App

A React web application to help you select dishes for your party, view details, and see ingredients for each dish.

---

## 🚀 Demo
👉 [Live Demo](https://menu-selection-nine.vercel.app/) *(optional — add when deployed)*

---

## ✨ Features
- 🔍 Search dishes by name  
- 🥦 Filter dishes by **Veg / Non-Veg / All**  
- 🍲 Browse dishes by category (**Starter, Main Course, Dessert, Sides**)  
- 📋 View dish details & ingredients  
- ➕ Add / Remove dishes from your selection  
- 📊 Summary bar with selected dishes  

---

## 📂 Project Structure
```
party_menu_app/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── ...
├── src/
│   ├── App.js
│   ├── index.js
│   ├── components/
│   │   ├── DishListPage/
│   │   ├── DishCard/
│   │   ├── DishDetailModal/
│   │   ├── IngredientDetailPage/
│   │   ├── SummaryBar/
│   │   └── assets/
│   ├── data/
│   │   ├── dishes.json
│   │   └── ingredients.json
│   └── styles/
│       └── global.css
└── package.json
```

---

## 📦 Getting Started

### ✅ Prerequisites
- Node.js (v18+ recommended)  
- npm (comes with Node.js)  

### ⚙️ Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/party_menu_app.git
   cd party_menu_app
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📊 Usage
- Use the **search bar** to find dishes.  
- Filter dishes using the **Veg/Non-Veg/All toggles**.  
- Click on a dish → open detail modal → view info or ingredients.  
- Add dishes to your selection → view the **Summary bar** at bottom.  

---

## 📑 Data Files
- `src/data/dishes.json` → list of all available dishes (`id`, `name`, `description`, `category`, `type`).  
- `src/data/ingredients.json` → ingredient list mapped to each dish.  

> ✏️ You can edit these files to customize your menu.

---

## 🛠️ Technologies Used
- ⚛️ React  
- 🌐 React Router  
- 🎨 CSS  

---

## 📜 License
MIT
