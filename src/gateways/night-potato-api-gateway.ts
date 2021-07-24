import axios from 'axios';
import { IRecipePostRequest } from '../models-and-constants/IRecipePostRequest';

const apiUrl = 'https://night-potato-next-js.netlify.app/api';

export async function postRecipe(authToken: string, userToken: string, recipe: IRecipePostRequest) {
  try {
    return await axios.post(`${apiUrl}/recipes?authToken=${authToken}&userId=${userToken}`, recipe);
  } catch (error) {
    throw new Error(error);
  }
}

export async function getAllRecipes() {
  try {
    return await axios.get(`${apiUrl}/recipes`);
  } catch (error) {
    throw new Error(error);
  }
}

export async function getUserRecipes(userId: string) {
  try {
    return await axios.get(`${apiUrl}/recipes?userId=${userId}`);
  } catch (error) {
    throw new Error(error);
  }
}

export async function getSingleRecipe(recipeId: string) {
  try {
    return await axios.get(`${apiUrl}/recipes?recipeId=${recipeId}`);
  } catch (error) {
    throw new Error(error);
  }
}
