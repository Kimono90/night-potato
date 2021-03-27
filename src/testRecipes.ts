import type { IRecipe } from './models-and-constants/IRecipe';
import { testImg1, testImg2, testImg3 } from './testImgs';

export const testRecipe1: IRecipe = {
  id: 1,
  metaInfo: {
    name: 'Vegetarian Chickpea Curry',
    portions: 4,
    prepTimeInMinutes: 50,
    kcalPerPortion: 500,
    imgUrls: [testImg1, testImg2, testImg3],
  },
  ingredients: [
    { id: 1, product: 'Chickpeas', amount: 500, measurement: 'gram', isChecked: true },
    { id: 2, product: 'Coconut milk', amount: 250, measurement: 'ml', isChecked: false },
    {
      id: 3,
      product: 'Low-sodium chicken broth and a lot of other stuff',
      amount: 200,
      measurement: 'ml',
      isChecked: false,
    },
  ],
  equipment: [
    { id: 1, name: 'Mixer' },
    { id: 2, name: 'Sharp knife' },
    { id: 3, name: 'Baking tray' },
  ],
  instructionSteps: [
    { stepNr: 2, stepDescription: 'Cut the stuff', isChecked: false },
    { stepNr: 1, stepDescription: 'Buy the stuff', isChecked: true },
    {
      stepNr: 3,
      stepDescription:
        'Cook the stuff. And this is one super long line because I want to test how that looks in the UI so that wont go wrong',
      isChecked: false,
    },
  ],
};

export const testRecipe2: IRecipe = {
  id: 2,
  metaInfo: {
    name: 'Brownies',
    portions: 4,
    prepTimeInMinutes: 60,
    kcalPerPortion: 350,
    imgUrls: ['https://images.unsplash.com/photo-1515037893149-de7f840978e2'],
  },
  ingredients: [
    { id: 1, product: 'Chocolate', amount: 300, measurement: 'gram', isChecked: true },
    { id: 2, product: 'Eggs', amount: 2, measurement: 'pcs', isChecked: false },
    { id: 3, product: 'Sugar', amount: 250, measurement: 'gram', isChecked: false },
    { id: 4, product: 'Butter', amount: 200, measurement: 'gram', isChecked: false },
  ],
  equipment: [
    { id: 1, name: 'Mixer' },
    { id: 2, name: 'Sharp knife' },
    { id: 3, name: 'Baking tray' },
  ],
  instructionSteps: [
    { stepNr: 2, stepDescription: 'Cut the stuff', isChecked: false },
    { stepNr: 1, stepDescription: 'Buy the stuff', isChecked: true },
    {
      stepNr: 3,
      stepDescription:
        'Cook the stuff. And this is one super long line because I want to test how that looks in the UI so that wont go wrong',
      isChecked: false,
    },
  ],
};
