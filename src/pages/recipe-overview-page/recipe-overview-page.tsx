import React from 'react';
import '../recipe-overview-page/recipe-overview-page.scss';
import RecipeSummaryTile from '../../components/recipe-summary-tile/recipe-summary-tile';

export default function RecipeOverviewPage() {
  return (
    <div className="overview-page">
      <h1>Recipes</h1>
      <RecipeSummaryTile
        recipeName="Vegetarian Chickpea Curry"
        portions={4}
        prepTimeInMinutes={50}
        kcalPerPortion={500}
        imgUrl="https://images.unsplash.com/photo-1585937421612-70a008356fbe"
      />
      <RecipeSummaryTile
        recipeName="Brownies"
        portions={6}
        prepTimeInMinutes={60}
        kcalPerPortion={250}
        imgUrl="https://images.unsplash.com/photo-1515037893149-de7f840978e2"
      />
      <RecipeSummaryTile
        recipeName="Poke Bowl"
        portions={4}
        prepTimeInMinutes={40}
        kcalPerPortion={600}
        imgUrl="https://images.unsplash.com/photo-1542354255-839e272e3408"
      />
      <RecipeSummaryTile
        recipeName="Paõ de Queijo"
        portions={2}
        prepTimeInMinutes={45}
        kcalPerPortion={350}
        imgUrl="https://images.unsplash.com/photo-1598142982901-df6cec10ae35"
      />
      <RecipeSummaryTile
        recipeName="Pizza Margherita"
        portions={2}
        prepTimeInMinutes={90}
        kcalPerPortion={600}
        imgUrl="https://images.unsplash.com/photo-1574071318508-1cdbab80d002"
      />
    </div>
  );
}
