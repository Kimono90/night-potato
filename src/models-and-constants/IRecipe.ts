export interface IRecipe {
  recipeId: string;
  metaInfo: IRecipeMetaInfo;
  ingredients: IIngredient[];
  equipment: IEquipment[];
  instructions: string;
}

export interface IRecipeMetaInfo {
  name: string;
  portions: number | undefined;
  prepTimeInMinutes: number | undefined;
  kcalPerPortion: number | undefined;
  labels: string[];
  imgUrl: string;
}

export interface IEquipment {
  equipmentId: string;
  name: string;
}

export interface IIngredient {
  ingredientId: string;
  name: string;
  amount: number | undefined;
  measurement: string;
}
