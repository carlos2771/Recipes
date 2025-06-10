import { Router,  } from 'express';

import { getAllRecipes, recipesByCategory, recipesByCountry, recipesById, recipesByIngredient } from '../services/getAllRecipes';

const router = Router();

router.get('/recipes',getAllRecipes);
router.get('/recipes/byIngredient',recipesByIngredient);
router.get('/recipes/byCountry',recipesByCountry);
router.get('/recipes/byCategory',recipesByCategory);
router.get('/recipes/idMeal',recipesById);

export default router