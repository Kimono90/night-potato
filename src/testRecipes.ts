import type { IRecipe } from './models-and-constants/IRecipe';
import { puddingImage, testImg1, testImg2, testImg3 } from './testImgs';
import { labels } from './components/recipe-label/label-constants';

export const testRecipe1: IRecipe = {
  id: 1,
  metaInfo: {
    name: 'Vegetarian Chickpea Curry',
    portions: 4,
    prepTimeInMinutes: 50,
    kcalPerPortion: 500,
    labels: [labels.vegan, labels.vegetarian],
    imgUrls: [testImg1, testImg2, testImg3],
  },
  ingredients: [
    { id: '1', name: 'Chickpeas', amount: 500, measurement: 'gram' },
    { id: '2', name: 'Coconut milk', amount: 250, measurement: 'ml' },
    {
      id: '3',
      name: 'Low-sodium chicken broth and a lot of other stuff',
      amount: 200,
      measurement: 'ml',
    },
  ],
  equipment: [
    { id: '1', name: 'Mixer' },
    { id: '2', name: 'Sharp knife' },
    { id: '3', name: 'Baking tray' },
  ],
  instructions:
    '1.\tCut the stuff\n' +
    '2.\tBuy the stuff\n' +
    '3.\tCook the stuff. And this is one super long line because I want to test how that looks in the UI so that wont go wrong\n',
};

export const testRecipe2: IRecipe = {
  id: 2,
  metaInfo: {
    name: 'Brownies',
    portions: 4,
    prepTimeInMinutes: 60,
    kcalPerPortion: 350,
    labels: [labels.vegetarian, labels.vegan, labels.glutenFree, labels.dairyFree],
    imgUrls: ['https://images.unsplash.com/photo-1515037893149-de7f840978e2'],
  },
  ingredients: [
    { id: '1', name: 'Chocolate', amount: 300, measurement: 'gram' },
    { id: '2', name: 'Eggs', amount: 2, measurement: 'pcs' },
    { id: '3', name: 'Sugar', amount: 250, measurement: 'gram' },
    { id: '4', name: 'Butter', amount: 200, measurement: 'gram' },
  ],
  equipment: [
    { id: '1', name: 'Mixer' },
    { id: '2', name: 'Sharp knife' },
    { id: '4', name: 'Baking tray' },
  ],
  instructions:
    '1.\tCut the stuff\n' +
    '2.\tBuy the stuff\n' +
    '3.\tCook the stuff. And this is one super long line because I want to test how that looks in the UI so that wont go wrong\n',
};

export const brazilianPudding: IRecipe = {
  id: 3,
  metaInfo: {
    name: 'Brazilian Pudding',
    portions: 4,
    prepTimeInMinutes: 60,
    kcalPerPortion: 350,
    labels: [labels.vegetarian, labels.glutenFree],
    imgUrls: [puddingImage],
  },

  ingredients: [
    { id: '1', name: 'Can of condensed milk (400g)', amount: 1, measurement: '' },
    { id: '2', name: 'Eggs', amount: 2, measurement: '' },
    { id: '3', name: 'Sugar', amount: 100, measurement: 'gram' },
    { id: '4', name: 'Milk', amount: 400, measurement: 'ml' },
  ],
  equipment: [
    { id: '1', name: 'Mixer / Whisker' },
    { id: '2', name: 'Big bowl to mix it all up' },
    { id: '3', name: 'Ramekin (4 pieces)' },
    { id: '4', name: 'Sauce pan' },
    { id: '5', name: 'Baking tray for bain marie' },
  ],
  instructions:
    '1.\tPour the condensed milk into the bowl\n' +
    '2.\tPour 400ml of milk into the bowl\n' +
    '3.\tAdd two eggs into the bowl\n' +
    '4.\tWhisk it until its all thoroughly combined\n' +
    '5.\tFor the caramel sauce, in a pan warm up the sugar with 3 tbps of water until it darkens and caramelizes\n' +
    '6.\tPour a bit of the caramel in each of the 4 ramekins, rotating them a bit to coat the sides as well as the bottom (do one at a time and be careful because they get very hot).\n' +
    '7.\tPour the mix (condensed milk, eggs, milk) into each ramekin\n' +
    '8.\tAdd all ramekins to the baking tray and fill the baking tray almost to the brim with water\n' +
    '9.\tBake it in the oven for 46~60 min on 180°C\n' +
    '10.\tLet it cool for 30 min after done and put them in the fridge for at least 2h\n',
};
