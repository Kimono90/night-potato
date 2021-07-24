export interface IRecipe {
  recipeId: string;
  metaInfo: IRecipeMetaInfo;
  ingredients: IIngredient[];
  equipment: IEquipment[];
  instructions: string;
}

export interface IRecipeMetaInfo {
  name: string;
  portions: number;
  prepTimeInMinutes: number;
  kcalPerPortion: number;
  labels: string[];
  imgUrls: string[];
}

export interface IEquipment {
  equipmentId: string;
  name: string;
}

export interface IIngredient {
  ingredientId: string;
  name: string;
  amount: number;
  measurement: string;
}
