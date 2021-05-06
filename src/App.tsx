import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import RecipeOverviewPage from './pages/recipe-overview-page/recipe-overview-page';
import RecipeSummaryPage from './pages/recipe-summary-page/recipe-summary-page';
import AppMenu from './components/app-menu/app-menu';
import { FirebaseContext, FirebaseProvider } from './contexts/firebase-auth-context';
import { RecipeCreatePage } from './pages/create-recipe-page/recipe-create-page';
import { useDynamicPageTitle } from './hooks/use-dynamic-page-title';

function App() {
  useDynamicPageTitle();
  const firebaseContext = useContext(FirebaseContext);
  const isLoggedIn = firebaseContext.user;

  return (
    <FirebaseProvider>
      <Router>
        <AppMenu />
        <Switch>
          <Route exact path="/" component={RecipeOverviewPage} />
          <Route path="/summary/:recipeId" component={RecipeSummaryPage} />
          {isLoggedIn && <Route path="/create" component={RecipeCreatePage} /> }
          {/*<Route path="/edit/:recipeId" component={EditRecipePage} />*/}
          {/*<Route path="/my-recipes" component={MyRecipesPage} />*/}
          {/*<Route path="/my-profile" component={MyProfilePage} />*/}
          <Route path='*'>
            <Redirect to='/'/>
          </Route>
        </Switch>
      </Router>
    </FirebaseProvider>
  );
}

export default App;
