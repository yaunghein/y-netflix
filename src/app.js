import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { Home, Browse, SignIn, SignUp } from './pages';
import { useAuthListener } from './hooks';
import { RedirectIfLoggedIn, ProtectedRoute } from './utils/routeManager';

const App = () => {
  const { user } = useAuthListener();

  return (
    // "homepage": "https://yaunghein.github.io/y-netflix",
    <Router basename='/y-netflix'>
      {/* <Router> */}
      <Switch>
        <RedirectIfLoggedIn user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
          <SignIn />
        </RedirectIfLoggedIn>
        <RedirectIfLoggedIn user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}>
          <SignUp />
        </RedirectIfLoggedIn>
        <ProtectedRoute user={user} path={ROUTES.BROWSE}>
          <Browse />
        </ProtectedRoute>
        <RedirectIfLoggedIn exact user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME}>
          <Home />
        </RedirectIfLoggedIn>
      </Switch>
    </Router>
  );
};
export default App;
