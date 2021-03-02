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
  imgUrl: string;
}

export interface IInstructionStep {
  stepNr: number;
  stepDescription: string;
  isDone: boolean;
}

export interface IIngredient {
  product: string;
  amount: number;
  measurement: string;
}