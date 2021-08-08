import { IRecipe } from './IRecipe';
import dayjs from 'dayjs';

export interface INextJsResponseList {
  data: IRecipeResponseData[];
}

export interface INextJsResponseItem {
  data: IRecipeResponseData;
}

export interface IRecipeResponseData {
  recipe: IRecipe;
  createdOn: dayjs.Dayjs;
  lastEditedOn: dayjs.Dayjs | null;
}
