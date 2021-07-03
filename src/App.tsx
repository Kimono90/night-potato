import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import RecipeOverviewPage from './pages/recipe-overview-page/recipe-overview-page';
import RecipeSummaryPage from './pages/recipe-summary-page/recipe-summary-page';
import AppMenu from './components/app-menu/app-menu';
import { FirebaseProvider } from './contexts/firebase-auth-context';
import { RecipeCreateEditPage } from './pages/recipe-create-edit-page/recipe-create-edit-page';
import { useDynamicPageTitle } from './hooks/use-dynamic-page-title';

export default function App() {
  useDynamicPageTitle();

  return (
    <FirebaseProvider>
      <Router>
        <AppMenu />
        <Switch>
          <Route exact path="/" component={RecipeOverviewPage} />
          <Route path="/summary/:recipeId" component={RecipeSummaryPage} />
          <Route path="/create" component={RecipeCreateEditPage} />
          <Route path="/edit/:recipeId" component={RecipeCreateEditPage} />
          {/*<Route path="/my-recipes" component={MyRecipesPage} />*/}
          {/*<Route path="/my-profile" component={MyProfilePage} />*/}
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </FirebaseProvider>
  );
}
