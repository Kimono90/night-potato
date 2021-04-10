import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RecipeOverviewPage from './pages/recipe-overview-page/recipe-overview-page';
import RecipeSummaryPage from './pages/recipe-summary-page/recipe-summary-page';
import AppMenu from './components/app-menu/app-menu';
import { FirebaseProvider } from './contexts/firebase-auth-context';
import { CreateRecipePage } from './pages/create-recipe-page/create-recipe-page';

function App() {
  return (
    <FirebaseProvider>
      <Router>
        <AppMenu />
        <Switch>
          <Route exact path="/" component={RecipeOverviewPage} />
          <Route path="/summary/:recipeId" component={RecipeSummaryPage} />
          <Route path="/create" component={CreateRecipePage} />
          {/*<Route path="/edit/:recipeId" component={EditRecipePage} />*/}
          {/*<Route path="/my-recipes" component={MyRecipesPage} />*/}
          {/*<Route path="/my-profile" component={MyProfilePage} />*/}
        </Switch>
      </Router>
    </FirebaseProvider>
  );
}

export default App;
