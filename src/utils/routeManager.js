import { Route, Redirect } from 'react-router-dom';

export function RedirectIfLoggedIn({ user, loggedInPath, children, ...restProps }) {
  return <Route {...restProps}>{user ? <Redirect to={{ pathname: loggedInPath }} /> : children}</Route>;
}

export function ProtectedRoute({ user, children, ...restProps }) {
  return <Route {...restProps}>{user ? children : <Redirect to={{ pathname: 'signin' }} />}</Route>;
}
