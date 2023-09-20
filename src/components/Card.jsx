import React from "react";

const Card = ({ meal, bookmarkHandler }) => {
  const { strMeal, strMealThumb, strCategory, strArea, strInstructions } = meal;

  return (
    <div className="card-item">
      <img src={strMealThumb} alt={strMeal} className="img" />
      <div className="card-text">
        <h2>{strMeal}</h2>
        <h3>{strCategory}</h3>

        <p>{strInstructions ? strInstructions.slice(0, 120) : "not found"}</p>
        <span>{strArea}</span>
        <button onClick={() => bookmarkHandler(meal)} className="btn">
          Bookmark
        </button>
      </div>
    </div>
  );
};

export default Card;
