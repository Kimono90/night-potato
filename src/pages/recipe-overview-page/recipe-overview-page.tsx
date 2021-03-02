import React, { useEffect } from 'react';
import OverviewCard from '../../components/recipe-overview-card/overview-card';
import { StyledRecipeOverviewPage } from './recipe-overview-page.styles';

export default function RecipeOverviewPage() {
    useEffect(() => {
        //TODO: get all recipes
    }, [])

    //TODO map through all recipes to render Summary cards
  return (
    <StyledRecipeOverviewPage data-label="overview-page">
      <h1>Recipes</h1>
      <OverviewCard
        recipeId={1}
        recipeInfo={{
          name: 'Vegetarian Chickpea Curry',
          portions: 4,
          prepTimeInMinutes: 50,
          kcalPerPortion: 500,
          imgUrl:
            'https://images.unsplash.com/photo-1585937421612-70a008356fbe',
        }}
      />
      <OverviewCard
        recipeId={2}
        recipeInfo={{
          name: 'Brownies',
          portions: 6,
          prepTimeInMinutes: 60,
          kcalPerPortion: 250,
          imgUrl:
            'https://images.unsplash.com/photo-1515037893149-de7f840978e2',
        }}
      />
      <OverviewCard
        recipeId={3}
        recipeInfo={{
          name: 'Poke Bowl',
          portions: 4,
          prepTimeInMinutes: 40,
          kcalPerPortion: 600,
          imgUrl: 'https://images.unsplash.com/photo-1542354255-839e272e3408',
        }}
      />
      <OverviewCard
        recipeId={4}
        recipeInfo={{
          name: 'Paõ de Queijo',
          portions: 2,
          prepTimeInMinutes: 45,
          kcalPerPortion: 350,
          imgUrl:
            'https://images.unsplash.com/photo-1598142982901-df6cec10ae35',
        }}
      />
      <OverviewCard
        recipeId={5}
        recipeInfo={{
          name: 'Pizza Margherita',
          portions: 2,
          prepTimeInMinutes: 90,
          kcalPerPortion: 600,
          imgUrl:
            'https://images.unsplash.com/photo-1574071318508-1cdbab80d002',
        }}
      />
    </StyledRecipeOverviewPage>
  );
}
