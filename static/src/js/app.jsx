import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { Home } from './pages/home.jsx';
import { Agua } from './pages/agua.jsx';
import { Tienda } from './pages/tienda.jsx';

  export function App() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/agua">Agua</Link>
              </li>
              <li>
                <Link to="/tienda">Tienda</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/agua">
              <Agua />
            </Route>
            <Route path="/tienda">
              <Tienda />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
