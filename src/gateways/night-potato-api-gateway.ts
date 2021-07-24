import axios from 'axios';
import { IRecipeRequest } from '../models-and-constants/IRecipeRequest';

const apiUrl = 'https://night-potato-next-js.netlify.app/api';

export async function postRecipe(authToken: string, userToken: string, recipe: IRecipeRequest) {
  try {
    return await axios.post(`${apiUrl}/recipes?authToken=${authToken}&userId=${userToken}`, recipe);
  } catch (error) {
    throw new Error(error);
  }
}

export async function putRecipe(authToken: string, userToken: string, recipe: IRecipeRequest) {
  try {
    return await axios.put(`${apiUrl}/recipes?authToken=${authToken}&userId=${userToken}`, recipe);
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
