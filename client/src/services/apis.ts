import axios from "axios";

const API = "http://localhost:3000/api";

export const fetchAllRecipes = async () => axios.get(`${API}/recipes`);
export const fetchByIngredient = (ingredient: string) => axios.get(`${API}/recipes/byIngredient?ingredient=${ingredient}`);
export const fetchByCountry = (area: string) => axios.get(`${API}/recipes/byCountry?area=${area}`);
export const fetchByCategory = (category: string) => axios.get(`${API}/recipes/byCategory?category=${category}`);
export const fetchById = (idMeal: string) => axios.get(`${API}/recipes/idMeal?idMeal=${idMeal}`);
