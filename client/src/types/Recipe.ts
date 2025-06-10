export interface Recipe {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
    strArea?: string;
    strCategory?: string;
    strInstructions?: string;
    [key: string]: string | undefined;
  }