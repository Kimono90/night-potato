export const labels: Record<string, string> = {
  dairyFree: 'Dairy Free',
  vegetarian: 'Vegetarian',
  vegan: 'Vegan',
  glutenFree: 'Gluten Free',
};

export const allLabels = Object.keys(labels).map((key) => ({ key, value: labels[key] }));
