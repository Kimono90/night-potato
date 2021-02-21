import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import RecipeOverviewPage from './pages/recipe-overview-page/recipe-overview-page';
import RecipeSummaryPage from './pages/recipe-summary-page/recipe-summary-page';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={RecipeOverviewPage} />
        <Route path="/summary/:id" component={RecipeSummaryPage} />
        {/*<Route path="/add/:recipeId" component={RecipeAddPage} />*/}
      </Switch>
    </Router>
  );
}

export default App;
