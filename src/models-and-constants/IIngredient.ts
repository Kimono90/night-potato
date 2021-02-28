import type { Measurements } from "./Measurements";

export interface IIngredient {
  product: string;
  measurement: Measurements;
  amount: number;
}
