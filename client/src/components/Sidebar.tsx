import type { Recipe } from "../types/Recipe";
import { useNavigate } from "react-router-dom";

type SidebarProps = {
  recipes: Recipe[];
  currentId: string;
};

export default function Sidebar({ recipes, currentId }: SidebarProps) {
  const navigate = useNavigate();

  return (
    <aside className="sidebar">
      <h3>Más recetas de esta categoría</h3>
      <ul>
        {recipes
          .filter((r) => r.idMeal !== currentId) // excluye la receta actual
          .map((recipe) => (
            <li key={recipe.idMeal} onClick={() => navigate(`/recipe/${recipe.idMeal}`)}>
              <img src={recipe.strMealThumb} alt={recipe.strMeal} width={60} />
              <span>{recipe.strMeal}</span>
            </li>
          ))}
      </ul>
    </aside>
  );
}
