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
        imgUrl="https://www.eefkooktzo.nl/wp-content/uploads/2020/04/Indiase-curry-met-paneer.jpg"
      />
      <RecipeSummaryTile
        recipeName="Brownies"
        portions={6}
        prepTimeInMinutes={60}
        kcalPerPortion={250}
        imgUrl="https://www.leukerecepten.nl/wp-content/uploads/2019/10/brownies.jpg"
      />
      <RecipeSummaryTile
        recipeName="Bami with Saté"
        portions={4}
        prepTimeInMinutes={40}
        kcalPerPortion={600}
        imgUrl="https://www.ramadanrecepten.nl/wp-content/uploads/2015/05/bami-spiesjes-kip-satesaus-1.jpg"
      />
    </div>
  );
}
