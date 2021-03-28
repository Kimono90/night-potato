export interface IRecipe {
  id: number;
  metaInfo: IRecipeMetaInfo;
  ingredients: IIngredient[];
  equipment: IEquipment[];
  instructionSteps: IInstructionStep[];
}

export interface IRecipeMetaInfo {
  name: string;
  portions: number;
  prepTimeInMinutes: number;
  kcalPerPortion: number;
  imgUrls: string[];
}

export interface IInstructionStep {
  stepNr: number;
  stepDescription: string;
  isChecked: boolean;
}

export interface IEquipment {
  id: number;
  name: string;
}

export interface IIngredient {
  id: number;
  product: string;
  amount: number;
  measurement: string;
  isChecked: boolean;
}
