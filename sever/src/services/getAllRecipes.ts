import axios from "axios"
export const getAllRecipes = async (_req: any, res: any) => {  
    try {
        const { data } = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=');
        return res.json(data.meals);
      

    } catch (err) {
      return res.status(500).json({ error: 'Error fetching recipes' });
    }
}

export const recipesByIngredient = async (req: any, res: any) => {
    const { ingredient } = req.query;
  
    try {
      if (!ingredient) {
        return res.json("The ingredient does not exists");
      }
      let url: string = ""
        url =  `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient} `;
      
      const { data } = await axios.get(url);
      console.log("data",data);
      
      return res.json(data).status(200);
    } catch (err) {
      return res.status(500).json({ error: 'Error fetching recipes' });
    }
}

export const recipesByCountry = async (req: any, res: any) => {
    const { area } = req.query;
  
    try {
      if (!area) {
        return res.json("The area does not exists");
      }
      let url: string = ""
      url =  `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area} `;
      
      const { data } = await axios.get(url);
      
      return res.json(data).status(200);
    } catch (err) {
      return res.status(500).json({ error: 'Error fetching recipes' });
    }
}
export const recipesByCategory = async (req: any, res: any) => {
    const { category } = req.query;
  
    try {
      if (!category) {
        return res.json("The category does not exists");
      }
      let url: string = ""
      url = ` https://www.themealdb.com/api/json/v1/1/filter.php?c=${category} `;
      
      const { data } = await axios.get(url);
      
      return res.json(data).status(200);
    } catch (err) {
      return res.status(500).json({ error: 'Error fetching recipes' });
    }
}
export const recipesById = async (req: any, res: any) => {
    const { idMeal } = req.query;
  
    try {
      if (!idMeal) {
        return res.json("The _id does not exists");
      }
      let url: string = ""
      url =   `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal} `;
      
      const { data } = await axios.get(url);
      
      return res.json(data).status(200);
    } catch (err) {
      return res.status(500).json({ error: 'Error fetching recipes' });
    }
}
