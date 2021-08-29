import Login from '../pages/Login';
import Home from '../pages/Home';
import Followers from '../pages/Followers';
import Following from '../pages/Following';
import AnotherUser from '../pages/AnotherUser';
import Repositorys from '../pages/Repositorys';
import { useAuth } from '../contexts/Auth';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

export default function AppRoute() {
  const { signed } = useAuth();

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/repos">
          <Repositorys />
        </Route>
        <Route path="/followers">
          <Followers />
        </Route>
        <Route path="/following">
          <Following />
        </Route>
        <Route path="/user/:userId">
          <AnotherUser />
        </Route>
      </Switch>
    </Router>
  );
}
