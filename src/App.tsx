import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import RecipeOverviewPage from './pages/recipe-overview-page/recipe-overview-page';
import RecipeSummaryPage from './pages/recipe-summary-page/recipe-summary-page';
import AppMenu from './components/app-menu/app-menu';
import { FirebaseProvider } from './contexts/firebase-auth-context';
import { RecipeCreateEditPage } from './pages/recipe-create-edit-page/recipe-create-edit-page';
import { useDynamicPageTitle } from './hooks/use-dynamic-page-title';
import MyRecipesPage from './pages/my-recipes-page/my-recipes-page';
import { MyProfilePage } from './pages/my-profile-page/my-profile-page';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  useDynamicPageTitle();

  return (
    <FirebaseProvider>
      <Router>
        <AppMenu />
        <ToastContainer theme="dark" progressStyle={{ backgroundColor: 'grey' }} />
        <Switch>
          <Route exact path="/" component={RecipeOverviewPage} />
          <Route path="/summary/:recipeId" component={RecipeSummaryPage} />
          <Route path="/create" component={RecipeCreateEditPage} />
          <Route path="/edit/:recipeId" component={RecipeCreateEditPage} />
          <Route path="/my-recipes" component={MyRecipesPage} />
          <Route path="/my-profile" component={MyProfilePage} />
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </FirebaseProvider>
  );
}
