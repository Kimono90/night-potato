import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import RecipeOverviewPage from "./pages/recipe-overview-page/recipe-overview-page";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={RecipeOverviewPage} />
        {/*<Route path="/summary/:recipeId" component={RecipeSummaryPage} />*/}
        {/*<Route path="/add/:recipeId" component={RecipeAddPage} />*/}
      </Switch>
    </Router>
  );
}

export default App;
