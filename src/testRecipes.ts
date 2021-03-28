import type { IRecipe } from './models-and-constants/IRecipe';
import { puddingImage, testImg1, testImg2, testImg3 } from './testImgs';

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

export const brazilianPudding: IRecipe = {
  id: 3,
  metaInfo: {
    name: 'Brazilian Pudding',
    portions: 4,
    prepTimeInMinutes: 60,
    kcalPerPortion: 350,
    imgUrls: [puddingImage],
  },

  ingredients: [
    { id: 1, product: 'Can of condensed milk (400g)', amount: 1, measurement: 'pcs', isChecked: false },
    { id: 2, product: 'Eggs', amount: 2, measurement: '', isChecked: false },
    { id: 3, product: 'Sugar', amount: 100, measurement: 'gram', isChecked: false },
    { id: 4, product: 'Milk', amount: 400, measurement: 'ml', isChecked: false },
  ],
  equipment: [
    { id: 1, name: 'Mixer / Whisker' },
    { id: 2, name: 'Big bowl to mix it all up' },
    { id: 3, name: 'Ramekin (4 pieces)' },
    { id: 4, name: 'Sauce pan' },
    { id: 5, name: 'Baking tray for bain marie' },
  ],
  instructionSteps: [
    { stepNr: 1, stepDescription: 'Pour the condensed milk into the bowl', isChecked: false },
    { stepNr: 2, stepDescription: 'Pour 400ml of milk into the bowl', isChecked: false },
    { stepNr: 3, stepDescription: 'Add two eggs into the bowl', isChecked: false },
    { stepNr: 4, stepDescription: "Whisk it until it's all thoroughly combined", isChecked: false },
    {
      stepNr: 5,
      stepDescription:
        'For the caramel sauce, in a pan warm up the sugar with 3 tbps of water until it darkens and caramelizes',
      isChecked: false,
    },
    {
      stepNr: 6,
      stepDescription:
        'Pour a bit of the caramel in each of the 4 ramekins, rotating them a bit to coat the sides as well as the bottom (do one at a time and be careful because they get very hot).',
      isChecked: false,
    },
    {
      stepNr: 7,
      stepDescription: 'Pour the mix (condensed milk, eggs, milk) into each ramekin',
      isChecked: false,
    },
    {
      stepNr: 8,
      stepDescription: 'Add all ramekins to the baking tray and fill the baking tray almost to the brim with water',
      isChecked: false,
    },
    {
      stepNr: 9,
      stepDescription: 'Bake it in the oven for 46~60 min on 180°C',
      isChecked: false,
    },
    {
      stepNr: 10,
      stepDescription: 'Let it cool for 30 min after done and put them in the fridge for at least 2h',
      isChecked: false,
    },
  ],
};
