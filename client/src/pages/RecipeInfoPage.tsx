import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import  { fetchById, fetchByCategory } from "../services/apis";
import type { Recipe } from "../types/Recipe";
import Sidebar from "../components/Sidebar";

export default function RecipeInfoPage() {
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [related, setRelated] = useState<Recipe[]>([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getRecipe = async () => {
      const res = await fetchById(id!);
      const r = res.data.meals?.[0];
      setRecipe(r);

      if (r?.strCategory) {
        const relatedRes = await fetchByCategory(r.strCategory);
        setRelated(relatedRes.data.meals);
      }
    };
    getRecipe();
  }, [id]);

  if (!recipe) return <p>Loading...</p>;

  const ingredients = Object.entries(recipe)
    .filter(([key, value]) => key.startsWith("strIngredient") && value)
    .map(([value]) => value);

  return (
    <div className="recipe-info-page">
      <div className="main-content">
        <img src={recipe.strMealThumb} alt={recipe.strMeal} />
        <h2>{recipe.strMeal}</h2>
        <h3 onClick={() => navigate(`/?country=${recipe.strArea}`)}>{recipe.strArea}</h3>
        <p>{recipe.strInstructions}</p>
        <ul>
          {ingredients.map((ingredient) => (
            <li key={ingredient} onClick={() => navigate(`/?ingredient=${ingredient}`)}>
              {ingredient}
            </li>
          ))}
        </ul>
      </div>
      <aside>
        <h4>More in {recipe.strCategory}</h4>
        {related.map((r) => (
          <div key={r.idMeal} onClick={() => navigate(`/recipe/${r.idMeal}`)}>
            {r.strMeal}
          </div>
        ))}
      </aside>
      <Sidebar recipes={related} currentId={recipe.idMeal} />
    </div>
  );
}
