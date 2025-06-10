import type { Recipe } from "../types/Recipe";

import { useNavigate } from "react-router-dom";

type Props = {
  recipe: Recipe;
};

export default function Card({ recipe }: Props) {
  const navigate = useNavigate();
  return (
    <div className="recipe-card" onClick={() => navigate(`/recipe/${recipe.idMeal}`)}>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <h3>{recipe.strMeal}</h3>
    </div>
  );
}
