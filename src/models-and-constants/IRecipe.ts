export interface IRecipe {
  id: number;
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
  id: string;
  name: string;
}

export interface IIngredient {
  id: string;
  productName: string;
  amount: number;
  measurement: string;
}
