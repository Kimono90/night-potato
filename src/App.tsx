import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RecipeOverviewPage from './pages/recipe-overview-page/recipe-overview-page';
import RecipeSummaryPage from './pages/recipe-summary-page/recipe-summary-page';
import AppMenu from './components/app-menu/app-menu';

function App() {
  return (
    <Router>
      <AppMenu />
      <Switch>
        <Route exact path="/" component={RecipeOverviewPage} />
        <Route path="/summary/:recipeId" component={RecipeSummaryPage} />
        {/*<Route path="/add/:recipeId" component={RecipeAddPage} />*/}
      </Switch>
    </Router>
  );
}

export default App;
