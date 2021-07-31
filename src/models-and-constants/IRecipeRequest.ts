import { IRecipe } from './IRecipe';

export interface IRecipeRequest {
  recipe: IRecipe;
  imageFile: File | null;
}
