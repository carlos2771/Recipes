import { useEffect, useState } from "react";
import { fetchAllRecipes, fetchByCategory, fetchByCountry, fetchByIngredient } from "../services/apis";
import type { Recipe } from "../types/Recipe";
import Card from "../components/Cards";
import { useSearchParams } from "react-router-dom";

export default function RecipeListPage() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const fetchRecipes = async () => {
      const ingredient = searchParams.get("ingredient");
      const country = searchParams.get("country");
      const category = searchParams.get("category");

      let res;
      if (ingredient) {
        res = await fetchByIngredient(ingredient);
      } else if (country) {
        res = await fetchByCountry(country);
      } else if (category) {
        res = await fetchByCategory(category);
      } else {
        res = await fetchAllRecipes();
      }

      setRecipes(res.data.meals || []);
    };

    fetchRecipes();
  }, [searchParams]);

  return (
    <div>
      <h1>Recipes {searchParams.toString() && `(Filtered)`}</h1>
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <Card key={recipe.idMeal} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
