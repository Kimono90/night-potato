export interface IRecipe {
  id: number;
  metaInfo: IRecipeMetaInfo;
  ingredients: IIngredient[];
  instructionSteps: IInstructionStep[]
}

export interface IRecipeMetaInfo {
  name: string;
  portions: number;
  prepTimeInMinutes: number;
  kcalPerPortion: number;
  imgUrls: string [];
}

export interface IInstructionStep {
  stepNr: number;
  stepDescription: string;
  isChecked: boolean;
}

export interface IIngredient {
  id: number;
  product: string;
  amount: number;
  measurement: string;
  isChecked: boolean
}
